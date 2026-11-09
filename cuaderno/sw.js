/* Service worker: la app funciona sin conexión una vez abierta.
 * - Los archivos propios (HTML, JS, CSS, iconos) se sirven de la caché y se refrescan en segundo plano.
 * - Nunca se cachea nada de otros dominios (p. ej. las llamadas a Gemini van siempre directas a la red).
 * Sube VERSION cuando cambies este archivo. */
const VERSION = 'v5';
const CACHE = `cuaderno-${VERSION}`;

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(['./', 'manifest.webmanifest', 'icons/icon-192.png', 'descargar.html', 'legal.html', 'ayuda.html'])).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((claves) => Promise.all(claves.filter((k) => k.startsWith('cuaderno-') && k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // otros dominios: directo a la red
  if (req.cache === 'no-store') return; // comprobaciones de versión: siempre a la red
  // config.json (días de prueba, contacto): siempre de la red si hay conexión, para que tus cambios lleguen en seguida
  if (url.pathname.endsWith('/config.json')) {
    e.respondWith(
      fetch(req)
        .then((resp) => {
          if (resp.ok) caches.open(CACHE).then((c) => c.put(req, resp.clone()));
          return resp;
        })
        .catch(() => caches.match(req).then((r) => r ?? Response.error())),
    );
    return;
  }
  e.respondWith(
    caches.open(CACHE).then(async (cache) => {
      const guardada = await cache.match(req, { ignoreSearch: req.mode === 'navigate' });
      const red = fetch(req)
        .then((resp) => {
          if (resp.ok) cache.put(req, resp.clone());
          return resp;
        })
        .catch(() => undefined);
      if (guardada) {
        e.waitUntil(red); // refresca en segundo plano
        return guardada;
      }
      const resp = await red;
      if (resp) return resp;
      if (req.mode === 'navigate') return (await cache.match('./')) ?? Response.error();
      return Response.error();
    }),
  );
});
