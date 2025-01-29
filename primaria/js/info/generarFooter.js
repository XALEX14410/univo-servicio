// footerGenerator.js
(function() {
    const baseImagePath = '/univo-servicio/primaria/logo_redes_sociales/';

    const footerConfig = {
        contactInfo: {
            phone: '(272) 725-45-24',
            lada: '01 (800) 7189439',
            address: 'Calle Vicente M. Corona s/n entre privada M. Corona y Av. de los Censos, Col. El Espinal, Orizaba, Veracruz. C.P. 94330, México'
        },
        socialMedia: {
            facebook: { 
                url: 'https://facebook.com', 
                icon: `${baseImagePath}facebook.svg` 
            },
            twitter: { 
                url: 'https://twitter.com', 
                icon: `${baseImagePath}twitter-x.svg` 
            },
            instagram: { 
                url: 'https://instagram.com', 
                icon: `${baseImagePath}instagram.svg` 
            },
            youtube: { 
                url: 'https://youtube.com', 
                icon: `${baseImagePath}youtube.svg` 
            },
            tiktok: { 
                url: 'https://tiktok.com', 
                icon: `${baseImagePath}tiktok.svg` 
            }
        },
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d879.7922056172741!2d-97.09868676042556!3d18.868823140039325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c51d56aaa83061%3A0x2615ead3d77fe63a!2sPrimaria%20Particular%20del%20Valle%20de%20Orizaba!5e0!3m2!1ses-419!2smx!4v1724967300702!5m2!1ses-419!2smx',
        copyrightText: '© 2024 INSTITUTO DE ESTUDIOS SUPERIORES DEL VALLE DE ORIZABA. Todos los derechos reservados. Grupo educativo univo'
    };

    // Resto del código igual...
    const injectStyles = () => {
        const style = document.createElement('link');
        style.rel = 'stylesheet';
        style.href = './css/footer.css';
        document.head.appendChild(style);
    };

    const generateFooter = () => {
        const footer = document.createElement('footer');
        footer.className = 'footer';

        footer.innerHTML = `
            <div class="container text-center">
                <div class="footer-content">
                    <div class="footer-section">
                        <h5>Contacto</h5>
                        <ul class="list-unstyled">
                            <li><i class="bi bi-telephone"></i> Teléfono: ${footerConfig.contactInfo.phone} Lada: ${footerConfig.contactInfo.lada}</li>
                            <li><i class="bi bi-house-door"></i> Dirección: ${footerConfig.contactInfo.address}</li>
                        </ul>
                    </div>

                    <div class="footer-section">
                        <h5>Buscanos</h5>
                        <iframe class="map-footer" 
                            src="${footerConfig.mapEmbedUrl}"
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

                <div class="social-icons mt-4">
                    ${Object.entries(footerConfig.socialMedia).map(([platform, data]) => `
                        <a href="${data.url}" target="_blank" class="social-icon" title="${platform.charAt(0).toUpperCase() + platform.slice(1)}">
                            <img src="${data.icon}" alt="${platform}">
                        </a>
                    `).join('')}
                </div>

                <div class="text-center mt-4">
                    <p>${footerConfig.copyrightText}</p>
                </div>
            </div>
        `;

        document.body.appendChild(footer);
    };

    document.addEventListener('DOMContentLoaded', () => {
        injectStyles();
        generateFooter();
    });
})();