function generarFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    footer.innerHTML = `
        <div class="footer-container">
            <!-- Logo y Derechos de Autor -->
            <div class="footer-logo">
                <img src="/univo-servicio/univo/img/GEU2030-50.png" alt="Instituto Logo">
                <p>© 2024 Grupo Educativo Univo 2030</p>
                <p>Instituto de Estudios Superiores del Valle de Orizaba</p>
            </div>

            <!-- Información de Contacto -->
            <div class="footer-contact">
                <h3>Contacto</h3>
                <p>VICENTE M. CORONA ENTRE PRIVADA CORONA Y AV. DE LOS CENSOS, COL. EL ESPINAL</p>
                <p>C.P. 94330 | ORIZABA, VERACRUZ, MÉXICO</p>
                <p>Tels: (272) 726-14-36, 726-14-01</p>
                <p>LADA: (800) 7189439</p>
            </div>

            <!-- Redes Sociales -->
            <div class="footer-social">
                <h3>Síguenos</h3>
                <div class="social-icons">
                    <a href="#"><img src="/univo-servicio/univo/logo_redes_sociales/instagram.svg" alt="Instagram"></a>
                    <a href="#"><img src="/univo-servicio/univo/logo_redes_sociales/tiktok.svg" alt="TikTok"></a>
                    <!--<a href="#"><img src="/univo-servicio/univo/logo_redes_sociales/twitter-x.svg" alt="Twitter"></a>-->
                    <a href="#"><img src="/univo-servicio/univo/logo_redes_sociales/facebook.svg" alt="Facebook"></a>
                    <a href="#"><img src="/univo-servicio/univo/logo_redes_sociales/youtube.svg" alt="YouTube"></a>
                </div>
            </div>

            <!-- Mapa de Ubicación -->
            <div class="footer-map">
                <h3>Encuéntranos</h3>
                <iframe class="mapita"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d793.693648341682!2d-97.09916997560359!3d18.869261790339632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c51d514cdc60e9%3A0xb805a5a857fbf564!2sUniversidad%20del%20Valle%20de%20Orizaba!5e0!3m2!1ses-419!2smx!4v1730881098364!5m2!1ses-419!2smx"
                    allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    `;

    // Agregar el footer al final del body
    document.body.appendChild(footer);
}
