document.addEventListener('DOMContentLoaded', function () {
    const contenido = [
        {
            title: "Objetivo",
            description: "Promover en los alumnos el desarrollo integral de sus capacidades, habilidades, actitudes y valores                éticos para la vida; así como, garantizar su participación responsable en el desarrollo científico,                tecnológico, cultural, político, económico y sustentable de la sociedad.",
            // images: [
            //     "/univservicio/primaria/../img/GEU2030-50.png",
            //     "/univseicio/primaria/../img/GEU2031-51.png"
            // ],
            // videos: [ // Desactivado
            //     { url: "https://www.youtube.com/embed/xxxxxx", title: "Video de Historia" },
            //     { url: "https://www.youtube.com/embed/yyyyyy", title: "" } // Título vacío
            // ],
            // social: [
            //     { platform: "facebook", url: "https://www.facebook.com/univo.primaria" },
            //     { platform: "twitter", url: "https://twitter.com/univo_primaria" },
            //     { platform: "instagram", url: "https://www.instagram.com/univo.primaria" }
            // ],
            id: "historia"
        }
    ];

    // Referencia al contenedor principal
    const libretaContainer = document.querySelector(".libreta");

    // Generar contenido dinámicamente
    contenido.forEach(item => {
        const libretaSection = document.createElement("div");
        libretaSection.classList.add("libreta-item"); // Clase común para todos los items
        libretaSection.id = item.id; // Asignar ID único

        // Crear título (si existe)
        if (item.title) {
            const titleElement = document.createElement("h1");
            titleElement.textContent = item.title;
            libretaSection.appendChild(titleElement);
        }

        // Crear descripción (si existe)
        if (item.description) {
            const descriptionDiv = document.createElement("div");
            descriptionDiv.classList.add("descripcion");
            const descriptionElement = document.createElement("p");
            descriptionElement.textContent = item.description;
            descriptionDiv.appendChild(descriptionElement);
            libretaSection.appendChild(descriptionDiv);
        }

        // Crear imágenes (si existen)
        if (item.images && item.images.length > 0) {
            const imageDiv = document.createElement("div");
            imageDiv.classList.add("imagenes");
            item.images.forEach(img => {
                const imgElement = document.createElement("img");
                imgElement.classList.add("img_libreta");
                imgElement.src = img;
                imgElement.alt = item.title || "Imagen"; // Usar título o un valor por defecto
                imageDiv.appendChild(imgElement);
            });
            libretaSection.appendChild(imageDiv);
        }

        // Crear videos (si existen)
        if (item.videos && item.videos.length > 0) {
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
            libretaSection.appendChild(videoDiv);
        }

        // Crear redes sociales (si existen)
        if (item.social && item.social.length > 0) {
            const socialDiv = document.createElement("div");
            socialDiv.classList.add("redes-sociales");
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
            libretaSection.appendChild(socialDiv);
        }

        // Insertar la nueva sección en el contenedor
        libretaContainer.appendChild(libretaSection);
    });
});