document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todos los elementos de menú principal que tienen un submenú
    var menuItems = document.querySelectorAll('.nav-list > li');

    menuItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            // Verifica si el clic fue en un enlace dentro del submenú
            if (event.target.tagName === 'A' && this.querySelector('.submenu') === null) {
                return; // Permite el comportamiento predeterminado del enlace
            }

            event.stopPropagation(); // Evitar que el clic se propague al contenedor
            event.preventDefault(); // Prevenir el comportamiento predeterminado solo si es necesario

            // Alternar la clase 'active' al hacer clic en un elemento de menú
            this.classList.toggle('active');

            // Cerrar otros submenús abiertos (opcional)
            menuItems.forEach(function(otherItem) {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });

    // Para el botón de menú en pantallas pequeñas
    var navToggle = document.querySelector('.nav-toggle');
    var navList = document.querySelector('.nav-list');

    navToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
        navToggle.classList.toggle('is-active');
    });
});
