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

document.addEventListener("DOMContentLoaded", function () {
  const navButtons = document.querySelectorAll(".menu-btn");
  const infoButtons = document.querySelectorAll(".info-btn");

  // Función para mostrar y ocultar secciones de información
  navButtons.forEach((button) => {
      button.addEventListener("click", () => {
          const targetContent = button.getAttribute("data-section");
          const activeSection = document.getElementById(targetContent);

          // Si la sección ya está visible, no hacer nada
          if (!activeSection.classList.contains("hidden")) return;

          // Ocultar todas las secciones de información y resetear botones
          document.querySelectorAll(".info-block").forEach((block) => {
              block.classList.add("hidden");
              block.setAttribute("aria-hidden", "true");
          });
          navButtons.forEach((btn) => btn.setAttribute("aria-expanded", "false"));

          // Mostrar la sección seleccionada
          activeSection.classList.remove("hidden");
          activeSection.setAttribute("aria-hidden", "false");
          button.setAttribute("aria-expanded", "true");

          // Restablecer visibilidad de información extra (si estaba visible)
          document.querySelectorAll(".extra-info").forEach((extra) => extra.classList.add("hidden"));
      });
  });

  // Funcionalidad de los botones de información adicional
  infoButtons.forEach((button) => {
      button.addEventListener("click", () => {
          const target = button.getAttribute("data-target");
          const extraInfo = document.getElementById(target);

          // Si la información extra está visible, ocultarla; si no está visible, mostrarla
          if (extraInfo.classList.contains("hidden")) {
              // Ocultar cualquier otra información extra que esté visible
              document.querySelectorAll(".extra-info").forEach((extra) => extra.classList.add("hidden"));
              // Mostrar la información adicional seleccionada
              extraInfo.classList.remove("hidden");
          } else {
              // Ocultar la información extra seleccionada
              extraInfo.classList.add("hidden");
          }
      });
  });

  // Mostrar la primera sección (Nivel Licenciatura) al cargar la página
  const firstButton = navButtons[0];
  const firstSection = document.getElementById(firstButton.getAttribute("data-section"));
  firstSection.classList.remove("hidden");
  firstSection.setAttribute("aria-hidden", "false");
  firstButton.setAttribute("aria-expanded", "true");
});



