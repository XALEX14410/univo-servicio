// script_univo.js
function univoToggleInfo() {
    const infoCard = document.querySelector('.univo-info-tarjeta');
    infoCard.classList.toggle('univo-activo');

    if (infoCard.classList.contains('univo-activo')) {
        infoCard.innerHTML = `<p>¡Explora nuestras carreras disponibles y encuentra la que más te apasiona!</p>`;
    } else {
        infoCard.innerHTML = `<p>¿Aún no sé qué estudiar?</p><button onclick="univoToggleInfo()">¡Descubre nuestra oferta!</button>`;
    }
}

// Agregar un efecto de desplazamiento suave
window.addEventListener('scroll', () => {
    const secciones = document.querySelectorAll('section');
    secciones.forEach(seccion => {
        const rect = seccion.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            seccion.style.opacity = 1;
            seccion.style.transform = 'translateY(0)';
        } else {
            seccion.style.opacity = 0;
            seccion.style.transform = 'translateY(50px)';
        }
    });
});
