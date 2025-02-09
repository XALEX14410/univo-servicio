// Datos de contacto con múltiples subdirectores
const sectionsData = [
  {
    id: "section1",
    subdirector: "Subdirección",
    email: "subdireccion.primaria@correo.univo.edu.mx",
    phones: {
      fijo: [],
      whatsapp: []
    },
    social: {},
    icon: "bi bi-envelope-at",  // Correo
  },
  {
    id: "section2",
    subdirector: "Subdirección",
    email: "secundaria@univo.edu.mx",
    phones: {
      fijo: [],
      whatsapp: []
    },
    social: {},
    icon: "bi bi-envelope-at",  // Correo
  },
  {
    id: "section3",
    subdirector: "Subdirección",
    email: "bachilleres@univo.edu.mx",
    phones: {
      fijo: [],
      whatsapp: []
    },
    social: {},
    // Correo
  },
  {
    id: "section4",
    subdirectores: [
      { name: "Relaciones Internacionales", email: "cie@correo.univo.edu.mx", icon: "bi bi-envelope-at", phones: { fijo: [], whatsapp: [] }, social: {} },
      { name: "Centro de Idiomas Extranjeros", email: "cie@correo.univo.edu.mx", icon: "bi bi-envelope-at", phones: { fijo: [], whatsapp: [] }, social: {} },
      { name: "Titulación", email: "titulacion@correo.univo.edu.mx", icon: "bi bi-envelope-at", phones: { fijo: [], whatsapp: [] }, social: {} },
      { name: "Control Escolar", email: "controlescolar@correo.univo.edu.mx", icon: "bi bi-envelope-at", phones: { fijo: [], whatsapp: [] }, social: {} },
      { name: "Vinculación", email: "vinculacion@correo.univo.edu.mx", icon: "bi bi-envelope-at", phones: { fijo: [], whatsapp: [] }, social: {} },
      { name: "Biblioteca", email: "biblioteca@univo.edu.mx", icon: "bi bi-envelope-at", phones: { fijo: [], whatsapp: [] }, social: {} },
      { name: "Secretaría Académica", email: "ecabrera@correo.univo.edu.mx", icon: "bi bi-envelope-at", phones: { fijo: [], whatsapp: [] }, social: {} },
      { name: "Servicio Social", email: "serviciosocial@correo.univo.edu.mx", icon: "bi bi-envelope-at", phones: { fijo: [], whatsapp: [] }, social: {} },
      { name: "Facultad Humanidades", email: "humanidades@correo.univo.edu.mx", icon: "bi bi-envelope-at", phones: { fijo: [], whatsapp: [] }, social: {} },
      { name: "Facultad de Ingeniería", email: "ingenieria@correo.univo.edu.mx", icon: "bi bi-envelope-at", phones: { fijo: [], whatsapp: [] }, social: {} },
      { name: "Facultad Económico−Administrativa", email: "economico.administrativas@correo.univo.edu.mx", icon: "bi bi-envelope-at", phones: { fijo: [], whatsapp: [] }, social: {} }
    ],
  },
  {
    id: "section5",
    subdirectores: [
      { name: "Dirección", email: "vemarinero@correo.univo.edu.mx", icon: "bi bi-envelope-at", phones: { fijo: [], whatsapp: [] }, social: {} },
      { name: "Bachillerato y Secundaria", email: "joflores@correo.univo.edu.mx", icon: "bi bi-envelope-at", phones: { fijo: [], whatsapp: [] }, social: {} },
      { name: "Comunicación Social", email: "cordoba.comsoc@correo.univo.edu.mx", icon: "bi bi-whatsapp", phones: { fijo: [], whatsapp: [] }, social: {} },  // WhatsApp
      { name: "Coordinación Académica Licenciatura", email: "ludejesus@correo.univo.edu.mx", icon: "bi bi-envelope-at", phones: { fijo: [], whatsapp: [] }, social: {} },
      { name: "Caja", email: "maherrera@correo.univo.edu.mx", icon: "bi bi-phone", phones: { fijo: [], whatsapp: [] }, social: {} },  // Teléfono
      { name: "Control Escolar", email: "frbandala@correo.univo.edu.mx", icon: "bi bi-envelope-at", phones: { fijo: [], whatsapp: [] }, social: {} },
    ],
  },
  {
    id: "section6",
    subdirector: "Posgrado",
    email: "posgrado@correo.univo.edu.mx",
    phones: {
      fijo: [],
      whatsapp: []
    },
    social: {},
    icon: "bi bi-envelope-at",  // Correo
  },

  {
    id: "section7",
    subdirector: "UniVO con el adulto mayor",
    email: "uniam@correo.univo.edu.mx",
    phones: {
      fijo: [],
      whatsapp: []
    },
    social: {},
    // Correo
  },
  {
    id: "section8",
    subdirectores: [
      { name: "Conmutador", email: "Ext: 400", icon: "bi bi-phone", phones: { fijo: [], whatsapp: [] }, social: {} },  // Teléfono
      { name: "Comunicación Social", email: "csocial@correo.univo.edu.mx", icon: "bi bi-envelope-at", phones: { fijo: [], whatsapp: [] }, social: {} },
      { name: "Cultural", email: "cultural@correo.univo.edu.mx", icon: "bi bi-envelope-at", phones: { fijo: [], whatsapp: [] }, social: {} },
      { name: "Centro de Cómputo", email: "sistemas@correo.univo.edu.mx", icon: "bi bi-envelope-at", phones: { fijo: [], whatsapp: [] }, social: {} },
      { name: "Caja", email: "caja@univo.edu.mx", icon: "bi bi-phone", phones: { fijo: [], whatsapp: [] }, social: {} },  // Teléfono
      { name: "Crédito y Cobranza", email: "cobranza@correo.univo.edu.mx", icon: "bi bi-envelope-at", phones: { fijo: [], whatsapp: [] }, social: {} },
      { name: "Recursos Humanos", email: "recursoshumanos@correo.univo.edu.mx", icon: "bi bi-envelope-at", phones: { fijo: [], whatsapp: [] }, social: {} },
    ],
  },
  // Otros objetos de sección...
];








// Función para generar las secciones
function generarSecciones() {
  const sectionsContainer = document.getElementById("sections-container");

  sectionsData.forEach((section) => {
    let subdirectoresHTML = '';

    if (section.subdirectores) {
      section.subdirectores.forEach((subdir) => {
        subdirectoresHTML += `
                  <div class="univo-programa">
                      <h4>${subdir.name}</h4>
                      <i class="${subdir.icon}"></i>
                      <p>${subdir.email}</p>
                      ${subdir.phones.fijo.length > 0 ? `
                          <p><strong>Teléfonos fijos:</strong><br>${subdir.phones.fijo.map(fijo => `<a href="tel:${fijo}" class="contact-phone"><i class="bi bi-telephone-fill"></i> ${fijo}</a>`).join("<br>")}</p>
                      ` : ""}
                      ${subdir.phones.whatsapp.length > 0 ? `
                          <p><strong>WhatsApp:</strong><br>${subdir.phones.whatsapp.map(whatsapp => {
          return `<a href="https://wa.me/${whatsapp}" target="_blank" class="contact-whatsapp"><i class="bi bi-whatsapp"></i> ${whatsapp}</a>`;
        }).join("<br>")}</p>
                      ` : ""}
                      ${subdir.social && (subdir.social.facebook || subdir.social.twitter || subdir.social.instagram) ? `
                          <p><strong>Redes sociales:</strong><br>
                              ${subdir.social.facebook ? `<a href="${subdir.social.facebook}" target="_blank"><i class="bi bi-facebook"></i> Facebook</a><br>` : ""}
                              ${subdir.social.twitter ? `<a href="${subdir.social.twitter}" target="_blank"><i class="bi bi-twitter-x"></i> Twitter</a><br>` : ""}
                              ${subdir.social.instagram ? `<a href="${subdir.social.instagram}" target="_blank"><i class="bi bi-instagram"></i> Instagram</a><br>` : ""}
                          </p>
                      ` : ""}
                  </div>
              `;
      });
    } else {
      subdirectoresHTML = `
              <div class="univo-programa">
                  <h4>${section.subdirector}</h4>
                  <i class="${section.icon}"></i>
                  <p>${section.email}</p>
                  ${section.phones.fijo.length > 0 ? `
                      <p><strong>Teléfonos fijos:</strong><br>${section.phones.fijo.map(fijo => `<a href="tel:${fijo}" class="contact-phone"><i class="bi bi-telephone-fill"></i> ${fijo}</a>`).join("<br>")}</p>
                  ` : ""}
                  ${section.phones.whatsapp.length > 0 ? `
                      <p><strong>WhatsApp:</strong><br>${section.phones.whatsapp.map(whatsapp => {
        return `<a href="https://wa.me/${whatsapp}" target="_blank" class="contact-whatsapp"><i class="bi bi-whatsapp"></i> ${whatsapp}</a>`;
      }).join("<br>")}</p>
                  ` : ""}
                  ${section.social && (section.social.facebook || section.social.twitter || section.social.instagram) ? `
                      <p><strong>Redes sociales:</strong><br>
                          ${section.social.facebook ? `<a href="${section.social.facebook}" target="_blank"><i class="bi bi-facebook"></i> Facebook</a><br>` : ""}
                          ${section.social.twitter ? `<a href="${section.social.twitter}" target="_blank"><i class="bi bi-twitter-x"></i> Twitter</a><br>` : ""}
                          ${section.social.instagram ? `<a href="${section.social.instagram}" target="_blank"><i class="bi bi-instagram"></i> Instagram</a><br>` : ""}
                      </p>
                  ` : ""}
              </div>
          `;
    }

    // Agregar todo el contenido HTML con "grid-container" directamente en el innerHTML
    sectionsContainer.innerHTML += `
          <div id="${section.id}" class="section-content">
              <section class="univo-contenido">
                  <div class="univo-facultad grid-container">
                      ${subdirectoresHTML}
                  </div>
              </section>
          </div>
      `;
  });
}

// Llamar la función cuando se haya cargado el DOM
document.addEventListener('DOMContentLoaded', generarSecciones);