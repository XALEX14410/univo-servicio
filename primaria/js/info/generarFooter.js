function generarFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    footer.innerHTML = `
        <div class="container text-center">
            <div class="footer-content">
                <div class="footer-section">
                    <h5>Contacto</h5>
                    <ul class="list-unstyled">
                        <li><i class="bi bi-telephone"></i> Teléfono:(272) 725-45-24 Lada: 01 (800) 7189439</li>
                        <!-- <li><i class="bi bi-envelope"></i> Email: contacto@mitiendaderopa.com</li> -->
                        <li><i class="bi bi-house-door"></i> Dirección: Calle Vicente M. Corona s/n entre privada M. Corona y Av. de los Censos,
                            Col. El Espinal, Orizaba, Veracruz. C.P. 94330, México</li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h5>Buscanos</h5>
                    <iframe class="map-footer"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d879.7922056172741!2d-97.09868666042556!3d18.868823140039325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c51d56aaa83061%3A0x2615ead3d77fe63a!2sPrimaria%20Particular%20del%20Valle%20de%20Orizaba!5e0!3m2!1ses-419!2smx!4v1724967300702!5m2!1ses-419!2smx"
                        style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
    
            <div class="social-icons mt-4">
                <a href="https://facebook.com" target="_blank" class="social-icon" title="Facebook">
                    <img src="/univo-servicio/primaria/logo_redes_sociales/facebook.svg" alt="Facebook">
                </a>
                <a href="https://twitter.com" target="_blank" class="social-icon" title="Twitter">
                    <img src="/univo-servicio/primaria/logo_redes_sociales/twitter-x.svg" alt="Twitter">
                </a>
                <a href="https://instagram.com" target="_blank" class="social-icon" title="Instagram">
                    <img src="/univo-servicio/primaria/logo_redes_sociales/instagram.svg" alt="Instagram">
                </a>
                <a href="https://youtube.com" target="_blank" class="social-icon" title="YouTube">
                    <img src="/univo-servicio/primaria/logo_redes_sociales/youtube.svg" alt="YouTube">
                </a>
                <a href="https://tiktok.com" target="_blank" class="social-icon" title="TikTok">
                    <img src="/univo-servicio/primaria/logo_redes_sociales/tiktok.svg" alt="TikTok">
                </a>
            </div>
    
            <div class="text-center mt-4">
                <p>&copy; 2024 INSTITUTO DE ESTUDIOS SUPERIORES DEL VALLE DE ORIZABA. Todos los derechos reservados. Grupo educativo univo</p>
            </div>
        </div>
    `;

    // Agregar el footer al final del body
    document.body.appendChild(footer);
}
