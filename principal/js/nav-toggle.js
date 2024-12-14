document.addEventListener('DOMContentLoaded', function () {
    var menuItems = document.querySelectorAll('.nav-list > li');
    var submenuItems = document.querySelectorAll('.submenu > li');
    var navToggle = document.querySelector('.nav-toggle');
    var navList = document.querySelector('.nav-list');

    // Función para agregar eventos de hover
    function addHoverEvents() {
        menuItems.forEach(function (item) {
            item.addEventListener('mouseenter', handleMouseEnter);
            item.addEventListener('mouseleave', handleMouseLeave);
        });

        submenuItems.forEach(function (subItem) {
            subItem.addEventListener('mouseenter', handleMouseEnterSub);
            subItem.addEventListener('mouseleave', handleMouseLeaveSub);
        });
    }

    // Función para agregar eventos de click
    function addClickEvents() {
        menuItems.forEach(function (item) {
            item.addEventListener('click', handleClick);
        });

        submenuItems.forEach(function (subItem) {
            subItem.addEventListener('click', handleClickSub);
        });
    }

    // Función para remover eventos de hover
    function removeHoverEvents() {
        menuItems.forEach(function (item) {
            item.removeEventListener('mouseenter', handleMouseEnter);
            item.removeEventListener('mouseleave', handleMouseLeave);
        });

        submenuItems.forEach(function (subItem) {
            subItem.removeEventListener('mouseenter', handleMouseEnterSub);
            subItem.removeEventListener('mouseleave', handleMouseLeaveSub);
        });
    }

    // Función para remover eventos de click
    function removeClickEvents() {
        menuItems.forEach(function (item) {
            item.removeEventListener('click', handleClick);
        });

        submenuItems.forEach(function (subItem) {
            subItem.removeEventListener('click', handleClickSub);
        });
    }

    // Función para manejar el hover en los menús principales
    function handleMouseEnter() {
        this.classList.add('active');
        menuItems.forEach(function (otherItem) {
            if (otherItem !== this) {
                otherItem.classList.remove('active');
            }
        }.bind(this));
    }

    function handleMouseLeave() {
        this.classList.remove('active');
    }

    // Función para manejar el hover en los submenús
    function handleMouseEnterSub() {
        this.classList.add('active');
    }

    function handleMouseLeaveSub() {
        this.classList.remove('active');
    }

    // Función para manejar el click en los menús principales
    function handleClick(event) {
        event.stopPropagation();
        this.classList.toggle('active');
        // Mostrar u ocultar el submenú
        var submenu = this.querySelector('.submenu');

        // Alternar clase activa
        if (submenu) {
            submenu.classList.toggle('active');
            submenu.style.display = submenu.classList.contains('active') ? 'block' : 'none';

            // Cerrar otros menús principales abiertos
            menuItems.forEach(function (otherItem) {
                if (otherItem !== this) {
                    var otherSubmenu = otherItem.querySelector('.submenu');
                    if (otherSubmenu) {
                        otherSubmenu.classList.remove('active');
                        otherSubmenu.style.display = 'none';
                    }
                }
            }.bind(this));
        }
    }

    // Función para manejar el click en los submenús
    function handleClickSub(event) {
        event.stopPropagation();
        this.classList.toggle('active');
        // Mostrar u ocultar el submenú al hacer clic en un submenú
        var submenu = this.querySelector('.submenu');
        if (submenu) {
            submenu.classList.toggle('active');
            submenu.style.display = submenu.classList.contains('active') ? 'block' : 'none';

            // Cerrar otros submenús abiertos en el mismo nivel
            submenuItems.forEach(function (otherSubItem) {
                if (otherSubItem !== this) {
                    var otherSubmenu = otherSubItem.querySelector('.submenu');
                    if (otherSubmenu) {
                        otherSubmenu.classList.remove('active');
                        otherSubmenu.style.display = 'none';
                    }
                }
            }.bind(this));
        }
    }

    // Función para manejar el comportamiento del menú según el tamaño de la pantalla
    function handleMenuBehavior() {
        if (window.innerWidth >= 1095) {
            // Eliminar todas las clases "active" antes de agregar los eventos de hover
            menuItems.forEach(function (item) {
                item.classList.remove('active');
            });

            submenuItems.forEach(function (subItem) {
                subItem.classList.remove('active');
            });

            removeClickEvents();
            addHoverEvents();
        } else {
            removeHoverEvents();
            addClickEvents();
        }
    }

    // Ejecutar la función al cargar la página y al redimensionar la ventana
    handleMenuBehavior();
    window.addEventListener('resize', handleMenuBehavior);

    // Para el botón de menú en pantallas pequeñas
    navToggle.addEventListener('click', function () {
        var isActive = navList.classList.contains('active');
        navList.classList.toggle('active');
        navToggle.classList.toggle('is-active');

        // Cerrar el menú si ya está activo
        if (isActive) {
            navList.querySelectorAll('.submenu').forEach(function (submenu) {
                submenu.classList.remove('active');
                submenu.style.display = 'none';
            });
        }
    });
});
