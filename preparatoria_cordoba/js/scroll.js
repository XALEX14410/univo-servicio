// Escuchar el evento de scroll
window.addEventListener('scroll', function() {
    const scrollY = window.scrollY; // Posición actual del scroll vertical
    const scrollTrigger = 850; // El valor del scroll en píxeles para activar el efecto

    // Seleccionar el elemento que quieres modificar cuando se alcance el scrollTrigger
    const header = document.getElementById('barra-navegacion');

    if (scrollY > scrollTrigger) {
        header.classList.add('scrolled'); // Agregar clase cuando se pase el valor de 959px
    } else {
        header.classList.remove('scrolled'); // Quitar clase si el scroll está por debajo de 959px
    }
});



$(document).ready(function() {
    // Animar el footer cuando el usuario hace scroll
    $(window).on('scroll', function() {
        var scrollPosition = $(window).scrollTop();
        var footerPosition = $('.footer').offset().top;

        if (scrollPosition + $(window).height() > footerPosition) {
            $('.footer').addClass('animate-bg');
        }
    });
});
