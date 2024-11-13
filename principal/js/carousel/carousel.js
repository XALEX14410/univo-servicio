// Variables específicas para el carrusel
const contenedorCarruselConAnimacion = document.getElementById('contenedorCarruselConAnimacion');
const contenedorImagenesCarrusel = document.getElementById('contenedorImagenesCarrusel');
const imagenesCarrusel = document.querySelectorAll('.imagenCarrusel');
const botonIzquierdaCarrusel = document.getElementById('botonIzquierdaCarrusel');
const botonDerechaCarrusel = document.getElementById('botonDerechaCarrusel');
const indicadoresCarruselContenedor = document.getElementById('indicadoresCarruselContenedor');
const indicadoresCarrusel = document.querySelectorAll('.indicadorCarrusel');
let indiceImagenActual = 0;
const intervaloCarruselTiempo = 3000; // 3 segundos

// Función para actualizar el carrusel
function actualizarCarrusel() {
  const desplazamientoCarrusel = -indiceImagenActual * 100;
  contenedorImagenesCarrusel.style.transform = `translateX(${desplazamientoCarrusel}%)`;

  // Actualizar los indicadores
  indicadoresCarrusel.forEach((indicador, index) => {
    if (index === indiceImagenActual) {
      indicador.classList.add('indicadorCarruselActivo');
    } else {
      indicador.classList.remove('indicadorCarruselActivo');
    }
  });
}

// Función para mover a la imagen anterior
botonIzquierdaCarrusel.addEventListener('click', () => {
  indiceImagenActual = (indiceImagenActual === 0) ? imagenesCarrusel.length - 1 : indiceImagenActual - 1;
  actualizarCarrusel();
});

// Función para mover a la imagen siguiente
botonDerechaCarrusel.addEventListener('click', () => {
  indiceImagenActual = (indiceImagenActual === imagenesCarrusel.length - 1) ? 0 : indiceImagenActual + 1;
  actualizarCarrusel();
});

// Inicializar el carrusel
actualizarCarrusel();

// Agregar funcionalidad de indicadores
indicadoresCarrusel.forEach((indicador, index) => {
  indicador.addEventListener('click', () => {
    indiceImagenActual = index;
    actualizarCarrusel();
  });
});

// Función para avanzar automáticamente el carrusel
setInterval(() => {
  indiceImagenActual = (indiceImagenActual === imagenesCarrusel.length - 1) ? 0 : indiceImagenActual + 1;
  actualizarCarrusel();
}, intervaloCarruselTiempo);