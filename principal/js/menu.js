// Función para agregar elementos al menú de navegación
function agregarElementoMenu(icono, texto, enlace, submenus = [], target = null) {
    const navList = document.getElementById("nav_list");

    // Crear un nuevo elemento <li>
    const li = document.createElement("li");

    // Crear el enlace principal
    const a = document.createElement("a");
    a.href = enlace || "#";
    a.innerHTML = `<i class='${icono}'></i> ${texto}`;
    if (target) a.target = target; // Asignar target si está definido
    li.appendChild(a);

    // Si hay submenús, crear y agregar
    if (submenus.length > 0) {
        const ulSubmenu = document.createElement("ul");
        ulSubmenu.classList.add("submenu");

        submenus.forEach(submenu => {
            const liSubmenu = document.createElement("li");
            const aSubmenu = document.createElement("a");

            aSubmenu.href = submenu.enlace || "#";
            aSubmenu.textContent = submenu.texto;
            if (submenu.target) aSubmenu.target = submenu.target; // Asignar target si está definido para submenús

            liSubmenu.appendChild(aSubmenu);

            // Si este submenú tiene un `submenu_2`
            if (submenu.submenus && submenu.submenus.length > 0) {
                const ulSubmenu2 = document.createElement("ul");
                ulSubmenu2.classList.add("submenu_2");

                submenu.submenus.forEach(submenu2 => {
                    const liSubmenu2 = document.createElement("li");
                    const aSubmenu2 = document.createElement("a");

                    aSubmenu2.href = submenu2.enlace || "#";
                    aSubmenu2.textContent = submenu2.texto;
                    if (submenu2.target) aSubmenu2.target = submenu2.target; // Asignar target si está definido para submenú 2

                    liSubmenu2.appendChild(aSubmenu2);
                    ulSubmenu2.appendChild(liSubmenu2);
                });

                liSubmenu.appendChild(ulSubmenu2);
            }

            ulSubmenu.appendChild(liSubmenu);
        });

        li.appendChild(ulSubmenu);
    }

    // Agregar el <li> al menú principal
    navList.appendChild(li);
}

// Base para las rutas
const inicio = "/univo-servicio/principal";

const basePath = "/univo-servicio/principal/src";



// Debes usar las comillas invertidas (`` también llamadas backticks) en lugar de las comillas simples (') o dobles (") 
// en ciertas situaciones porque estas te permiten utilizar una característica de JavaScript llamada interpolación de cadenas. 
// Esto es especialmente útil cuando necesitas incluir variables o expresiones dentro de un texto.
// Diferencia principal

//     Comillas simples (') y comillas dobles (") solo permiten cadenas de texto planas:

            // const nombre = "Juan";
            // const saludo = "Hola, nombre"; // Esto no funciona como esperas
            // console.log(saludo); // "Hola, nombre"

// Comillas invertidas (``) te permiten usar plantillas de texto dinámicas con variables o expresiones:

            // const nombre = "Juan";
            // const saludo = `Hola, ${nombre}`; // Esto inserta la variable "nombre" en la cadena
            // console.log(saludo); // "Hola, Juan"


// Opciones del menú
agregarElementoMenu(
    "", // Ícono
    "Inicio", // Texto
    `${inicio}`
);

agregarElementoMenu(
    "",
    "Nosotros",
    "#",
    [
        { texto: "Bienvenida", enlace: `${basePath}/nosotros/bienvenida.html` },
        { texto: "Misión − Visión", enlace: `${basePath}/nosotros/mision.html` },
        { texto: "Valores", enlace: `${basePath}/nosotros/valores.html` },
        { texto: "Directorio", enlace: `${basePath}/nosotros/directorio.html` }
    ]
);
agregarElementoMenu(
    "",
    "Oferta educativa",
    "#",
    [
        { texto: "Planteles", enlace: `${basePath}/oferta_edu/planteles.html` },
    ]
);
agregarElementoMenu(
    "",
    "Servicios Estudiantiles",
    "#",
    [
        { texto: "Becas", enlace: `${basePath}/servicio/beca`},
        { texto: "Servicio social", enlace:  `${basePath}/servicio/servicio_social` },
        { texto: "Titulación", enlace: `${basePath}/servicio/titulacion` },
        { texto: "Vinculación", enlace: `${basePath}/servicio/vinculacion` },
        { texto: "Cultural", enlace:  `${basePath}/servicio/cultura` },
        { texto: "Deportivo", enlace:  `${basePath}/servicio/deportivo` },
        { texto: "Servicios bibliotecarios", enlace: `${basePath}/servicio/servicios_bibliotecarios`  },
        { texto: "Sistema médico", enlace: `${basePath}/servicio/servicio_medico` }
        
    ]
);

agregarElementoMenu(
    "",
    "Foro UniVO",
    `#`

);


// agregarElementoMenu(
//     "",
//     "Servicios Estudiantiles",
//     "#",
//     [
//         { texto: "Servicio", enlace: "#" },
//         {
//             texto: "Becas",
//             enlace: "#",
//             submenus: [
//                 { texto: "Tipos de Becas", enlace: `${basePath}/becas/Convocatoria Beca Primaria.pdf` },
//                 { texto: "Convocatoria", enlace: `${basePath}/becas/Convocatoria Beca Primaria.pdf` }
//             ]
//         }
//     ]
// );

agregarElementoMenu(
    "",
    "Contacto",
    `${basePath}/contacto/index.html`
);
