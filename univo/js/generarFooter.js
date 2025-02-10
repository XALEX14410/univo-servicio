(function () {
    const baseImagePath = '/univo-servicio/univo/logo_redes_sociales/';

    const footerConfig = {
        logo: '/univo-servicio/univo/img/GEU2030-50.png',
        copyrightText: '© 2024 Grupo Educativo Univo 2030',
        instituteName: 'Instituto de Estudios Superiores del Valle de Orizaba',
        contactInfo: {
            address: 'VICENTE M. CORONA ENTRE PRIVADA CORONA Y AV. DE LOS CENSOS, COL. EL ESPINAL',
            postalCode: 'C.P. 94330 | ORIZABA, VERACRUZ, MÉXICO',
            phones: '(272) 726-14-36, 726-14-01',
            lada: '(800) 7189439'
        },
        socialMedia: {
            instagram: {
                url: '#',
                icon: `${baseImagePath}instagram.svg`
            },
            tiktok: {
                url: '#',
                icon: `${baseImagePath}tiktok.svg`
            },
            facebook: {
                url: '#',
                icon: `${baseImagePath}facebook.svg`
            },
            youtube: {
                url: '#',
                icon: `${baseImagePath}youtube.svg`
            }
        },
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d793.693648341682!2d-97.09916997560359!3d18.869261790339632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c51d514cdc60e9%3A0xb805a5a857fbf564!2sUniversidad%20del%20Valle%20de%20Orizaba!5e0!3m2!1ses-419!2smx!4v1730881098364!5m2!1ses-419!2smx'
    };

    const generateFooter = () => {
        const footer = document.createElement('footer');
        footer.className = 'footer';

        footer.innerHTML = `
            <div class="footer-container">
                <div class="footer-logo">
                    <img src="${footerConfig.logo}" alt="Instituto Logo">
                    <p>${footerConfig.copyrightText}</p>
                    <p>${footerConfig.instituteName}</p>
                </div>
                <div class="footer-contact">
                    <h3>Contacto</h3>
                    <p>${footerConfig.contactInfo.address}</p>
                    <p>${footerConfig.contactInfo.postalCode}</p>
                    <p>Tels: ${footerConfig.contactInfo.phones}</p>
                    <p>LADA: ${footerConfig.contactInfo.lada}</p>
                </div>
                <div class="footer-social">
                    <h3>Síguenos</h3>
                    <div class="social-icons">
                        ${Object.entries(footerConfig.socialMedia).map(([platform, data]) => `
                            <a href="${data.url}" target="_blank" title="${platform.charAt(0).toUpperCase() + platform.slice(1)}">
                                <img src="${data.icon}" alt="${platform}">
                            </a>
                        `).join('')}
                    </div>
                </div>
                <div class="footer-map">
                    <h3>Encuéntranos</h3>
                    <iframe class="mapita" src="${footerConfig.mapEmbedUrl}" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        `;

        document.body.appendChild(footer);
    };

    document.addEventListener('DOMContentLoaded', generateFooter);
})();