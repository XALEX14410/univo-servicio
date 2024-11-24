// Seleccionar elementos del menú y las secciones
const menuItems = document.querySelectorAll('.menu-item');
const infoSections = document.querySelectorAll('.info-section');

// Agregar evento de clic a cada botón del menú
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    const target = item.getAttribute('data-target');

    // Ocultar todas las secciones
    infoSections.forEach(section => {
      section.classList.add('hidden');
    });

    // Mostrar la sección correspondiente
    document.getElementById(target).classList.remove('hidden');
  });
});
