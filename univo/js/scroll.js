// Escuchar el evento de scroll
window.addEventListener('scroll', function() {
    // Obtener el alto de la ventana
    const windowHeight = window.innerHeight;

    // Calcular el punto de activación dinámicamente (ajústalo según tus necesidades)
    const scrollTrigger = windowHeight * 0.9; // 90% del alto de la ventana

    // Obtener la posición actual del scroll vertical
    const scrollY = window.scrollY;

    // Seleccionar los elementos que quieres modificar
    const header = document.getElementById('barra-navegacion');
    const header2 = document.getElementById('encabezado');
    const logo = document.getElementById('logo_img');

    if (scrollY > scrollTrigger) {
        // Agregar clase cuando se pase el valor calculado
        header.classList.add('scrolled');
        header2.classList.add('scrolled');
        logo.classList.add('scrolled');
    } else {
        // Quitar clase si el scroll está por debajo del valor calculado
        header.classList.remove('scrolled');
        header2.classList.remove('scrolled');
        logo.classList.remove('scrolled');
    }
});
