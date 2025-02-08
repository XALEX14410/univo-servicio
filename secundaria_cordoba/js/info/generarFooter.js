// footerGenerator.js
(function () {
    const baseImagePath = '/univo-servicio/primaria/logo_redes_sociales/';

    const footerConfig = {
        contactInfo: {
            phone: '  (271) 714-49-52, (271) 712-71-74',
            address: ' K.m. 1.5 Carretera Córdoba−Sabana−Larga Col. La Luz Palotal. Córdoba, Ver.'
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
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d561.0755515468927!2d-96.94429211487518!3d18.911405435901536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c4e50b19e60493%3A0xb6299c24d3772474!2sUniversidad%20del%20Valle%20de%20Orizaba!5e0!3m2!1ses-419!2smx!4v1738986221063!5m2!1ses-419!2smx',
        copyrightText: '© Instituto de Estudios Superiores del Valle de Orizaba 2022.'
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
                            <li><i class="bi bi-telephone"></i> Teléfono: ${footerConfig.contactInfo.phone} </li>
                            
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
                

            <div class="footer-content">
                <div class="footer-section">
                    <h5>Siguenos</h5>
                    <div class="social-icons mt-2">
                    ${Object.entries(footerConfig.socialMedia).map(([platform, data]) => `
                        <a href="${data.url}" target="_blank" class="social-icon" title="${platform.charAt(0).toUpperCase() + platform.slice(1)}">
                            <img src="${data.icon}" alt="${platform}">
                        </a>
                    `).join('')}
                    </div>
                </div>
                <div class="footer-section text-center mt-2">
                    <p>${footerConfig.copyrightText}</p>    
                </div>
                
                 <div class="footer-section text-center mt-2">
                        <p><a href="/univo-servicio/principal/src/nosotros/aviso.html" target="_blank"> <i class="bi bi-box-arrow-in-up-right"></i> Aviso de privacidad</a></p>
                </div>
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