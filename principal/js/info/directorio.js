function generarSecciones() {
    const sectionsData = [
      {
        id: "section1",
        subdirector: "Subdirección",
        email: "subdireccion.primaria@correo.univo.edu.mx",
        icon: "bi bi-envelope-at",  // Correo
      },
      {
        id: "section2",
        subdirector: "Subdirección",
        email: "secundaria@univo.edu.mx",
        icon: "bi bi-envelope-at",  // Correo
      },
      {
        id: "section3",
        subdirector: "Subdirección",
        email: "bachilleres@univo.edu.mx",
        icon: "bi bi-envelope-at",  // Correo
      },
      {
        id: "section4",
        subdirectores: [
          { name: "Relaciones Internacionales", email: "cie@correo.univo.edu.mx", icon: "bi bi-envelope-at" },
          { name: "Centro de Idiomas Extranjeros", email: "cie@correo.univo.edu.mx", icon: "bi bi-envelope-at" },
          { name: "Titulación", email: "titulacion@correo.univo.edu.mx", icon: "bi bi-envelope-at" },
          { name: "Control Escolar", email: "controlescolar@correo.univo.edu.mx", icon: "bi bi-envelope-at" },
          { name: "Vinculación", email: "vinculacion@correo.univo.edu.mx", icon: "bi bi-envelope-at" },
          { name: "Biblioteca", email: "biblioteca@univo.edu.mx", icon: "bi bi-envelope-at" },
          { name: "Secretaría Académica", email: "ecabrera@correo.univo.edu.mx", icon: "bi bi-envelope-at" },
          { name: "Servicio Social", email: "serviciosocial@correo.univo.edu.mx", icon: "bi bi-envelope-at" },
          
          { name: "Facultad Humanidades", email: "humanidades@correo.univo.edu.mx", icon: "bi bi-envelope-at" },
          { name: "Facultad de Ingeniería", email: "ingenieria@correo.univo.edu.mx", icon: "bi bi-envelope-at" },
          { name: "Facultad Económico−Administrativa", email: "economico.administrativas@correo.univo.edu.mx", icon: "bi bi-envelope-at" }
        ],
      },
      {
        id: "section5",
        subdirectores: [
          { name: "Dirección", email: "vemarinero@correo.univo.edu.mx", icon: "bi bi-envelope-at" },
          { name: "Bachillerato y Secundaria", email: "joflores@correo.univo.edu.mx", icon: "bi bi-envelope-at" },
          { name: "Comunicación Social", email: "cordoba.comsoc@correo.univo.edu.mx", icon: "bi bi-whatsapp" },  // WhatsApp
          { name: "Coordinación Académica Licenciatura", email: "ludejesus@correo.univo.edu.mx", icon: "bi bi-envelope-at" },
          { name: "Caja", email: "maherrera@correo.univo.edu.mx", icon: "bi bi-phone" },  // Teléfono
          { name: "Control Escolar", email: "frbandala@correo.univo.edu.mx", icon: "bi bi-envelope-at" },
        ],
      },
      {
        id: "section6",
        subdirector: "Posgrado",
        email: "posgrado@correo.univo.edu.mx",
        icon: "bi bi-envelope-at",  // Correo
      },
      {
        id: "section7",
        subdirector: "UniVO con el adulto mayor",
        email: "uniam@correo.univo.edu.mx",
        icon: "bi bi-envelope-at",  // Correo
      },
      {
        id: "section8",
        subdirectores: [
          { name: "Conmutador", email: "Ext: 400", icon: "bi bi-phone" },  // Teléfono
          { name: "Comunicación Social", email: "csocial@correo.univo.edu.mx", icon: "bi bi-envelope-at" },
          { name: "Cultural", email: "cultural@correo.univo.edu.mx", icon: "bi bi-envelope-at" },
          { name: "Centro de Cómputo", email: "sistemas@correo.univo.edu.mx", icon: "bi bi-envelope-at" },
          { name: "Caja", email: "caja@univo.edu.mx", icon: "bi bi-phone" },  // Teléfono
          { name: "Crédito y Cobranza", email: "cobranza@correo.univo.edu.mx", icon: "bi bi-envelope-at" },
          { name: "Recursos Humanos", email: "recursoshumanos@correo.univo.edu.mx", icon: "bi bi-envelope-at" },
        ],
      },
    ];
  
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
            </div>
          `;
        });
      } else {
        subdirectoresHTML = `
          <div class="univo-programa">
            <h4>${section.subdirector}</h4>
            <i class="${section.icon}"></i>
            <p>${section.email}</p>
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
  
  document.addEventListener('DOMContentLoaded', generarSecciones);
  