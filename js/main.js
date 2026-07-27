let lightboxImages = [];
let currentIndex = 0;

let cartCount = 0;

function updateCart() {
  const el = document.getElementById("cartCount");
  if (el) el.textContent = cartCount;
}

function addToCart(producto) {
  cartCount++;
  updateCart();
  alert(`✅ Agregado al carrito: ${producto}`);
}

function irCatalogo(producto) {
  const p = (producto || "").toLowerCase();

  // Si hacen click en la tarjeta "Arreglos" del home -> categorías
  if (p.includes("arreglos")) {
    window.location.href = "arreglos.html";
    return;
  }

  // Si hacen click en Rosas o Tulipanes -> directo a su categoría
  if (p.includes("rosas")) {
    window.location.href = "categoria.html?id=rosas";
    return;
  }
  if (p.includes("tulipanes")) {
    window.location.href = "categoria.html?id=tulipanes";
    return;
  }

  // fallback: si no matchea, manda a categorías
  window.location.href = "arreglos.html";
}


window.addEventListener("DOMContentLoaded", () => {
  updateCart();

  const input = document.getElementById("searchInput");
  const btn = document.getElementById("searchBtn");

  function runSearch() {
    const q = (input?.value || "").trim().toLowerCase();
    if (!q) return;

    // Busca tarjetas por texto (h3)
    const cards = document.querySelectorAll(".producto");
    let found = false;

    cards.forEach((card) => {
      const title = card.querySelector("h3")?.textContent?.toLowerCase() || "";
      const match = title.includes(q);
      card.style.display = match ? "" : "none";
      if (match) found = true;
    });

    if (!found) alert("No se encontró ese producto en esta página.");
  }

  if (btn) btn.addEventListener("click", runSearch);
  if (input) input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") runSearch();
  });

  // Botón carrito (demo)
  /*const cartBtn = document.getElementById("cartBtn");
  if (cartBtn) {
    cartBtn.addEventListener("click", () => {
      alert(`🛒 Carrito: ${cartCount} producto(s)\n(Esto es demo, luego hacemos el carrito real)`);
    });
  }*/
});

// ====== CATEGORÍAS (7) ======
const CATEGORIAS_ARREGLOS = [
  { id: "rosas", nombre: "Arreglos con rosas", img: "images/cat-rosas.jpg" },
  { id: "eternos", nombre: "Arreglos eternos", img: "images/cat-eternos.jpg" },
  { id: "girasoles", nombre: "Arreglos y ramos de girasoles", img: "images/cat-girasoles.jpg" },
  { id: "tulipanes", nombre: "Arreglos y ramos de tulipanes", img: "images/cat-tulipanes.jpg" },
  { id: "box", nombre: "Canastas y box", img: "images/cat-box.jpg" },
  { id: "condolencias", nombre: "Condolencias", img: "images/cat-condolencias.jpg" },
  { id: "ramos", nombre: "Ramos florales", img: "images/cat-ramos.jpg" },
  { id: "eventos_sociales", nombre: "Eventos Sociales", img: "images/eventossociales.jpg" },
  { id: "eventos_realizados", nombre: "Entregas Exitosas - Eventos Realizados", img: "images/eventosrealizados.jpg" },
];


// ====== PRODUCTOS POR CATEGORÍA (ejemplo) ======
const PRODUCTOS = {
  rosas: [
    { nombre: 'Arreglo de rosas (6 rosas y 4 girasoles)', precio: 55, img: 'images/rosas/1.-arreglo de rosas 6 y 4 girasoles- S_55 soles.jpg' },
    { nombre: 'Arreglo clásico de 5 rosas', precio: 40, img: 'images/rosas/2.-arreglo clasico de 5 rosas- s.40 soles.jpg' },
    { nombre: 'Arreglo de 10 rosas con gerbera y girasol', precio: 55, img: 'images/rosas/3.-arreglo rosas 10,gerbera,girasol S.55  .jpg' },
    { nombre: 'Arreglo clásico de 5 rosas con detalles', precio: 45, img: 'images/rosas/4.-arreglo clasico 5 rosas mas detalles S.45 soles.jpg' },
    { nombre: 'Arreglo de 12 rosas con peluche', precio: 85, img: 'images/rosas/5.-arreglo de 12 rosas  mas peluche S.85 soles.jpg' },
    { nombre: 'Arreglo de 8 rosas amarillas con girasol', precio: 50, img: 'images/rosas/6.-arreglos 8 rosas amarillas y girasol S.50 soles .jpg' },
    { nombre: 'Arreglo de 8 rosas con girasol y gerbera', precio: 50, img: 'images/rosas/7.-arreglos de 8 rosas girasol,gerbera S.50 soles .jpg' },
    { nombre: 'Arreglo de 8 rosas con gerberas', precio: 50, img: 'images/rosas/8.-arreglo de 8 rosas gerberas S. 50 soles.jpg' },
    { nombre: 'Arreglo de 5 rosas con girasol y gerbera', precio: 40, img: 'images/rosas/9.-arreglos de 5 rosas girasol gerbera S.40 soles.jpg' },
    { nombre: 'Arreglo de 3 rosas rosadas', precio: 30, img: 'images/rosas/10.-arreglo 3 rosas rosadas S.30 soles .jpg' },
    { nombre: 'Arreglo de 5 rosas con girasol y gerberas', precio: 40, img: 'images/rosas/11.-arreglos de 5 rosas girasol,gerberas S.40 soles .jpg' },
    { nombre: 'Arreglo de 5 rosas con globo', precio: 48, img: 'images/rosas/12.-arreglo de 5 rosas mas globo S.48 soles.jpg' },
    { nombre: 'Arreglo de 12 rosas', precio: 60, img: 'images/rosas/13.-arreglos de 12 rosas S.60 soles .jpg' },
    { nombre: 'Arreglo de 12 rosas con jengibre, gerbera y girasol', precio: 65, img: 'images/rosas/14.-arreglos de 12 rosas ginger, gerbera,girasol S.65 soles .jpg' },
    { nombre: 'Arreglo de 5 rosas', precio: 40, img: 'images/rosas/15.-arreglo de 5 rosas S.40 soles .jpg' },
    { nombre: 'Arreglo de rosas con liliums y gerberas', precio: 70, img: 'images/rosas/16.-arreglo de rosas,liliums,gerberas,S.70 soles .jpg' },
    { nombre: 'Arreglo de 5 rosas', precio: 40, img: 'images/rosas/17.-arreglos de 5 rosas S.40 soles .jpg' },
    { nombre: 'Arreglo de 3 rosas con girasol', precio: 30, img: 'images/rosas/18.-arreglo de 3 rosas,girasol S.30 soles .jpg' },
    { nombre: 'Arreglo de 8 rosas con gerberas y girasoles', precio: 50, img: 'images/rosas/19.-arreglo de 8 rosas gerberas,girasoles S.50 soles .jpg' },
    { nombre: 'Arreglo clásico de 12 rosas con gerberas y girasoles', precio: 65, img: 'images/rosas/20.-arreglo clasico 12 rosas gerberas,girasoles 65 soles .jpg' },
    { nombre: 'Arreglo de 8 rosas con jengibre y girasoles', precio: 50, img: 'images/rosas/21.-arreglo 8 rosas ginger,girasoles S.50 soles .jpg' },
    { nombre: 'Arreglo de 3 rosas con girasol', precio: 30, img: 'images/rosas/22.-arreglo de 3 rosas mas girasol S.30 soles .jpg' },
    { nombre: 'Arreglo de 10 rosas', precio: 55, img: 'images/rosas/23.-arreglo 10 rosas S. 55 soles .jpg' },
    { nombre: 'Arreglo de 5 rosas', precio: 40, img: 'images/rosas/24.- arreglo 5 rosas S.40 soles .jpg' },
    { nombre: 'Arreglo de 5 rosas', precio: 40, img: 'images/rosas/25.- arreglo 5 rosas S.40 soles .jpg' },
    { nombre: 'Arreglo de 8 rosas con girasol y gerberas', precio: 50, img: 'images/rosas/26.- arreglo 8 rosas ,girasol,gerberas S.50 soles.jpg' },
    { nombre: 'Arreglo de 5 rosas', precio: 40, img: 'images/rosas/27.-arreglo 5 rosas S.40 soles .jpg' },
    { nombre: 'Arreglo de 7 rosas', precio: 45, img: 'images/rosas/28.- arreglo 7 rosas S.45 soles .jpg' },
    { nombre: 'Arreglo de 12 rosas con lilium', precio: 65, img: 'images/rosas/29.- arreglo 12 rosas lilum S.65 soles .jpg' },
    { nombre: 'Arreglo de 5 rosas con gerbera', precio: 40, img: 'images/rosas/30.-arreglo 5 rosas mas gerbera S.40 soles .jpg' },
    { nombre: 'Arreglo de 8 rosas con lilium', precio: 55, img: 'images/rosas/31.- arreglo 8 rosas,lilium S.55 soles .jpg' },
    { nombre: 'Arreglo de 8 rosas', precio: 50, img: 'images/rosas/32.-arreglo 8 rosas S.50 soles .jpg' },
    { nombre: 'Arreglo de 3 rosas amarillas', precio: 30, img: 'images/rosas/33.-arreglo 3 rosas amarrillas S.30 soles .jpg' },
    { nombre: 'Arreglo clásico de 9 rosas', precio: 50, img: 'images/rosas/34.-arreglo clasico de 9 rosas S.50 soles .jpg' },
    { nombre: 'Arreglo clásico de 9 rosas', precio: 50, img: 'images/rosas/35.- arreglo clasico 9 rosas S.50 soles .jpg' },
    { nombre: 'Arreglo de 12 rosas', precio: 60, img: 'images/rosas/36.-arreglo 12 rosas S.60 soles .jpg' },
    { nombre: 'Arreglo de 9 rosas con gerbera', precio: 55, img: 'images/rosas/37.- arreglo de 9 rosas ,gerbera S.55 soles .jpg' },
    { nombre: 'Arreglo de 5 rosas', precio: 40, img: 'images/rosas/38.-arreglo de 5 rosas S.40 soles .jpg' }
  ],

  girasoles: [
    {
      nombre: "Box de girasoles",
      precio: 175,
      img: "images/girasoles/1.-box de girasoles S.175 soles  .jpg"
    },
    {
      nombre: "Arreglo de girasoles",
      precio: 40,
      img: "images/girasoles/2.- arreglo de girasoles S.40. soles.jpg"
    },
    {
      nombre: "Ramo de girasoles",
      precio: 17,
      img: "images/girasoles/3.- ramo de girasoles  S.17soles .jpg"
    },
    {
      nombre: "Ramo de 3 girasoles",
      precio: 30,
      img: "images/girasoles/4.-ramo de 3 girasoles S.30 soles .jpg"
    }
  ],

  tulipanes: [
    {
      nombre: "Arreglo de tulipanes en box",
      precio: 160,
      img: "images/tulipanes/1.-arreglo de tulipanes en box S.160 soles.jpg"
    },
    {
      nombre: "Arreglo de tulipanes y lilium en canasta",
      precio: 175,
      img: "images/tulipanes/2.- arreglo de tulipanes y lilium en canasta S.175 soles.jpg"
    },
    {
      nombre: "Arreglo de tulipanes en canasta primaveral",
      precio: 160,
      img: "images/tulipanes/3.- arreglo de tulipanes en canasta primaveral S.160 soles.jpg"
    },
    {
      nombre: "Arreglo de tulipanes y rosas",
      precio: 200,
      img: "images/tulipanes/4.-arreglo de tulipanes y rosas S.200 soles.jpg"
    }
  ],

  eternos: [
    {
      nombre: "Arreglo eterno de tulipanes",
      precio: 80,
      img: "images/eternos/arreglo de tulipanes S.80 soles .jpg"
    },
    {
      nombre: "Arreglo eterno de girasoles (tamaño pequeño)",
      precio: 35,
      img: "images/eternos/arreglos en girasoles S.35 y 45 soles.jpeg"
    },
    {
      nombre: "Arreglo eterno de girasoles (tamaño grande)",
      precio: 45,
      img: "images/eternos/arreglos en girasoles S.35 y 45 soles.jpeg"
    }
  ],

  box: [
    { nombre: "Arreglo box negro con rosas y Lilium", precio: 55, img: "images/box/1.-Arreglo box negro rosas, lilum S.55 soles .png" },
    { nombre: "Arreglo box blanco con rosas y Lilium", precio: 65, img: "images/box/2.-Arreglo de box blanco rosas ,lilum S.65 soles .jpg" },
    { nombre: "Arreglo en carreta con rosas, Lilium y gerberas", precio: 70, img: "images/box/3.-Arreglo de carreta  rosas, lilium , gerberas S.70 soles.jpg" },
    { nombre: "Arreglo en carreta con rosas, Lilium, gerberas y bambú", precio: 75, img: "images/box/4.-Arreglo en carreta rosas, lilium, gerberas, bambu S.75 soles .jpg" },
    { nombre: "Arreglo box con rosas, Lilium y gerberas", precio: 65, img: "images/box/5.-Arreglo box rosas, lilum, gerberas S.65 soles .jpg" },
    { nombre: "Arreglo en canasta con rosas, Lilium y gerbera", precio: 65, img: "images/box/6.-Arreglo canasta de rosas lilum, gerbera S. 65 soles .jpg" },
    { nombre: "Arreglo en canasta con rosas, Lilium y gerberas", precio: 65, img: "images/box/7.-Arreglo canasta rosas lilium, gerberas S. 65 soles .jpg" },
    { nombre: "Arreglo en carreta con rosas, Lilium y gerberas", precio: 75, img: "images/box/8.-Arreglo carreta rosas lilum, gerberas S.75 soles .jpg" },
    { nombre: "Arreglo box floral", precio: 70, img: "images/box/9.-Arreglo box 70 S. soles .jpg" },
    { nombre: "Arreglo floral en canasta", precio: 60, img: "images/box/10.-Arreglo canasta S.60 soles.jpg" },
    { nombre: "Box floral con rosas, Lilium, gerbera y girasol", precio: 65, img: "images/box/11.-Box rosas , lilium, gerbera, girasol S.65 soles.jpg" },
    { nombre: "Box floral con rosas, girasol y Lilium", precio: 65, img: "images/box/12.-Box rosas, girasol, lilium S.65 soles .jpg" },
    { nombre: "Arreglo box floral", precio: 65, img: "images/box/13.-Arreglo box S.65 soles .jpg" },
    { nombre: "Arreglo box floral", precio: 65, img: "images/box/14.-Arreglo box S.65 soles .jpg" },
    { nombre: "Arreglo box floral", precio: 65, img: "images/box/15.-Arreglo box S.65 soles .jpeg" },
    { nombre: "Arreglo box floral", precio: 65, img: "images/box/16.- Arreglo box S.65 soles .jpg" },
    { nombre: "Arreglo floral en canasta", precio: 65, img: "images/box/17.-Arreglo canasta S.65 soles .jpg" },
    { nombre: "Arreglo box floral premium", precio: 80, img: "images/box/18.-Arreglo box S.80 soles.jpg" },
    { nombre: "Arreglo floral en canasta", precio: 65, img: "images/box/19.-Arreglo canasta S.65 soles .jpg" },
    { nombre: "Arreglo floral en canasta", precio: 50, img: "images/box/20.-Arreglo canasta S.50 soles .jpg" },
    { nombre: "Arreglo box floral", precio: 55, img: "images/box/21.-Arreglo box S.55 soles .jpg" },
    { nombre: "Arreglo floral en canasta", precio: 65, img: "images/box/22.-Arreglos canasta S.65 soles .jpg" },
    { nombre: "Arreglo box floral", precio: 55, img: "images/box/23.-Arreglo box S.55 soles.jpg" },
    { nombre: "Arreglo box floral", precio: 55, img: "images/box/24.-Arreglo box S.55 soles .jpg" },
    { nombre: "Arreglo floral en canasta", precio: 65, img: "images/box/25.-Arreglo canasta S.65 soles.jpg" },
    { nombre: "Arreglo box floral", precio: 50, img: "images/box/26.-Arreglo box S.50 soles.jpg" },
    { nombre: "Arreglo box floral", precio: 65, img: "images/box/27.-Arreglo box S.65 soles .jpg" }
  ],
  condolencias: [
    {
      nombre: "Cruz para lápida",
      precio: 65,
      img: "images/condolencias/cruz para lapida S.65 soles.jpg"
    },
    {
      nombre: "Cruz de rosas y gladiolos",
      precio: 90,
      img: "images/condolencias/cruz de rosas y gladiolos S.90 soles.jpg"
    },
    {
      nombre: "Cruz estilo corazón rosas amarillas",
      precio: 90,
      img: "images/condolencias/cruz estilo corazon rosa amarillas S.90 soles.jpg"
    },
    {
      nombre: "Cruz estilo corazón",
      precio: 90,
      img: "images/condolencias/cruz estilo corazon S.90 soles.jpg"
    },
    {
      nombre: "Lágrima para velorio",
      precio: 40,
      img: "images/condolencias/lagrima para velorio S.40 soles .jpg"
    },
    {
      nombre: "Corona de rosas y lilium",
      precio: 240,
      img: "images/condolencias/corona de rosas y lilium S.240.JPG"
    },
    {
      nombre: "Cruz de rosas rojas",
      precio: 85,
      img: "images/condolencias/cruz de rosas rojas S.85 soles.jpg"
    }
  ],

  ramos: [
    {
      nombre: "Ramo de 12 rosas",
      precio: 60,
      img: "images/ramos/1.-ramo de 12 rosas S.60 soles .jpg"
    },
    {
      nombre: "Ramo de 24 rosas",
      precio: 90,
      img: "images/ramos/2.- ramo de 24 rosas S.90 soles .jpg"
    },
    {
      nombre: "Ramo de 24 rosas",
      precio: 90,
      img: "images/ramos/3.-ramo de 24 rosas S.90 soles.jpg"
    },
    {
      nombre: "Ramo de 24 rosas",
      precio: 90,
      img: "images/ramos/4.-ramo de 24 rosas S.90 soles .jpg"
    },
    {
      nombre: "Ramo de doce rosas con gerberas y peluche",
      precio: 120,
      img: "images/ramos/5.- ramo de doce rosas ,gerberas peluche S.120 soles .jpg"
    },
    {
      nombre: "Ramo de flores exóticas",
      precio: 70,
      img: "images/ramos/6.- ramo de flores exoticas S-70 soles .jpg"
    },
    {
      nombre: "Ramo de 3 rosas",
      precio: 18,
      img: "images/ramos/7.-ramos de 3 rosas S.18 soles .jpg"
    },
    {
      nombre: "Ramo de 3 rosas",
      precio: 18,
      img: "images/ramos/8.-ramo 3 rosas S.18 soles .jpg"
    },
    {
      nombre: "Ramo de 3 rosas",
      precio: 18,
      img: "images/ramos/9.-ramosde 3 rosas S18.soles .jpg"
    },
    {
      nombre: "Ramo de rosas y lilum",
      precio: 55,
      img: "images/ramos/10.-ramo de rosas ,lilum S.55 soles .jpg"
    },
    {
      nombre: "Ramo de lilium (2 varas)",
      precio: 45,
      img: "images/ramos/11.-ramo de lilium 2 varas s.45 soles .jpg"
    },
    {
      nombre: "Ramo de girasol con rosas",
      precio: 45,
      img: "images/ramos/12.-ramo de girasol rosas S.45 soles.jpg"
    },
    {
      nombre: "Ramo de rosas",
      precio: 40,
      img: "images/ramos/13.-ramo de rosas S.40 soles .jpg"
    },
    {
      nombre: "Ramo de rosas",
      precio: 50,
      img: "images/ramos/14.-ramo de rosas s.50 soles .jpg"
    }
  ],
  eventos_sociales: {
    nombre: "Eventos Sociales",
    tipo: "subcategorias",
    subcategorias: {
      carro_ceremonia: {
        nombre: "Arreglos de carro - arreglos ceremonia",
        portada: "images/eventos_sociales/carro_ceremonia.jpeg",
        carpeta: "images/carro_ceremonia",
        productos: [
          { nombre: "Gasebo de Ceremonia en Arco", img: "gasebo de ceremonia en arco .jpg" },
          { nombre: "Gasebo de Ceremonia en Arco Circular", img: "gasebo de ceremonia en arco circular.jpg" },
          { nombre: "Arreglo de Carro con Guirnalda y Corazón de Puerta", img: "arreglo de carro girnalda y de coracion de puerta .jpg" },
          { nombre: "Gasebo de Ceremonia en Jupa", img: "gasebo de de cermonia en jupa.jpg" },
          { nombre: "Arreglo de Carro Estándar", img: "arreglo de carro standar.jpeg" },
          { nombre: "Arreglo para Mesa de Ceremonia", img: "arreglo para mesa de ceremonia.jpg" },
          { nombre: "Arreglo de Carro en Corazón", img: "arreglo de carro en corazon .jpg" },
          { nombre: "Arco de Ceremonia", img: "arco de ceremonia.jpg" },
          { nombre: "Arreglos para Sillas de los Novios", img: "arreglos para sillas de novios.jpg" },
          { nombre: "Decoraciones para Ceremonia", img: "decoraciones para ceremonia.jpg" }
        ]

      },
      recepcion: {
        nombre: "Arreglos de recepción",
        portada: "images/eventos_sociales/recepcion.jpg",
        carpeta: "images/recepcion", // o "images/recepción" si no renombraste
        productos: [
          { nombre: "Centro de Mesa con Lilium", img: "3.-centro de mesa con lilium.jpg" },
          { nombre: "Centro de Mesa Alto", img: "8.-centro de mesa alto .jpg" },
          { nombre: "Centro de Mesa con Rosas Lilas", img: "7.-centro de mesa en rosas lilas.jpg" },
          { nombre: "Centro de Mesa con Rosas Rojas", img: "9.centro de mesa con rosas rojas.jpg" },
          { nombre: "Arreglo para Mesa de Quesos", img: "23.-arreglo para mesa de quesos.jpg" },
          { nombre: "Gasebo para Buffet", img: "28.-gasebo para buffet.jpg" },
          { nombre: "Cisne Flotante Decorativo", img: "11.-cisne flotante.jpg" },
          { nombre: "Arco Floral para Recepción", img: "27.-arco floral para recepcion.jpg" },
          { nombre: "Arreglo Floral para Buffet", img: "13.-arreglo para buffet.jpg" },
          { nombre: "Arco Floral Decorativo", img: "10.-arco floral.jpg" },
          { nombre: "Arco y Pedestal para Recepción", img: "12.-arco y pedestal para recepcion.jpg" },
          { nombre: "Arreglo para Mesa de Novios", img: "25.-arreglo para mesa de novios.jpg" },
          { nombre: "Centros de Mesa en Base de Vidrio", img: "17.-centros de mesa en base de vidrio.jpg" },
          { nombre: "Centro de Mesa Decorativo", img: "30.-centro de mesa.jpg" },
          { nombre: "Arco Floral para Puerta Estándar", img: "6.-arco floral para puerta standar.jpg" },
          { nombre: "Centro de Mesa Elegante", img: "33.-centro de mesa .jpg" },
          { nombre: "Arreglo para Mesa de Champán", img: "21.-arreglo para mesa de champan.jpg" },
          { nombre: "Campana Floral Decorativa", img: "19.-campana de flores.jpg" },
          { nombre: "Arreglos para Mesa de Quesos", img: "20.-arreglos para mesa de quesos.jpg" },
          { nombre: "Centros de Mesa Decorativos", img: "1.-centros  de mesa .png" },
          { nombre: "Composición de Arreglos para Mesa de Buffet", img: "26.-composicion de arreglos para mesa de buffet.jpg" },
          { nombre: "Centro de Mesa con Manzanas", img: "5.-centro de mesa con manzanas.jpg" },
          { nombre: "Pedestales en Bases de Vidrio", img: "18.-pedestales en bases de vidrio.jpg" },
          { nombre: "Arreglos Florales para Buffet", img: "15.-aarglos buffet.jpg" },
          { nombre: "Centro de Mesa para Novios", img: "16.-centro de novios.jpg" },
          { nombre: "Arreglos para Mesas de Dulces con Gypsophilia", img: "22.-arreglos para mesas de dulces en gypsophilia.jpg" },
          { nombre: "Arreglo Floral para Buffet", img: "2.-arreglo para buffet.jpg" },
          { nombre: "Centro Alto para Recepción", img: "32.-centro alto para recepcion.jpg" },
          { nombre: "Pedestal Decorativo para Recepción", img: "31.-pedestalpara recepcion.jpg" },
          { nombre: "Arreglos Florales para Recepción", img: "14.-arreglos para recepcion.jpg" },
          { nombre: "Centro Alto para Mesa", img: "29.-centro alto para mesa.jpg" },
          { nombre: "Arreglo Decorativo para Buffet", img: "24.-arreglo para buffet.jpg" },
          { nombre: "Centro de Mesa en Base de Pecera", img: "4.-centro de mesa en base de peceras .jpg" }
        ]

      },
      bouquets_azares: {
        nombre: "Bouquets y azares",
        portada: "images/eventos_sociales/bouquets_azares.jpg",
        carpeta: "images/bouquets_azares",
        productos: [
          { nombre: "Bouquet de Flores Exóticas", img: "7.-buquet en flores exoticas.jpg" },
          { nombre: "Bouquet de Rosas Blancas y Negras", img: "3.-buquet en rosas blancas y negras.jpg" },
          { nombre: "Bouquet de Rosas Blancas con Gypsophilia", img: "4.- buquet en rosas blancas gypsophilia.jpg" },
          { nombre: "Bouquet de Rosas Perla y Rosadas", img: "6.-buquet rosas perla y rosadas.jpg" },
          { nombre: "Azar para Novios en Rosa Roja", img: "2.-azar para novios en rosa roja.jpg" },
          { nombre: "Bouquet de Rosas y Wax", img: "8.-buquet rosas y wax .jpg" },
          { nombre: "Azar para Novios en Rosa Azul", img: "1.-azar para novios en rosa azul.jpg" },
          { nombre: "Bouquet de Rosas Blancas", img: "5.-buquet en rosas blancas.jpg" }
        ]

      },
      conmemoraciones: {
        nombre: "Conmemoraciones",
        portada: "images/eventos_sociales/conmemoraciones.jpg",
        carpeta: "images/conmemoraciones", // ojo: en tu explorador sale "conmemoraciones"
        productos: [
          {
            nombre: "Arreglo Floral de Flores Exóticas",
            img: "1.-arreglo flores exoticas.png"
          },
          {
            nombre: "Arreglo Floral Clásico",
            img: "2.- arreglo clasico.jpg"
          },
          {
            nombre: "Arreglo Floral en Jardinera",
            img: "3.-arreglo jardinera.jpg"
          },
          {
            nombre: "Arreglo Floral con Estrelitzias",
            img: "4.-arreglos con esterlicias.jpg"
          },
          {
            nombre: "Arreglo Floral Clásico en Tonos Rosados",
            img: "5.-arreglo clasico tonos rosados.jpg"
          },
          {
            nombre: "Arreglo Floral Clásico",
            img: "6.-arreglo clasico.jpg"
          },
          {
            nombre: "Arreglo Floral para Inauguración en Trípode",
            img: "7.-arreglo inauguracion en tripode.png"
          }
        ]

      }
    }
  },

  eventos_realizados: [
    { nombre: "Entrega 01", img: "images/eventos_realizados/IMG-20220703-WA0008.jpg" },
    { nombre: "Entrega 02", img: "images/eventos_realizados/IMG-20220810-WA0004.jpg" },
    { nombre: "Entrega 03", img: "images/eventos_realizados/IMG-20230827-WA0000.jpg" },
    { nombre: "Entrega 04", img: "images/eventos_realizados/IMG-20260126-WA0000.jpg" },
    { nombre: "Entrega 05", img: "images/eventos_realizados/IMG-20260126-WA0001.jpg" },
    { nombre: "Entrega 06", img: "images/eventos_realizados/IMG-20260126-WA0002.jpg" },
    { nombre: "Entrega 07", img: "images/eventos_realizados/IMG-20260126-WA0004.jpg" },
    { nombre: "Entrega 08", img: "images/eventos_realizados/IMG-20260126-WA0005.jpg" },
    { nombre: "Entrega 09", img: "images/eventos_realizados/IMG-20260126-WA0006.jpg" },
    { nombre: "Entrega 10", img: "images/eventos_realizados/IMG-20260126-WA0007.jpg" },
    { nombre: "Entrega 11", img: "images/eventos_realizados/IMG-20260126-WA0008.jpg" },
    { nombre: "Entrega 12", img: "images/eventos_realizados/IMG-20260126-WA0009.jpg" },
    { nombre: "Entrega 13", img: "images/eventos_realizados/IMG-20260126-WA0010.jpg" },
    { nombre: "Entrega 14", img: "images/eventos_realizados/IMG-20260126-WA0011.jpg" },
    { nombre: "Entrega 15", img: "images/eventos_realizados/IMG-20260126-WA0012.jpg" },
    { nombre: "Entrega 16", img: "images/eventos_realizados/IMG-20260126-WA0013.jpg" },
    { nombre: "Entrega 17", img: "images/eventos_realizados/IMG-20260126-WA0014.jpg" },
    { nombre: "Entrega 18", img: "images/eventos_realizados/IMG-20260126-WA0015.jpg" },
    { nombre: "Entrega 19", img: "images/eventos_realizados/IMG-20260126-WA0016.jpg" },
    { nombre: "Entrega 20", img: "images/eventos_realizados/IMG-20260126-WA0017.jpg" },
    { nombre: "Entrega 21", img: "images/eventos_realizados/IMG-20260126-WA0018.jpg" },
    { nombre: "Entrega 22", img: "images/eventos_realizados/IMG-20260126-WA0019.jpg" },
    { nombre: "Entrega 23", img: "images/eventos_realizados/IMG-20260126-WA0020.jpg" },
    { nombre: "Entrega 24", img: "images/eventos_realizados/IMG-20260126-WA0021.jpg" },
    { nombre: "Entrega 25", img: "images/eventos_realizados/IMG-20260126-WA0022.jpg" },
    { nombre: "Entrega 26", img: "images/eventos_realizados/IMG-20260126-WA0023.jpg" },
    { nombre: "Entrega 27", img: "images/eventos_realizados/IMG-20260126-WA0024.jpg" },
    { nombre: "Entrega 28", img: "images/eventos_realizados/IMG-20260126-WA0025.jpg" },
    { nombre: "Entrega 29", img: "images/eventos_realizados/IMG-20260126-WA0026.jpg" },
    { nombre: "Entrega 30", img: "images/eventos_realizados/IMG-20260126-WA0027.jpg" },
    { nombre: "Entrega 31", img: "images/eventos_realizados/IMG-20260126-WA0028.jpg" },
    { nombre: "Entrega 32", img: "images/eventos_realizados/IMG-20260126-WA0029.jpg" },
    { nombre: "Entrega 33", img: "images/eventos_realizados/IMG-20260126-WA0030.jpg" },
    { nombre: "Entrega 34", img: "images/eventos_realizados/IMG-20260126-WA0031.jpg" },
    { nombre: "Entrega 35", img: "images/eventos_realizados/IMG-20260126-WA0032.jpg" },
    { nombre: "Entrega 36", img: "images/eventos_realizados/IMG-20260126-WA0033.jpg" },
    { nombre: "Entrega 37", img: "images/eventos_realizados/IMG-20260126-WA0034.jpg" },
    { nombre: "Entrega 38", img: "images/eventos_realizados/IMG-20260126-WA0035.jpg" },
    { nombre: "Entrega 39", img: "images/eventos_realizados/IMG-20260126-WA0036.jpg" },
    { nombre: "Entrega 40", img: "images/eventos_realizados/IMG-20260126-WA0037.jpg" },
    { nombre: "Entrega 41", img: "images/eventos_realizados/IMG-20260126-WA0038.jpg" },
    { nombre: "Entrega 42", img: "images/eventos_realizados/IMG-20260126-WA0039.jpg" },
    { nombre: "Entrega 43", img: "images/eventos_realizados/IMG-20260126-WA0040.jpg" },
    { nombre: "Entrega 44", img: "images/eventos_realizados/IMG-20260126-WA0041.jpg" },
    { nombre: "Entrega 45", img: "images/eventos_realizados/IMG-20260126-WA0042.jpg" },
    { nombre: "Entrega 46", img: "images/eventos_realizados/IMG-20260126-WA0043.jpg" },
    { nombre: "Entrega 47", img: "images/eventos_realizados/IMG-20260126-WA0044.jpg" },
    { nombre: "Entrega 48", img: "images/eventos_realizados/IMG-20260126-WA0045.jpg" },
    { nombre: "Entrega 49", img: "images/eventos_realizados/IMG-20260126-WA0046.jpg" },
    { nombre: "Entrega 50", img: "images/eventos_realizados/IMG-20260126-WA0047.jpg" },
    { nombre: "Entrega 51", img: "images/eventos_realizados/IMG-20260126-WA0048.jpg" },
    { nombre: "Entrega 52", img: "images/eventos_realizados/IMG-20260126-WA0049.jpg" },
    { nombre: "Entrega 53", img: "images/eventos_realizados/IMG-20260126-WA0050.jpg" },
    { nombre: "Entrega 54", img: "images/eventos_realizados/IMG-20260126-WA0051.jpg" },
    { nombre: "Entrega 55", img: "images/eventos_realizados/IMG-20260126-WA0053.jpg" },
    { nombre: "Entrega 56", img: "images/eventos_realizados/IMG-20260126-WA0054.jpg" },
    { nombre: "Entrega 57", img: "images/eventos_realizados/IMG-20260126-WA0055.jpg" },
    { nombre: "Entrega 58", img: "images/eventos_realizados/IMG-20260126-WA0056.jpg" },
    { nombre: "Entrega 59", img: "images/eventos_realizados/IMG-20260126-WA0057.jpg" },
    { nombre: "Entrega 60", img: "images/eventos_realizados/IMG-20260126-WA0058.jpg" }
  ],
}

function renderCategoriasArreglos() {
  const cont = document.getElementById("arreglos-categorias");
  if (!cont) return;

  // ✅ Solo categorías de ARREGLOS (NO eventos)
  const CATS_SOLO_ARREGLOS = CATEGORIAS_ARREGLOS.filter(cat =>
    !["eventos_sociales", "eventos_realizados"].includes(cat.id)
  );

  cont.innerHTML = CATS_SOLO_ARREGLOS.map(cat => `
    <div class="producto">
      <img src="${cat.img}" alt="${cat.nombre}">
      <div class="info">
        <h3>${cat.nombre}</h3>
        <button onclick="window.location.href='categoria.html?id=${cat.id}'">Ver</button>
      </div>
    </div>
  `).join("");
}

function initCategoriaPage() {
  const params = new URLSearchParams(window.location.search);
  const catId = params.get("id");
  const subId = params.get("sub"); // ✅ nuevo

  const h2 = document.getElementById("seleccion");
  const grid = document.getElementById("productos-grid");
  if (!grid) return;

  // ✅ Mensaje especial para ciertas categorías
  const msgEl = document.getElementById("mensajeCategoria");
  if (msgEl) {
    msgEl.textContent = (catId === "eventos_realizados")
      ? 'Gracias por confiar en "Floristería el Paraíso"'
      : "";
  }


  const cat = CATEGORIAS_ARREGLOS.find(c => c.id === catId);

  if (!cat) {
    if (h2) h2.textContent = "Categoría no encontrada";
    grid.innerHTML = `<p>No existe esta categoría.</p>`;
    return;
  }

  const data = PRODUCTOS[catId];

  // ✅ Caso normal: lista de productos (array)
  if (Array.isArray(data)) {
    if (h2) h2.textContent = `Arreglos relacionados a: ${cat.nombre}`;

    if (data.length === 0) {
      grid.innerHTML = `<p>Por ahora no hay productos en esta categoría.</p>`;
      return;
    }
    lightboxImages = data.map(p => p.img);

    grid.innerHTML = data.map(p => `
  <div class="producto">
    <img
      src="${p.img}"
      alt="${p.nombre}"
      style="cursor: zoom-in"
      onclick="openLightboxIndex(${lightboxImages.indexOf(p.img)})"
    >
    <div class="info">
      <h3>${p.nombre}</h3>

      ${catId === "eventos_realizados" ? "" : `<p class="precio">S/ ${Number(p.precio).toFixed(2)}</p>`}
      ${catId === "eventos_realizados" ? "" : `<button onclick="pedirWhatsApp('${p.nombre.replace(/'/g, "\\'")}')">Pedir por WhatsApp</button>`}
    </div>
  </div>
`).join("");

    return;
  }

  // ✅ Caso subcategorías: vista 1 (mostrar categorías hijas)
  if (data && data.tipo === "subcategorias") {

    // Vista 1: mostrar subcategorías
    if (!subId) {
      if (h2) h2.textContent = data.nombre;

      const subs = data.subcategorias || {};
      const keys = Object.keys(subs);

      grid.innerHTML = keys.map(key => {
        const sub = subs[key];
        const portada = sub.portada || cat.img; // ✅ usa portada por subcategoría

        return `
      <div class="producto">
        <img
          src="${portada}"
          alt="${sub.nombre}"
          style="cursor:pointer"
          onclick="window.location.href='categoria.html?id=${catId}&sub=${key}'"
        >
        <div class="info">
          <h3>${sub.nombre}</h3>
          <button onclick="window.location.href='categoria.html?id=${catId}&sub=${key}'">Ver</button>
        </div>
      </div>
    `;
      }).join("");

      return;
    }


    // Vista 2: mostrar productos de la subcategoría elegida
    const sub = (data.subcategorias || {})[subId];
    if (!sub) {
      if (h2) h2.textContent = "Subcategoría no encontrada";
      grid.innerHTML = `<p>No existe esta subcategoría.</p>`;
      return;
    }

    if (h2) h2.textContent = sub.nombre;

    const items = sub.productos || [];
    if (items.length === 0) {
      grid.innerHTML = `<p>Por ahora no hay productos en esta subcategoría.</p>`;
      return;
    }

    grid.innerHTML = items.map(p => {
      const src = `${sub.carpeta}/${p.img}`;
      return `
        <div class="producto">
          <img
            src="${src}"
            alt="${p.nombre}"
            style="cursor: zoom-in"
            onclick="openLightbox('${src}', '${p.nombre.replace(/'/g, "\\'")}')"
          >
          <div class="info">
            <h3>${p.nombre}</h3>
            ${p.precio != null ? `<p class="precio">S/ ${Number(p.precio).toFixed(2)}</p>` : ""}

            <button onclick="pedirWhatsApp('${p.nombre.replace(/'/g, "\\'")}')">Pedir por WhatsApp</button>
          </div>
        </div>
      `;
    }).join("");

    return;
  }

  // fallback
  if (h2) h2.textContent = `Arreglos relacionados a: ${cat.nombre}`;
  grid.innerHTML = `<p>Por ahora no hay productos en esta categoría.</p>`;
}



function pedirWhatsApp(producto) {
  const numero = "51934042514"; // tu WhatsApp
  const msg = `Hola! Quiero pedir: ${producto} (Florería El Paraíso)`;
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}

function openLightbox(src, altText = "") {
  const box = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  if (!box || !img) return;

  img.src = src;
  img.alt = altText;

  box.classList.add("open");
  document.body.classList.add("lightbox-open");
}

function closeLightbox(e) {
  if (e.target.id === "lightbox") {
    document.getElementById("lightbox").classList.remove("open");
    document.body.classList.remove("lightbox-open");
  }
}
function openLightboxIndex(index) {
  currentIndex = index;
  const box = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  if (!box || !img) return;

  img.src = lightboxImages[currentIndex];
  box.classList.add("open");
  document.body.classList.add("lightbox-open");
}

function nextImage(e) {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % lightboxImages.length;
  document.getElementById("lightboxImg").src = lightboxImages[currentIndex];
}

function prevImage(e) {
  e.stopPropagation();
  currentIndex =
    (currentIndex - 1 + lightboxImages.length) % lightboxImages.length;
  document.getElementById("lightboxImg").src = lightboxImages[currentIndex];
}
// ===== BOTÓN VOLVER ARRIBA (GLOBAL + SOLO MÓVIL) =====
document.addEventListener("DOMContentLoaded", () => {
  const btnTop = document.getElementById("btnTop");
  if (!btnTop) return;

  const isMobile = () => window.innerWidth <= 768;

  window.addEventListener("scroll", () => {
    if (!isMobile()) return;

    if (window.scrollY > 300) {
      btnTop.classList.add("show");
    } else {
      btnTop.classList.remove("show");
    }
  });

  btnTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});









