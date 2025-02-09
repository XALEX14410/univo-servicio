document.addEventListener('DOMContentLoaded', function () {
    const contenido = [
        {
            title: "Historia",
            description: [
                "La Universidad del Valle de Orizaba extiende su oferta educativa iniciando el Nivel Medio Superior, es así como nace el Bachillerato Valle de Orizaba en modalidad escolarizada, el cual obtiene el reconocimiento de validez oficial ante la Dirección General de Educación Media Superior y Superior del Estado de Veracruz con fecha 21 de junio de 1995 y clave 30PBH0423T iniciando sus actividades el 28 de agosto de 1995.",
                "Posteriormente y con la finalidad de apoyar a quienes tienen interés de cursar el bachillerato y no están en posibilidad de asistir diariamente inicia Bachilleres del Valle de Orizaba en modalidad mixta, con reconocimiento de validez oficial ante la Dirección General de Educación Media Superior y Superior del Estado de Veracruz de fecha 03 de mayo de 2002 y clave 30PBH0506B.",
                "A la fecha, nuestro bachillerato tanto en la modalidad escolarizada como en la modalidad mixta, sigue trabajando ininterrumpidamente preparando a los estudiantes que cursan este nivel para incorporarlos de manera eficiente a la vida social, a los estudios superiores y al ámbito productivo en caso necesario."
            ],
            id: "historia"
        }
    ];

    const libretaContainer = document.querySelector(".libreta");

    contenido.forEach(item => {
        const libretaSection = document.createElement("div");
        libretaSection.classList.add("libreta-item");
        libretaSection.id = item.id;

        if (item.title) {
            const titleElement = document.createElement("h1");
            titleElement.textContent = item.title;
            libretaSection.appendChild(titleElement);
        }

        if (item.description && Array.isArray(item.description)) {
            const descriptionDiv = document.createElement("div");
            descriptionDiv.classList.add("descripcion");

            item.description.forEach(paragraph => {
                const descriptionElement = document.createElement("p");
                descriptionElement.textContent = paragraph;
                descriptionDiv.appendChild(descriptionElement);
            });

            libretaSection.appendChild(descriptionDiv);
        }

        libretaContainer.appendChild(libretaSection);
    

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