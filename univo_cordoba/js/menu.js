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
const inicio = "/univo-servicio/univo";

const basePath = "/univo-servicio/principal/src";
const other_basePath = "/univo-servicio/principal/src";



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


            // <!-- <li><a href="#">VO Radio</a></li> -->

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
        { texto: "Primaria Particular Valle de Orizaba", enlace: `${basePath}/oferta_edu/planteles.html` },
        { texto: "Secundaria Valle de Orizaba", enlace: `${basePath}/oferta_edu/planteles.html` },
        { texto: "Bachilleres Valle de Orizaba", enlace: `${basePath}/oferta_edu/planteles.html` },
        { texto: "Licenciatura", enlace: `${basePath}/oferta_edu/planteles.html` },
        { texto: "Posgrado", enlace: `${basePath}/oferta_edu/planteles.html` },
        { texto: "Educación continua", enlace: `${basePath}/oferta_edu/planteles.html` },
        { texto: "Centro de idiomas extranjeros", enlace: `${basePath}/oferta_edu/planteles.html` },
        { texto: "Univo con el adulto mayor", enlace: `${basePath}/oferta_edu/planteles.html` },

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
        { texto: "Deportivo", enlace:  `${basePath}/servicio/cultura` },
        { texto: "Servicios bibliotecarios", enlace: `${basePath}/servicio/servicios_bibliotecarios`  },
        { texto: "Sistema médico", enlace: `${basePath}/servicio/servicio_medico` }
        
    ]
);

agregarElementoMenu(
    "",
    "Foro UniVO",
    `#`

);


agregarElementoMenu(
    "",
    "Accesos",
    "#",
    [
        {
            texto: "Sise",
            enlace: "#",
            submenus: [
                { texto: "Alumnos", enlace: "https://sise.univo.edu.mx/SISEWEB/WebBach/Autenticacion.php", target: "_blank" },
                { texto: "Docentes UniVO", enlace: "https://sise.univo.edu.mx/WEB2/SISE/WebDocentes/", target: "_blank" }
            ]
        },
        { texto: "Correo", enlace: "https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.google.com%2F&ec=GAZAmgQ&hl=es-419&ifkv=ARpgrqdu_oyirLljRt2jAs9hNjxwoW1B0TxQzvnbT1fRPPCsFtySg7BTKvvnYH782GSqegXSWY0o&passive=true&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S555486071%3A1726589019011114&ddm=0" }
    ]
);

agregarElementoMenu(
    "",
    "UniVO Orizaba",
    `#`

);

agregarElementoMenu(
    "",
    "Contacto",
    `${basePath}/contacto/index.html`
);