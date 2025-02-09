// Lista de imágenes con sus propiedades
const imagenes = [
    { src: "/univo-servicio/primaria/img/carousel/22-1-_Banner-Primaria.webp", alt: "Imagen 1" },
    { src: "/univo-servicio/primaria/img/carousel/Banner-Primaria-2019-2.webp", alt: "Imagen 2" },
    { src: "/univo-servicio/primaria/img/carousel/Banner-Primaria-2019-3.webp", alt: "Imagen 3" },
    { src: "/univo-servicio/primaria/img/carousel/Banner-Primaria-2019-4.webp", alt: "Imagen 4" }
];

// Seleccionar contenedores
const contenedorImagenes = document.getElementById('contenedorImagenesCarrusel');
const contenedorIndicadores = document.getElementById('indicadoresCarruselContenedor');

// Generar dinámicamente las etiquetas <img> y los indicadores
imagenes.forEach((imagen, index) => {
    // Crear elemento de imagen
    const img = document.createElement('img');
    img.src = imagen.src;
    img.alt = imagen.alt;
    img.classList.add('imagenCarrusel');
    contenedorImagenes.appendChild(img);

    // Crear indicador
    const indicador = document.createElement('span');
    indicador.classList.add('indicadorCarrusel');
    if (index === 0) indicador.classList.add('activo'); // Marca el primer indicador como activo
    contenedorIndicadores.appendChild(indicador);
});
