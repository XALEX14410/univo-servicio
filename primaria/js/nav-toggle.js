document.addEventListener('DOMContentLoaded', function() {
    // Manejar clics en elementos de menú principal
    var menuItems = document.querySelectorAll('.nav-list > li');

    menuItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.stopPropagation(); // Evitar que el clic se propague al contenedor

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

    // Manejar clics en elementos de submenú
    var submenuItems = document.querySelectorAll('.submenu > li');

    submenuItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.stopPropagation(); // Evitar que el clic se propague al contenedor

            // Alternar la clase 'active' al hacer clic en un submenú
            this.classList.toggle('active');

            // Cerrar otros submenús de nivel 2 abiertos (opcional)
            var submenus = this.parentNode.querySelectorAll('.submenu_2');
            submenus.forEach(function(submenu) {
                if (submenu !== this.querySelector('.submenu_2')) {
                    submenu.classList.remove('active');
                }
            }.bind(this));
        });
    });

    // Manejar el botón de menú en pantallas pequeñas
    var navToggle = document.querySelector('.nav-toggle');
    var navList = document.querySelector('.nav-list');

    navToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
        navToggle.classList.toggle('is-active');
    });
});
