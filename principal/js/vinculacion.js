// Seleccionar elementos del menú y las secciones
const menuItems = document.querySelectorAll('.menu-item');
const infoSections = document.querySelectorAll('.info-section');

// Agregar evento de clic a cada botón del menú
menuItems.forEach(item => {
  if (!item) return; // Si el botón no existe, pasar al siguiente
  item.addEventListener('click', () => {
    const target = item.getAttribute('data-target');

    // Ocultar todas las secciones
    infoSections.forEach(section => {
      if (!section) return; // Si la sección no existe, pasar al siguiente
      section.classList.add('hidden');
    });

    // Mostrar la sección correspondiente
    const targetSection = document.getElementById(target);
    if (targetSection) {
      targetSection.classList.remove('hidden');
    }
  });
});

// Agregar redirección para educación continua con parámetro de URL
document.addEventListener("DOMContentLoaded", function () {
  const allSections = document.querySelectorAll(".info-section");

  // Ocultar todas las secciones inicialmente
  allSections.forEach((section) => {
    if (!section) return; // Si la sección no existe, pasar al siguiente
    section.classList.add("hidden");
  });

  const urlParams = new URLSearchParams(window.location.search);
  const section = urlParams.get("section");

  if (!section) {
    const defaultSection = document.getElementById("presenta");
    if (defaultSection) {
      defaultSection.classList.remove("hidden");
    }
  } else {
    const targetSection = document.getElementById(section);
    if (targetSection) {
      targetSection.classList.remove("hidden");
    }
  }
});

// Otros bloques de código adaptados con condicionales similares
document.addEventListener("DOMContentLoaded", function () {
  const navButtons = document.querySelectorAll(".menu-btn");
  const infoButtons = document.querySelectorAll(".info-btn");

  navButtons.forEach((button) => {
    if (!button) return;
    button.addEventListener("click", () => {
      const targetContent = button.getAttribute("data-section");
      const activeSection = document.getElementById(targetContent);

      if (!activeSection || !targetContent) return;

      if (!activeSection.classList.contains("hidden")) return;

      document.querySelectorAll(".info-block").forEach((block) => {
        if (!block) return;
        block.classList.add("hidden");
        block.setAttribute("aria-hidden", "true");
      });

      navButtons.forEach((btn) => {
        if (!btn) return;
        btn.setAttribute("aria-expanded", "false");
      });

      activeSection.classList.remove("hidden");
      activeSection.setAttribute("aria-hidden", "false");
      button.setAttribute("aria-expanded", "true");

      document.querySelectorAll(".extra-info").forEach((extra) => {
        if (!extra) return;
        extra.classList.add("hidden");
      });
    });
  });

  infoButtons.forEach((button) => {
    if (!button) return;
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-target");
      const extraInfo = document.getElementById(target);

      if (!extraInfo) return;

      if (extraInfo.classList.contains("hidden")) {
        document.querySelectorAll(".extra-info").forEach((extra) => {
          if (!extra) return;
          extra.classList.add("hidden");
        });
        extraInfo.classList.remove("hidden");
      } else {
        extraInfo.classList.add("hidden");
      }
    });
  });

  const firstButton = navButtons[0];
  if (firstButton) {
    const firstSection = document.getElementById(firstButton.getAttribute("data-section"));
    if (firstSection) {
      firstSection.classList.remove("hidden");
      firstSection.setAttribute("aria-hidden", "false");
      firstButton.setAttribute("aria-expanded", "true");
    }
  }
});
