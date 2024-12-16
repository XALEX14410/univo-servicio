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




document.addEventListener("DOMContentLoaded", function () {
  // Seleccionar los botones principales por id
  const licenciaturaBtn = document.getElementById("btn-licenciatura");
  const posgradoBtn = document.getElementById("btn-posgrado");

  // Seleccionar las secciones principales por id
  const licenciaturaContent = document.getElementById("content-licenciatura");
  const posgradoContent = document.getElementById("content-posgrado");

  // Seleccionar botones de información extra por id
  const licenciaturaExtra1 = document.getElementById("btn-lic-extra1");
  const licenciaturaExtra2 = document.getElementById("btn-lic-extra2");
  const licenciaturaExtra3 = document.getElementById("btn-lic-extra3");
  const posgradoExtra1 = document.getElementById("btn-pos-extra1");
  const posgradoExtra2 = document.getElementById("btn-pos-extra2");
  const posgradoExtra3 = document.getElementById("btn-pos-extra3");

  // Seleccionar las secciones de información extra por id
  const licExtra1 = document.getElementById("extra-lic1");
  const licExtra2 = document.getElementById("extra-lic2");
  const licExtra3 = document.getElementById("extra-lic3");
  const posExtra1 = document.getElementById("extra-pos1");
  const posExtra2 = document.getElementById("extra-pos2");
  const posExtra3 = document.getElementById("extra-pos3");

  // Función para manejar los botones principales
  function showMainContent(targetContent, hideContent) {
      // Ocultar la sección no activa
      hideContent.classList.add("hidden");
      hideContent.setAttribute("aria-hidden", "true");

      // Mostrar la sección seleccionada
      targetContent.classList.remove("hidden");
      targetContent.setAttribute("aria-hidden", "false");

      // Ocultar cualquier información extra visible
      document.querySelectorAll(".extra-info").forEach((extra) => extra.classList.add("hidden"));
  }

  // Eventos de botones principales
  licenciaturaBtn.addEventListener("click", () => {
      showMainContent(licenciaturaContent, posgradoContent);
  });

  posgradoBtn.addEventListener("click", () => {
      showMainContent(posgradoContent, licenciaturaContent);
  });

  // Función para manejar los botones de información extra
  function toggleExtraInfo(targetExtra, extraGroup) {
      // Ocultar todas las demás informaciones extra del grupo actual
      extraGroup.forEach((extra) => extra.classList.add("hidden"));

      // Mostrar u ocultar la información seleccionada
      if (targetExtra.classList.contains("hidden")) {
          targetExtra.classList.remove("hidden");
      } else {
          targetExtra.classList.add("hidden");
      }
  }

  // Eventos para botones de información extra (Licenciatura)
  licenciaturaExtra1.addEventListener("click", () => {
      toggleExtraInfo(licExtra1, [licExtra1, licExtra2, licExtra3]);
  });

  licenciaturaExtra2.addEventListener("click", () => {
      toggleExtraInfo(licExtra2, [licExtra1, licExtra2, licExtra3]);
  });

  licenciaturaExtra3.addEventListener("click", () => {
      toggleExtraInfo(licExtra3, [licExtra1, licExtra2, licExtra3]);
  });

  // Eventos para botones de información extra (Posgrado)
  posgradoExtra1.addEventListener("click", () => {
      toggleExtraInfo(posExtra1, [posExtra1, posExtra2, posExtra3]);
  });

  posgradoExtra2.addEventListener("click", () => {
      toggleExtraInfo(posExtra2, [posExtra1, posExtra2, posExtra3]);
  });

  posgradoExtra3.addEventListener("click", () => {
      toggleExtraInfo(posExtra3, [posExtra1, posExtra2, posExtra3]);
  });

  // Mostrar la sección inicial por defecto
  licenciaturaContent.classList.remove("hidden");
  licenciaturaContent.setAttribute("aria-hidden", "false");
});

