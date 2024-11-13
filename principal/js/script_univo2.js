document.addEventListener('DOMContentLoaded', function () {
    // Obtener los radio buttons y las secciones
    const radio1 = document.getElementById('radio1');
    const radio2 = document.getElementById('radio2');
    const radio3 = document.getElementById('radio3');
    const radio4 = document.getElementById('radio4');
    const radio5 = document.getElementById('radio5');
    const radio6 = document.getElementById('radio6');
    const radio7 = document.getElementById('radio7');
    const radio8 = document.getElementById('radio8');

    const section1 = document.getElementById('section1');
    const section2 = document.getElementById('section2');
    const section3 = document.getElementById('section3');
    const section4 = document.getElementById('section4');
    const section5 = document.getElementById('section5');
    const section6 = document.getElementById('section6');
    const section7 = document.getElementById('section7');
    const section8 = document.getElementById('section8');

    // Función para manejar el comportamiento de mostrar/ocultar secciones
    function toggleSections() {
        // Si el radio1 está marcado, mostramos la sección 1 y ocultamos las demás
        if (radio1.checked) {
            section1.style.display = 'block';
            section2.style.display = 'none';
            section3.style.display = 'none';
            section4.style.display = 'none';
            section5.style.display = 'none';
            section6.style.display = 'none';
            section7.style.display = 'none';
            section8.style.display = 'none';
        } 
        // Si el radio2 está marcado, mostramos la sección 2 y ocultamos las demás
        else if (radio2.checked) {
            section1.style.display = 'none';
            section2.style.display = 'block';
            section3.style.display = 'none';
            section4.style.display = 'none';
            section5.style.display = 'none';
            section6.style.display = 'none';
            section7.style.display = 'none';
            section8.style.display = 'none';
        }
        // Si el radio3 está marcado, mostramos la sección 3 y ocultamos las demás
        else if (radio3.checked) {
            section1.style.display = 'none';
            section2.style.display = 'none';
            section3.style.display = 'block';
            section4.style.display = 'none';
            section5.style.display = 'none';
            section6.style.display = 'none';
            section7.style.display = 'none';
            section8.style.display = 'none';
        }
        // Repetir para los demás radios (radio4, radio5, etc.)
        else if (radio4.checked) {
            section1.style.display = 'none';
            section2.style.display = 'none';
            section3.style.display = 'none';
            section4.style.display = 'block';
            section5.style.display = 'none';
            section6.style.display = 'none';
            section7.style.display = 'none';
            section8.style.display = 'none';
        } 
        else if (radio5.checked) {
            section1.style.display = 'none';
            section2.style.display = 'none';
            section3.style.display = 'none';
            section4.style.display = 'none';
            section5.style.display = 'block';
            section6.style.display = 'none';
            section7.style.display = 'none';
            section8.style.display = 'none';
        } 
        else if (radio6.checked) {
            section1.style.display = 'none';
            section2.style.display = 'none';
            section3.style.display = 'none';
            section4.style.display = 'none';
            section5.style.display = 'none';
            section6.style.display = 'block';
            section7.style.display = 'none';
            section8.style.display = 'none';
        } 
        else if (radio7.checked) {
            section1.style.display = 'none';
            section2.style.display = 'none';
            section3.style.display = 'none';
            section4.style.display = 'none';
            section5.style.display = 'none';
            section6.style.display = 'none';
            section7.style.display = 'block';
            section8.style.display = 'none';
        } 
        else if (radio8.checked) {
            section1.style.display = 'none';
            section2.style.display = 'none';
            section3.style.display = 'none';
            section4.style.display = 'none';
            section5.style.display = 'none';
            section6.style.display = 'none';
            section7.style.display = 'none';
            section8.style.display = 'block';
        }
    }

    // Agregar evento para que se active al cambiar los radio buttons
    radio1.addEventListener('change', toggleSections);
    radio2.addEventListener('change', toggleSections);
    radio3.addEventListener('change', toggleSections);
    radio4.addEventListener('change', toggleSections);
    radio5.addEventListener('change', toggleSections);
    radio6.addEventListener('change', toggleSections);
    radio7.addEventListener('change', toggleSections);
    radio8.addEventListener('change', toggleSections);

    // Llamar a la función de toggleSections para inicializar el estado al cargar la página
    toggleSections();
});
