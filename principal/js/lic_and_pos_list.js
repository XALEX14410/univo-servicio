document.addEventListener("DOMContentLoaded", function() {
    // Obtener los botones de Licenciatura y Posgrado
    const buttonsLic = document.querySelectorAll('.btn-lic');
    const buttonsPos = document.querySelectorAll('.btn-pos');
    
    // Función para alternar la visibilidad con animación de las secciones extra-info
    function toggleVisibility(event) {
        const button = event.target;
        const targetId = button.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);

        // Primero, cerrar todas las secciones abiertas (para la información extra)
        const allExtraInfo = document.querySelectorAll('.extra-info');
        allExtraInfo.forEach(info => {
            if (info !== targetElement) {
                info.classList.remove('show');
                info.style.maxHeight = '0';  // Contrae otras secciones
            }
        });

        // Alterna la visibilidad de la información de la sección actual
        targetElement.classList.toggle('show');
        if (targetElement.classList.contains('show')) {
            targetElement.style.maxHeight = targetElement.scrollHeight + 'px';  // Expande el contenido
        } else {
            targetElement.style.maxHeight = '0';  // Contrae el contenido
        }
    }

    // Asociar la función de toggle a los botones de Licenciatura
    buttonsLic.forEach(button => {
        button.addEventListener('click', toggleVisibility);
    });

    // Asociar la función de toggle a los botones de Posgrado
    buttonsPos.forEach(button => {
        button.addEventListener('click', toggleVisibility);
    });

    // Sección de botones Licenciatura y Posgrado (para alternar entre secciones)
    const btnLicenciatura = document.getElementById('btn-licenciatura'); // Botón Licenciatura
    const btnPosgrado = document.getElementById('btn-posgrado'); // Botón Posgrado
    const contentLicenciatura = document.getElementById('content-licenciatura'); // Contenido Licenciatura
    const contentPosgrado = document.getElementById('content-posgrado'); // Contenido Posgrado

    // Función para alternar entre las secciones Licenciatura y Posgrado
    function toggleSection(event) {
        const sectionId = event.target.id;

        if (sectionId === 'btn-licenciatura') {
            contentLicenciatura.classList.remove('hidden');
            contentPosgrado.classList.add('hidden');
            btnLicenciatura.setAttribute('aria-expanded', 'true');
            btnPosgrado.setAttribute('aria-expanded', 'false');
        } else if (sectionId === 'btn-posgrado') {
            contentPosgrado.classList.remove('hidden');
            contentLicenciatura.classList.add('hidden');
            btnPosgrado.setAttribute('aria-expanded', 'true');
            btnLicenciatura.setAttribute('aria-expanded', 'false');
        }
    }

    // Asocia el evento a los botones de Licenciatura y Posgrado
    btnLicenciatura.addEventListener('click', toggleSection);
    btnPosgrado.addEventListener('click', toggleSection);

    // Iniciar la página mostrando automáticamente la sección Licenciatura
    window.onload = function() {
        // Simula un clic en el botón de Licenciatura al cargar la página
        btnLicenciatura.click();
    };
});
