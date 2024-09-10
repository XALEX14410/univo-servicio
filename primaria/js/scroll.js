window.addEventListener('scroll', function() {
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    console.log(scrollPercentage)
    const header = document.getElementById('barra-navegacion');
    if (scrollPercentage > 10) { // Cambia el porcentaje según tus necesidades
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


window.addEventListener('scroll', function() {
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    console.log(scrollPercentage)
    const header = document.getElementById('encabezado');
    if (scrollPercentage > 10) { // Cambia el porcentaje según tus necesidades
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
