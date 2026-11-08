# Web de MundyApps

Web estática (HTML y CSS, sin dependencias) publicada en Vercel: https://web-rsg.vercel.app/

Cada vez que se sube un cambio a la rama `main` de este repositorio, Vercel la republica sola en uno o dos minutos.

## Archivos

| Archivo | Qué contiene |
|---|---|
| `index.html` | Portada: soluciones, banda de hostelería, cómo trabajamos y contacto (formulario) |
| `hosteleria.html` | Página de MundyApps Hostelería |
| `aviso-legal.html`, `privacidad.html`, `cookies.html` | Textos legales |
| `site.css` | Estilos de la portada y de la página de hostelería (colores, tipografía, espaciados) |
| `legal.css` | Estilos de las páginas legales |
| `icon.png`, `favicon.png` | Símbolo del logo y icono de la pestaña |

## Cómo modificar la web

1. **Desde GitHub, sin instalar nada:** abre el archivo, pulsa el lápiz, cambia el texto y pulsa "Commit changes".
2. **Con VS Code:** clona el repositorio, edita, haz commit y push a `main`.
3. **Pidiéndoselo a Claude:** hay que volver a conectarle este repositorio en cada chat nuevo.

Para cambios grandes, trabaja en una rama aparte. Vercel genera una dirección de prueba sin tocar la web real; cuando te guste, se une a `main`.

## Si algo sale mal

- En Vercel, en "Deployments", se puede volver a una versión anterior en un clic.
- GitHub guarda todo el historial de cambios y permite revertirlos.
- Si no ves un cambio, recarga a la fuerza con Ctrl+F5.

## Cosas que no están en el código

- **Formulario de contacto:** usa Formspree. El correo de destino y el antispam se configuran en la cuenta de Formspree; no hace falta republicar.
- **Dominio:** se conectará desde el panel de Vercel cuando se compre.

## Pendiente

- Rellenar `[NIF]` y `[Domicilio]` en `aviso-legal.html` y `privacidad.html` cuando comience la actividad (alta como autónomo).
- Revisión de los textos legales por una gestoría antes de captar clientes.
- Dominio y correo propio.
- Quitar el aviso "Borrador: los textos son provisionales" cuando los textos sean definitivos.
- Sustituir los textos de la sección "Tareas que solemos simplificar" por proyectos reales.
- Sustituir las tarjetas "En preparación" de `hosteleria.html` por demos y casos reales.
