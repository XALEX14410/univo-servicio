// Seleccionamos los elementos del carousel
const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const btnAnterior = document.querySelector('.carousel-anterior');
const btnSiguiente = document.querySelector('.carousel-siguiente');

// Establecemos el índice del item actual
let itemActual = 0;

// Tiempo en milisegundos entre los cambios automáticos
const intervaloAutomatico = 3000; // 3 segundos

// Función para mostrar el item actual
function mostrarItemActual() {
    // Ocultamos todos los items
    carouselItems.forEach(item => item.classList.remove('active'));

    // Mostramos el item actual
    carouselItems[itemActual].classList.add('active');
}

// Función para avanzar al siguiente item
function avanzarItem() {
    // Incrementamos el índice del item actual
    itemActual++;

    // Si llegamos al final, volvemos al principio
    if (itemActual >= carouselItems.length) {
        itemActual = 0;
    }

    // Mostramos el item actual
    mostrarItemActual();
}

// Función para retroceder al item anterior
function retrocederItem() {
    // Decrementamos el índice del item actual
    itemActual--;

    // Si llegamos al principio, volvemos al final
    if (itemActual < 0) {
        itemActual = carouselItems.length - 1;
    }

    // Mostramos el item actual
    mostrarItemActual();
}

// Agregamos eventos a los botones
btnAnterior.addEventListener('click', retrocederItem);
btnSiguiente.addEventListener('click', avanzarItem);

// Mostramos el item actual al cargar la página
mostrarItemActual();

// Función para iniciar el carrusel automático
function iniciarCarruselAutomatico() {
    setInterval(avanzarItem, intervaloAutomatico);
}

// Iniciamos el carrusel automático
iniciarCarruselAutomatico();
