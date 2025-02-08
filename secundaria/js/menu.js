
document.addEventListener("DOMContentLoaded", function () {
    // Detectar y agregar imágenes al logo-container
    const logoContainer = document.querySelector(".logo-container");
    if (logoContainer && !logoContainer.querySelector("img")) {
        logoContainer.innerHTML = `
            <img src="/univo-servicio/secundaria/img/logo_secundaria.png" alt="Logo escolar" class="logo" id="logo1">
            <a href="/univo-servicio/principal/index.html"><img src="./img/GEU2030-50.png" alt="Logo de la Empresa" class="logo" id="logo2"></a>
        `;
    }

    // Detectar y agregar imágenes al logo-container_max
    const logoContainerMax = document.querySelector(".logo-container_max");
    if (logoContainerMax && !logoContainerMax.querySelector("img")) {
        logoContainerMax.innerHTML = `
             <img src="/univo-servicio/secundaria//img/logo_secundaria.png" alt="Logo escolar" class="logo">
                <a href="/univo-servicio/principal/index.html"><img src="/univo-servicio/principal/img/GEU2030-50.png" alt="Logo de la Empresa" class="logo"></a>
        `;
    }
});

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
const inicio = "/univo-servicio/secundaria";

const basePath = "/univo-servicio/secundaria/src";



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
    "bi bi-house-fill", // Ícono
    "Inicio", // Texto
    `${inicio}`
);

agregarElementoMenu(
    "bx bxs-group",
    "Nosotros",
    "#",
    [
        { texto: "Historia", enlace: `${basePath}/nosotros/historia.html` },
        { texto: "Misión − Visión", enlace: `${basePath}/nosotros/mision.html` },
        { texto: "Objetivo", enlace: `${basePath}/nosotros/objetivos.html` },
        { texto: "Decálogo de Valores", enlace: `${basePath}/nosotros/valores.html` },
        { texto: "Directorio", enlace: `${basePath}/nosotros/directorio.html` },
        { texto: "Galería", enlace: `${basePath}/nosotros/galeria.html` }
    ]
);

agregarElementoMenu(
    "bx bxs-book",
    "Área Académica",
    "#",
    [
        { texto: "Plan de Estudios", enlace: `${basePath}/area_academica/plan.html` },
        { texto: "Club's", enlace: `${basePath}/area_academica/clubs.html` },
        { texto: "Admisión", enlace: `${basePath}/mantenimiento.html` }
    ]
);

agregarElementoMenu(
    "bx bxs-hard-hat",
    "Servicios",
    "#",
    [
        { texto: "Servicio", enlace: "#" },
        {
            texto: "Becas",
            enlace: "#",
            submenus: [
                { texto: "Tipos de Becas", enlace: `${basePath}/becas/Convocatoria Beca secundaria.pdf` },
                { texto: "Convocatoria", enlace: `${basePath}/becas/Convocatoria Beca secundaria.pdf` }
            ]
        },
        {
            texto: "Vinculación",
            enlace: "#",
            submenus: [
                { texto: "Educación cotidiana", enlace: "https://www.univo.edu.mx/web/vinculacion/vinculacion.php#educacion-continua" },
                { texto: "Convenios", enlace: "https://www.univo.edu.mx/web/vinculacion/vinculacion.php#convenios" }
            ]
        }
    ]
);

agregarElementoMenu(
    "bi bi-person-circle",
    "Accesos",
    "#",
    [
        {
            texto: "Sise",
            enlace: "#",
            submenus: [
                { texto: "Alumnos", enlace: "https://sise.univo.edu.mx/SISEWEB/WebSecundaria/SiseSecundaria/Autenticacion.php", target: "_blank" },
                { texto: "Docentes UniVO", enlace: "https://sise.univo.edu.mx/WEB2/SISE/DocentesSecundaria/Autenticacion.php", target: "_blank" }
            ]
        },
        { texto: "Correo", enlace: "https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.google.com%2F&ec=GAZAmgQ&hl=es-419&ifkv=ARpgrqdu_oyirLljRt2jAs9hNjxwoW1B0TxQzvnbT1fRPPCsFtySg7BTKvvnYH782GSqegXSWY0o&passive=true&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S555486071%3A1726589019011114&ddm=0" }
    ]
);

agregarElementoMenu(
    "bi bi-telephone-forward-fill",
    "Contacto",
    `${basePath}/contactos/index.html`
);
