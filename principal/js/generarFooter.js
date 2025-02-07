function generarFooter() {
    const footerData = {
        logoSrc: "/univo-servicio/principal/img/GEU2030-50.png",
        logoAlt: "Instituto Logo",
        copyrightText: "© 2024 Grupo Educativo UniVO 2030",
        instituteName: "Instituto de Estudios Superiores del Valle de Orizaba",
        contact: {
            address: "VICENTE M. CORONA ENTRE PRIVADA CORONA Y AV. DE LOS CENSOS, COL. EL ESPINAL",
            postalCode: "C.P. 94330 | ORIZABA, VERACRUZ, MÉXICO",
            phones: [
                "(272) 726-14-36", 
                "(272) 726-14-01", 
                "(800) 7189439"
            ]
        },
        socialLinks: [
            { platform: "Instagram", href: "#", iconSrc: "/univo-servicio/principal/logo_redes_sociales/instagram.svg" },
            { platform: "TikTok", href: "#", iconSrc: "/univo-servicio/principal/logo_redes_sociales/tiktok.svg" },
            { platform: "Twitter", href: "#", iconSrc: "/univo-servicio/principal/logo_redes_sociales/twitter-x.svg" },
            { platform: "Facebook", href: "#", iconSrc: "/univo-servicio/principal/logo_redes_sociales/facebook.svg" },
            { platform: "YouTube", href: "#", iconSrc: "/univo-servicio/principal/logo_redes_sociales/youtube.svg" }
        ],
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d793.693648341682!2d-97.09916997560359!3d18.869261790339632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c51d514cdc60e9%3A0xb805a5a857fbf564!2sUniversidad%20del%20Valle%20de%20Orizaba!5e0!3m2!1ses-419!2smx!4v1730881098364!5m2!1ses-419!2smx"
    };

    const footer = document.createElement('footer');
    footer.classList.add('footer');

    footer.innerHTML = `
        <div class="footer-container">
            <!-- Logo y Derechos de Autor -->
            <div class="footer-logo">
                <img src="${footerData.logoSrc}" alt="${footerData.logoAlt}">
                <p>${footerData.copyrightText}</p>
                <p>${footerData.instituteName}</p>
                <a href="/univo-servicio/principal/src/nosotros/aviso.html">Aviso de Privacidad </a>
            </div>

            <!-- Información de Contacto -->
            <div class="footer-contact">
                <h3>Contacto</h3>
                <p>${footerData.contact.address}</p>
                <p>${footerData.contact.postalCode}</p>
                <p>Tels: ${footerData.contact.phones.join(', ')}</p>
            </div>

            <!-- Redes Sociales -->
            <div class="footer-social">
                <h3>Síguenos</h3>
                <div class="social-icons">
                    ${footerData.socialLinks.map(link => `
                        <a href="${link.href}">
                            <img src="${link.iconSrc}" alt="${link.platform}">
                        </a>
                    `).join('')}
                </div>
            </div>

            <!-- Mapa de Ubicación -->
            <div class="footer-map">
                <h3>Encuéntranos</h3>
                <iframe class="mapita"
                    src="${footerData.mapSrc}"
                    allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    `;

    // Agregar el footer al final del body
    document.body.appendChild(footer);
}
document.addEventListener('DOMContentLoaded', generarFooter);
