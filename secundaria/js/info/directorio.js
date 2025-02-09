// Datos de contacto +522712550960
const contacts = [
    {
        title: "Subdirección",
        emails: ["egarcia@univo.edu.mx"],
        phones: {
            fijo: [],
            whatsapp: []
        }
    },
    {
        title: "Control Escolar",
        emails: ["garcia@univo.edu.mx"],
        phones: {
            fijo: [],
            whatsapp: []
        }
    },
    {
        title: "Prefectura",
        emails: ["amancera@univo.edu.mx","ihernandez@univo.edu.mx"],
        phones: {
            fijo: [],
            whatsapp: []
        }
    },
    {
        title: "Caja",
        emails: ["caja@univo.edu.mx"],
        phones: {
            fijo: [],
            whatsapp: []
        }
    },
    {
        title: "Cobranza",
        emails: ["cobranza@univo.edu.mx"],
        phones: {
            fijo: [],
            whatsapp: []
        }
    }
];

// Referencia al contenedor
const contactGrid = document.getElementById("contact-grid");

// Generar contenido dinámicamente
contacts.forEach((contact, index) => {
    const contactItem = document.createElement("div");
    contactItem.classList.add("contact-item");
    contactItem.id = `contact-item-${index + 1}`;

    // Generar correos electrónicos
    const emailLinks = contact.emails.length > 0
        ? `<p><strong>Correos:</strong><br>${contact.emails.map(email => `<a href="mailto:${email}" class="contact-email"><i class="bi bi-envelope-at-fill"></i> ${email}</a>`).join("<br>")}</p>`
        : "";

    // Generar números de teléfono fijo
    const fijoLinks = contact.phones.fijo.length > 0
        ? `<p><strong>Teléfonos fijos:</strong><br>${contact.phones.fijo.map(fijo => `<a href="tel:${fijo}" class="contact-phone"><i class="bi bi-telephone-fill"></i> ${fijo}</a>`).join("<br>")}</p>`
        : "";

    // Generar números de WhatsApp
    const whatsappLinks = contact.phones.whatsapp.length > 0
        ? `<p><strong>WhatsApp:</strong><br>${contact.phones.whatsapp.map(whatsapp => {
            const messageParam = whatsapp.message 
                ? `?text=${encodeURIComponent(whatsapp.message)}` 
                : "";
            return `<a href="https://wa.me/${whatsapp.number.replace('+', '')}${messageParam}" target="_blank" class="contact-whatsapp"><i class="bi bi-whatsapp"></i> ${whatsapp.number}</a>`;
        }).join("<br>")}</p>`
        : "";

    // Generar redes sociales solo si hay al menos un enlace válido
    let socialLinks = "";
    if (contact.social) {
        const { facebook, twitter, instagram } = contact.social;
        if (facebook || twitter || instagram) {
            socialLinks = `<p><strong>Redes Sociales:</strong><br>`;
            if (facebook) socialLinks += `<a href="${facebook}" target="_blank" class="contact-social"><i class="bi bi-facebook"></i> Facebook</a><br>`;
            if (twitter) socialLinks += `<a href="${twitter}" target="_blank" class="contact-social"><i class="bi bi-twitter-x"></i> Twitter</a><br>`;
            if (instagram) socialLinks += `<a href="${instagram}" target="_blank" class="contact-social"><i class="bi bi-instagram"></i> Instagram</a>`;
            socialLinks += `</p>`;
        }
    }

    // Verificar si hay contenido antes de agregar el contacto
    if (emailLinks || fijoLinks || whatsappLinks || socialLinks) {
        contactItem.innerHTML = `
            <h3>${contact.title}</h3>
            ${emailLinks}
            ${fijoLinks}
            ${whatsappLinks}
            ${socialLinks}
        `.trim();

        // Agregar elemento al contenedor
        contactGrid.appendChild(contactItem);
    }
});