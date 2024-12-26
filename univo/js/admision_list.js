document.addEventListener("DOMContentLoaded", function() {
    const steps = document.querySelectorAll('.admission-step');

    steps.forEach(step => {
        const button = step.querySelector('.step-title');
        const content = step.querySelector('.step-content');
        
        button.addEventListener('click', function() {
            // Alterna la visibilidad del contenido
            content.classList.toggle('show');
            
            // Cambiar el ícono o la apariencia del botón si se desea
            if (content.classList.contains('show')) {
                button.innerHTML = button.innerHTML.replace("▼", "▲");  // Cambiar flecha hacia abajo por arriba
            } else {
                button.innerHTML = button.innerHTML.replace("▲", "▼");  // Revertir
            }
        });
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const steps = document.querySelectorAll('.beca-step');

    steps.forEach(step => {
        const button = step.querySelector('.step-title');
        const content = step.querySelector('.step-content');
        
        button.addEventListener('click', function() {
            // Alterna la visibilidad del contenido
            content.classList.toggle('show');
            
            // Cambiar el ícono o la apariencia del botón si se desea
            if (content.classList.contains('show')) {
                button.innerHTML = button.innerHTML.replace("▼", "▲");  // Cambiar flecha hacia abajo por arriba
            } else {
                button.innerHTML = button.innerHTML.replace("▲", "▼");  // Revertir
            }
        });
    });
});
