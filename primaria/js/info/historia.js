document.addEventListener('DOMContentLoaded', function () {
    // Datos del contenido
    /**
     * @constant {Array<Object>} contenido - Grupo Educativo UniVO crea a partir de agosto de 2005 la Primaria Particular del Valle de Orizaba, una institución Privada incorporada a la Secretaría de Educación de Veracruz con la Clave de Centro de Trabajo 30PPR0020J y No. de Acuerdo PRI001/2005, siendo actualmente de las más importantes de la Zona centro del Estado de Veracruz; basada en los mismos valores y principios que fundamentan la vida de nuestra comunidad educativa.
     * @property {string} title - The title of the content section.
     * @property {Array<string>} images - An array of image paths related to the content.
     * @property {Array<Object>} videos - An array of video objects related to the content.
     * @property {string} videos.url - The URL of the video.
     * @property {string} videos.title - The title of the video.
     * @property {Array<Object>} social - An array of social media objects related to the content.
     * @property {string} social.platform - The social media platform name.
     * @property {string} social.url - The URL of the social media profile.
     * @property {string} id - The unique identifier for the content section.
     */
    const contenido = [
        {
            // title: "Historia",
            description: "Grupo Educativo UniVO crea a partir de agosto de 2005 la Primaria Particular del Valle de Orizaba, una institución Privada incorporada a la Secretaría de Educación de Veracruz con la Clave de Centro de Trabajo 30PPR0020J y No. de Acuerdo PRI001/2005, siendo actualmente de las más importantes de la Zona centro del Estado de Veracruz; basada en los mismos valores y principios que fundamentan la vida de nuestra comunidad educativa.",
            images: [
                "/univservicio/primaria/../img/GEU2030-50.png",
                "/univseicio/primaria/../img/GEU2031-51.png"
            ],
            videos: [
                { url: "https://www.youtube.com/embed/xxxxxx", title: "Video de Historia" },
                { url: "https://www.youtube.com/embed/yyyyyy", title: "" } // Título vacío
            ],
            social: [
                { platform: "facebook", url: "https://www.facebook.com/univo.primaria" },
                { platform: "twitter", url: "https://twitter.com/univo_primaria" },
                { platform: "instagram", url: "https://www.instagram.com/univo.primaria" }
            ],
            id: "historia"
        }
        // ,
        // {
        //     title: "Misión",
        //     description: "Nuestra misión es fomentar el desarrollo académico...",
        //     images: [
        //         "/univo-servicio/primaria/../img/mission1.png"
        //     ],
        //     videos: [
        //         { url: "https://www.youtube.com/embed/zzzzzz", title: "Misión de UniVO" }
        //     ],
        //     social: [],
        //     id: "mision"
        // }
    ];

    // Referencia al contenedor principal
    const libretaContainer = document.querySelector(".libreta");

    // Generar contenido dinámicamente
    contenido.forEach(item => {
        const libretaSection = document.createElement("div");
        libretaSection.classList.add("libreta-item"); // Clase común para todos los items
        libretaSection.id = item.id; // Asignar ID único

        // Crear título
        const titleElement = document.createElement("h2");
        titleElement.textContent = item.title;

        // Crear descripción
        const descriptionDiv = document.createElement("div");
        descriptionDiv.classList.add("descripcion");
        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = item.description;
        descriptionDiv.appendChild(descriptionElement);

        // Crear imágenes
        const imageDiv = document.createElement("div");
        imageDiv.classList.add("imagenes");
        item.images.forEach(img => {
            const imgElement = document.createElement("img");
            imgElement.classList.add("img_libreta");
            imgElement.src = img;
            imgElement.alt = item.title;
            imageDiv.appendChild(imgElement);
        });

        // Crear videos
        const videoDiv = document.createElement("div");
        videoDiv.classList.add("videos");
        item.videos.forEach(video => {
            if (video.title) { // Solo muestra el título si está presente
                const videoTitle = document.createElement("h3");
                videoTitle.textContent = video.title;
                videoDiv.appendChild(videoTitle);
            }
            const iframe = document.createElement("iframe");
            iframe.width = "560";
            iframe.height = "315";
            iframe.src = video.url;
            iframe.frameborder = "0";
            iframe.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
            iframe.allowfullscreen = true;
            videoDiv.appendChild(iframe);
        });

        // Crear redes sociales
        const socialDiv = document.createElement("div");
        socialDiv.classList.add("redes-sociales");
        if (item.social.length > 0) {
            const socialLinks = document.createElement("p");
            socialLinks.innerHTML = "<strong>Redes Sociales:</strong><br>";
            item.social.forEach(social => {
                const socialLink = document.createElement("a");
                socialLink.href = social.url;
                socialLink.target = "_blank";
                socialLink.classList.add("contact-social");
                socialLink.innerHTML = `<i class="bi bi-${social.platform}"></i> ${social.platform.charAt(0).toUpperCase() + social.platform.slice(1)}`;
                socialLinks.appendChild(socialLink);
                socialLinks.appendChild(document.createElement("br"));
            });
            socialDiv.appendChild(socialLinks);
        }

        // Agregar todo al div principal de la sección
        libretaSection.appendChild(titleElement);
        libretaSection.appendChild(descriptionDiv);
        libretaSection.appendChild(imageDiv);
        libretaSection.appendChild(videoDiv);
        libretaSection.appendChild(socialDiv);

        // Insertar la nueva sección en el contenedor
        libretaContainer.appendChild(libretaSection);
    });
});
