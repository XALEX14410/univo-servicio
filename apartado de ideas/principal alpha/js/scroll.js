// Escuchar el evento de scroll

window.addEventListener('scroll', function() {
    // Verificar el ancho de la pantalla para deshabilitar en móviles
     // Puedes ajustar 768px a otro valor según lo que consideres como móvil
        const scrollY = window.scrollY; // Posición actual del scroll vertical
        const scrollTrigger = 850; // El valor del scroll en píxeles para activar el efecto

        // Seleccionar el elemento que quieres modificar cuando se alcance el scrollTrigger
        const header = document.getElementById('barra-navegacion');
        const header2 = document.getElementById('encabezado');
        
        if (scrollY > scrollTrigger) {
            header.classList.add('scrolled'); // Agregar clase cuando se pase el valor de 850px
            header2.classList.add('scrolled'); // Agregar clase cuando se pase el valor de 850px
        } else {
            header.classList.remove('scrolled'); // Quitar clase si el scroll está por debajo de 850px
            header2.classList.remove('scrolled'); // Quitar clase si el scroll está por debajo de 850px
        
    }
});
