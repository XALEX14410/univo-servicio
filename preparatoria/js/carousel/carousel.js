// Variables específicas para el carrusel
const contenedorCarruselConAnimacion = document.getElementById('contenedorCarruselConAnimacion');
const contenedorImagenesCarrusel = document.getElementById('contenedorImagenesCarrusel');
const imagenesCarrusel = document.querySelectorAll('.imagenCarrusel');
const botonIzquierdaCarrusel = document.getElementById('botonIzquierdaCarrusel');
const botonDerechaCarrusel = document.getElementById('botonDerechaCarrusel');
const indicadoresCarrusel = document.querySelectorAll('.indicadorCarrusel');
let indiceImagenActual = 0;
const intervaloCarruselTiempo = 5000; // 5 segundos
let intervaloCarrusel; // Variable para guardar el intervalo

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

// Función para iniciar el intervalo del carrusel
function iniciarIntervalo() {
  intervaloCarrusel = setInterval(() => {
    indiceImagenActual = (indiceImagenActual === imagenesCarrusel.length - 1) ? 0 : indiceImagenActual + 1;
    actualizarCarrusel();
  }, intervaloCarruselTiempo);
}

// Función para reiniciar el intervalo del carrusel (sin avanzar automáticamente)
function reiniciarIntervalo() {
  clearInterval(intervaloCarrusel); // Limpiar el intervalo existente
  iniciarIntervalo(); // Reiniciarlo desde cero
}

// Función para mover a la imagen anterior
botonIzquierdaCarrusel.addEventListener('click', () => {
  indiceImagenActual = (indiceImagenActual === 0) ? imagenesCarrusel.length - 1 : indiceImagenActual - 1;
  actualizarCarrusel();
  reiniciarIntervalo(); // Reiniciar el tiempo
});

// Función para mover a la imagen siguiente
botonDerechaCarrusel.addEventListener('click', () => {
  indiceImagenActual = (indiceImagenActual === imagenesCarrusel.length - 1) ? 0 : indiceImagenActual + 1;
  actualizarCarrusel();
  reiniciarIntervalo(); // Reiniciar el tiempo
});

// Función para manejar clics en los indicadores
indicadoresCarrusel.forEach((indicador, index) => {
  indicador.addEventListener('click', () => {
    indiceImagenActual = index;
    actualizarCarrusel();
    reiniciarIntervalo(); // Reiniciar el tiempo
  });
});

// Inicializar el carrusel
actualizarCarrusel();
iniciarIntervalo(); // Comenzar el intervalo al cargar la página
