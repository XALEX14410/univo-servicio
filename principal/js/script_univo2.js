


document.addEventListener('DOMContentLoaded', function () {
    // Obtener todos los radio buttons y las secciones
    const radios = document.querySelectorAll('.radio-btn');
    const sections = document.querySelectorAll('.section');

    // Función para manejar el comportamiento de mostrar/ocultar secciones
    function toggleSections() {
        radios.forEach((radio, index) => {
            const sectionId = `section${index + 1}`; // Genera el id de la sección, como 'section1', 'section2', etc.
            const section = document.getElementById(sectionId); // Obtiene la sección correspondiente por id

            // Si el radio está marcado, mostramos la sección correspondiente
            if (radio.checked) {
                section.style.display = 'block'; // Mostrar la sección
            } else {
                section.style.display = 'none'; // Ocultar la sección
            }
        });
    }

    // Agregar evento para que se active al cambiar los radio buttons
    radios.forEach(radio => {
        radio.addEventListener('change', toggleSections);
    });

    // Llamar a la función de toggleSections para inicializar el estado al cargar la página
    toggleSections();
});
