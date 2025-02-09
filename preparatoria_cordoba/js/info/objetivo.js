document.addEventListener('DOMContentLoaded', function () {
    const contenido = [
        {
            title: "Objetivo",
            list: [
                { name: "", description: "Ofrecer una cultura general básica, que comprenda aspectos de la ciencia, de las humanidades y de la técnica, a partir de la cual se adquieran los elementos fundamentales para la construcción de nuevos conocimientos.", delay: 200 },
                { name: "", description: "Proporcionar los conocimientos, los métodos, las técnicas y los lenguajes necesarios para ingresar a estudios superiores y desempeñarse en éstos de manera eficiente..", delay: 250 },
                { name: "", description: "Desarrollar las habilidades y actitudes esenciales para la realización de una actividad productiva socialmente útil.", delay: 300 },
                
            ],
            id: "decalogo-valores"
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

        if (item.list && item.list.length > 0) {
            const listElement = document.createElement("ul");
            listElement.classList.add("lista-en-libreta");
            item.list.forEach(listItem => {
                const liElement = document.createElement("li");
                liElement.setAttribute("data-aos", "fade-up");
                liElement.setAttribute("data-aos-delay", listItem.delay);

                const nameElement = document.createElement("p");
                nameElement.classList.add("azul");
                nameElement.textContent = listItem.name;

                const descElement = document.createElement("p");
                descElement.textContent = listItem.description;

                liElement.appendChild(nameElement);
                liElement.appendChild(descElement);
                listElement.appendChild(liElement);
            });
            libretaSection.appendChild(listElement);
        }

        libretaContainer.appendChild(libretaSection);
    });
});
