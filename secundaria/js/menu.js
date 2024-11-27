// Función para agregar elementos al menú de navegación
function agregarElementoMenu(icono, texto, enlace, submenus = []) {
    const navList = document.getElementById("nav_list");

    // Crear un nuevo elemento <li>
    const li = document.createElement("li");

    // Crear el enlace principal
    const a = document.createElement("a");
    a.href = enlace || "#";
    a.innerHTML = `<i class='${icono}'></i> ${texto}`;
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


// Opciones del menú
agregarElementoMenu(
    "bi bi-house-fill", // Ícono
    "Inicio", // Texto
    "/univo-servicio/secundaria/"
);

agregarElementoMenu(
    "bx bxs-group",
    "Nosotros",
    "#",
    [
        { texto: "Historia", enlace: "/univo-servicio/secundaria/nosotros/historia.html" },
        { texto: "Misión − Visión", enlace: "/univo-servicio/secundaria/nosotros/mision.html" },
        { texto: "Objetivo", enlace: "/univo-servicio/secundaria/nosotros/objetivos.html" },
        { texto: "Decálogo de Valores", enlace: "/univo-servicio/secundaria/nosotros/valores.html" },
        { texto: "Directorio", enlace: "/univo-servicio/secundaria/nosotros/directorio.html" },
        { texto: "Galería", enlace: "/univo-servicio/secundaria/nosotros/galeria.html" }
    ]
);

agregarElementoMenu(
    "bx bxs-book",
    "Área Académica",
    "#",
    [
        { texto: "Plan de Estudios", enlace: "/univo-servicio/secundaria/area_academica/plan.html" },
        { texto: "Club's", enlace: "/univo-servicio/secundaria/area_academica/clubs.html" },
        { texto: "Admisión", enlace: "/univo-servicio/secundaria/mantenimiento.html" }
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
                { texto: "Tipos de Becas", enlace: "/univo-servicio/secundaria/becas/Convocatoria Beca secundaria.pdf" },
                { texto: "Convocatoria", enlace: "/univo-servicio/secundaria/becas/Convocatoria Beca secundaria.pdf" }
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
                { texto: "Alumnos", enlace: "https://sise.univo.edu.mx/SISEWEB/WebSecundaria/SiseSecundaria/Autenticacion.php" },
                { texto: "Docentes UniVO", enlace: "https://sise.univo.edu.mx/WEB2/SISE/DocentesSecundaria/Autenticacion.php" }
            ]
        },
        { texto: "Correo", enlace: "https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.google.com%2F&ec=GAZAmgQ&hl=es-419&ifkv=ARpgrqdu_oyirLljRt2jAs9hNjxwoW1B0TxQzvnbT1fRPPCsFtySg7BTKvvnYH782GSqegXSWY0o&passive=true&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S555486071%3A1726589019011114&ddm=0" }
    ]
);

agregarElementoMenu(
    "bi bi-telephone-forward-fill",
    "Contacto",
    "/univo-servicio/secundaria/contactos/index.html"
);

// console.log("Elementos agregados al menú.");

