/* Botón fijo "Volver a MundyApps" para las páginas de demo. Se oculta si la app está instalada (modo standalone). */
(function(){
  try{if(matchMedia("(display-mode: standalone)").matches||navigator.standalone)return}catch(e){}
  if(document.getElementById("volver-web"))return;
  var css="#volver-web{position:fixed;right:max(10px,env(safe-area-inset-right,0px));bottom:max(10px,env(safe-area-inset-bottom,0px));z-index:2147483000;display:inline-flex;align-items:center;gap:6px;background:#7BE23A;color:#050E20;font:700 12px/1 'Segoe UI',system-ui,-apple-system,Arial,sans-serif;padding:7px 12px;border-radius:99px;text-decoration:none;box-shadow:0 2px 8px rgba(5,14,32,.4);border:1.5px solid #050E20;opacity:.92}#volver-web:hover{filter:brightness(1.08);opacity:1}#volver-web:focus-visible{outline:3px solid #fff;outline-offset:2px}@media print{#volver-web{display:none}}";
  var st=document.createElement("style");st.textContent=css;document.head.appendChild(st);
  var a=document.createElement("a");a.id="volver-web";a.href="/demos.html";a.setAttribute("aria-label","Volver a la web de MundyApps");
  a.textContent="← Volver a MundyApps";
  document.body.appendChild(a);
})();
