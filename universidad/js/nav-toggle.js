document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todos los elementos de menú principal que tienen un submenú
    var menuItems = document.querySelectorAll('.nav-list > li');

    menuItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            // Evita que se cierren al hacer clic en el submenú
            event.stopPropagation();

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

    // Manejar los submenús de segundo nivel
    var submenuItems = document.querySelectorAll('.submenu > li');

    submenuItems.forEach(function(subItem) {
        subItem.addEventListener('click', function(event) {
            event.stopPropagation();
            this.classList.toggle('active');
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
