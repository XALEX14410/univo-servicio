document.addEventListener('DOMContentLoaded', function () {
    const contenido = [
        {
            title: "Decálogo de Valores",
            list: [
                { name: "Ser comprensivo", description: "Reconocer los distintos factores que influyen en el comportamiento de nuestros estudiantes, nuestro personal y demás personas con quienes interactuamos, profundizando en el significado de cada factor y en su interrelación; y ayudando a los demás a hacer lo mismo.", delay: 200 },
                { name: "Ser honesto", description: "Aseguramos a que se otorgue a cada quien lo justo como retribución a su dedicación y empeño a la tarea encomendada hablando siempre con la verdad.", delay: 250 },
                { name: "Ser incluyente", description: "Formar un todo con las partes buscando un resultado sinergético en beneficio de nuestra comunidad y de sus integrantes.", delay: 300 },
                { name: "Ser justo", description: "Esforzamos continuamente para dar a los demás lo que les es debido, de acuerdo con el cumplimiento de sus deberes y de acuerdo con sus derechos como personas.", delay: 350 },
                { name: "Ser leal", description: "Aceptar los vínculos implícitos en su adhesión a otros amigos, jefes, familiares, patria, instituciones, etc., para reforzar y proteger a lo largo del tiempo el conjunto de valores que representan.", delay: 400 },
                { name: "Ser libre", description: "Respetar las ideologías y formas de pensamiento de cada uno de los miembros de nuestra organización.", delay: 450 },
                { name: "Ser íntegro", description: "Respetar los compromisos contraídos aun en menoscabo de la utilidad en cualquiera de sus manifestaciones sin dar ni pedir algo más allá de lo explícitamente establecido.", delay: 500 },
                { name: "Ser responsable", description: "Asumir las consecuencias de nuestros actos, resultado de las decisiones que tomemos o aceptemos.", delay: 550 },
                { name: "Ser solidario", description: "Estar dispuesto siempre a compartir los sucesos que acontecen en el transcurso de nuestras vidas como símbolo de una estrecha relación de apoyo moral y material saludable entre los humanos.", delay: 600 },
                { name: "Ser tolerante", description: "No menospreciar ni exhibir a nadie y dar a todos el justo valor y credibilidad, permitiendo exponer sus puntos de vista y sugerencias, lo cual razonablemente se acepta o rechaza sin herir ni subestimar a alguien.", delay: 650 }
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
