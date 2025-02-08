// Datos de contacto +522712550960
const contacts = [
    {
        title: "Dirección",
        emails: ["rmartinez@correo.univo.edu.mx", "direccion2@univo.edu.mx"],
        phones: {
            fijo: ["+525555555555", "+525566666666"],
            whatsapp: [
                { number: "+522712550960", message: "Hola, me interesa información sobre la Dirección." },
            ],
        }
    },
    {
        title: "Control Escolar",
        emails: ["garcia@univo.edu.mx"],
        phones: {
            fijo: ["+525588888888"],
            whatsapp: [
                { number: "+525599999999", message: "" }, // Sin mensaje cargado
            ],
        },
        social: {
            facebook: "https://www.facebook.com/univo.escolar",
            twitter: "https://twitter.com/univo_escolar",
            instagram: "https://www.instagram.com/univo.escolar",
        }
    },
    {
        title: "Caja",
        emails: ["caja@univo.edu.mx"],
        phones: {
            fijo: ["+525511111111"],
            whatsapp: [
                { number: "+525522222222", message: "Hola, tengo dudas sobre mis pagos en Caja." },
            ],
        }
    },
    {
        title: "Cobranza",
        emails: ["cobranza@univo.edu.mx"],
        phones: {
            fijo: ["+525533333333"],
            whatsapp: [
                { number: "+525544444444", message: "" },
            ],
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
    const emailLinks = contact.emails
        .map(email => `<a href="mailto:${email}" class="contact-email"><i class="bi bi-envelope-at-fill"></i> ${email}</a>`)
        .join("<br>");

    // Generar números de teléfono
    const fijoLinks = contact.phones.fijo
        .map(fijo => `<a href="tel:${fijo}" class="contact-phone"><i class="bi bi-telephone-fill"></i> ${fijo}</a>`)
        .join("<br>");

    const whatsappLinks = contact.phones.whatsapp
        .map(whatsapp => {
            const messageParam = whatsapp.message 
                ? `?text=${encodeURIComponent(whatsapp.message)}` 
                : "";
            return `<a href="https://wa.me/${whatsapp.number.replace('+', '')}${messageParam}" target="_blank" class="contact-whatsapp"><i class="bi bi-whatsapp"></i> ${whatsapp.number}</a>`;
        })
        .join("<br>");

    // Generar redes sociales (si existen)
    let socialLinks = "";
    if (contact.social) {
        socialLinks = `
            <p><strong>Redes Sociales:</strong><br>
                ${contact.social.facebook ? `<a href="${contact.social.facebook}" target="_blank" class="contact-social"><i class="bi bi-facebook"></i> Facebook</a><br>` : ""}
                ${contact.social.twitter ? `<a href="${contact.social.twitter}" target="_blank" class="contact-social"><i class="bi bi-twitter-x"></i> Twitter</a><br>` : ""}
                ${contact.social.instagram ? `<a href="${contact.social.instagram}" target="_blank" class="contact-social"><i class="bi bi-instagram"></i> Instagram</a>` : ""}
            </p>
        `;
    }

    // Insertar contenido al elemento
    contactItem.innerHTML = `
        <h3>${contact.title}</h3>
        <p><strong>Correos:</strong><br>${emailLinks}</p>
        <p><strong>Teléfonos fijos:</strong><br>${fijoLinks}</p>
        <p><strong>WhatsApp:</strong><br>${whatsappLinks}</p>
        ${socialLinks}
    `;

    // Agregar elemento al contenedor
    contactGrid.appendChild(contactItem);
});
