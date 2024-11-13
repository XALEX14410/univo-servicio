document.addEventListener('DOMContentLoaded', function () {
    // Obtener los radio buttons y las secciones
    const radio1 = document.getElementById('radio1');
    const radio2 = document.getElementById('radio2');
    const section1 = document.getElementById('section1');
    const section2 = document.getElementById('section2');

    // Función para manejar el comportamiento de mostrar/ocultar secciones
    function toggleSections() {
        // Si el radio1 está marcado, mostramos la sección 1 y ocultamos la sección 2
        if (radio1.checked) {
            section1.style.display = 'block';
            section2.style.display = 'none';
        } 
        // Si el radio2 está marcado, mostramos la sección 2 y ocultamos la sección 1
        else if (radio2.checked) {
            section1.style.display = 'none';
            section2.style.display = 'block';
        }
    }

    // Agregar evento para que se active al cambiar los radio buttons
    radio1.addEventListener('change', toggleSections);
    radio2.addEventListener('change', toggleSections);

    // Llamar a la función de toggleSections para inicializar el estado al cargar la página
    toggleSections();
});
