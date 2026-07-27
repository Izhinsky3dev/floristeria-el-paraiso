# Floristería El Paraíso — sitio web

Reconstrucción del proyecto tras la pérdida del repositorio de GitHub original.
Sitio estático (HTML + CSS + JavaScript puro, sin backend ni base de datos).

## Estado de la recuperación

- ✅ **HTML** (`index.html`, `arreglos.html`, `categoria.html`) — recuperado completo.
- ✅ **CSS** (`css/styles.css`) — recuperado completo.
- ✅ **JavaScript** (`js/main.js`) — recuperado completo. Este archivo contiene
  **todo el catálogo** (categorías, subcategorías, nombres de productos, precios
  y rutas de imagen), ya que el sitio renderiza los productos en el navegador
  con JavaScript en vez de traerlos de una base de datos.
- ⚠️ **Imágenes de productos** — el volcado con HTTrack solo trajo 4 imágenes
  (`hero.jpg`, `arreglosflorales.jpg`, `eventosrealizados.jpg`,
  `eventossociales.jpg`), porque HTTrack no ejecuta JavaScript y por lo tanto
  no puede "ver" las imágenes que `main.js` inserta dinámicamente. En total el
  sitio usa **227 imágenes distintas**, así que faltan 225.

## El dominio sigue funcionando

`floristeriaelparaiso.com` **sigue en línea ahora mismo**. Lo que se perdió
fue el repositorio de GitHub (probablemente solo se usaba como respaldo del
código), no el hosting donde vive el sitio publicado. Por eso se puede
recuperar el 100% de las imágenes descargándolas directamente del sitio en
vivo — ver más abajo.

## Cómo completar las imágenes faltantes

1. En `images_faltantes.txt` está la lista exacta de las 225 imágenes que
   faltan (con su ruta relativa dentro de `images/`).
2. Ejecuta el script de PowerShell incluido, que las descarga una por una
   directamente desde el sitio en vivo:
   ```powershell
   powershell -ExecutionPolicy Bypass -File .\descargar-imagenes-faltantes.ps1
   ```
3. Revisa `images_no_descargadas.txt` (si se genera) por si algún nombre de
   archivo con tildes/espacios no coincidió exactamente con el servidor.

**Recomendado además:** entra al panel de Namecheap (o donde tengas
contratado el hosting real, si no es el mismo Namecheap) y revisa si tienes
acceso FTP/cPanel al sitio. Si lo tienes, es más rápido y 100% confiable
descargar la carpeta `images/` completa desde ahí en vez de una por una.

## Estructura del proyecto

```
Floristeria-El-Paraiso/
├── index.html
├── arreglos.html
├── categoria.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── images/
│   └── ... (fotos de productos)
├── images_faltantes.txt
├── descargar-imagenes-faltantes.ps1
├── README.md
└── .gitignore
```

## Correcciones ya aplicadas sobre el volcado de HTTrack

- Se eliminaron los comentarios y archivos propios de HTTrack
  (`hts-cache/`, `hts-log.txt`, banners de "Mirrored from...").
- Se unificaron los archivos duplicados: `index-2.html` (idéntico a
  `index.html`) y las dos copias de `categoria.html` que HTTrack había
  renombrado como `categoria44f3.html` y `categoriae67a.html` por llevar
  distinto query string (`?id=...`).
- Se corrigieron los enlaces internos para que apunten de nuevo a
  `index.html` y `categoria.html` en vez de a los nombres generados por
  HTTrack.

## Detalle menor a revisar

El `<title>` de `categoria.html` dice **"Catálogo - Florería Bella Flor"**
(un nombre distinto al del negocio). Parece un descuido del código original,
no algo que se rompió en la recuperación — vale la pena corregirlo.

## Próximos pasos sugeridos

- [ ] Completar imágenes faltantes (ver arriba).
- [ ] Corregir el `<title>` de `categoria.html`.
- [ ] Crear un repositorio nuevo en GitHub y subir este proyecto.
- [ ] Configurar el hosting/DNS para que vuelva a apuntar aquí si hace falta.
- [ ] Mejoras opcionales: responsive, SEO, carrito, checkout por WhatsApp más
      integrado.
