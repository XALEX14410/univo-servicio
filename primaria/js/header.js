window.onscroll = function() {
    const logoContainer = document.getElementById('logo-container');
    const logo = document.getElementById('logo');
    const logo1 = document.getElementById('logo1');
    if (window.scrollY > 50) {
        logoContainer.style.height = '0'; // Oculta el contenedor del logo
        logo.style.transform = 'scale(0)'; // Reduce el tamaño del logo para ocultarlo
        logo1.style.transform = 'scale(0)'; // Reduce el tamaño del logo para ocultarlo
    } else {
        logoContainer.style.height = '150px'; // Restaura la altura del contenedor del logo
        logo.style.transform = 'scale(1)'; // Restaura el tamaño del logo
        logo1.style.transform = 'scale(1)'; // Restaura el tamaño del logo
    }
};
