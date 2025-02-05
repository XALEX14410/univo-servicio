const grados = [
    {
        nombre: "Primer Grado",
        numero: "1°",
        formacionAcademica: ["Lengua materna", "Matemáticas", "Conocimiento del medio", "Inglés"],
        desarrolloPersonal: ["Educación Física", "Educación Socioemocional", "Artes"]
    },
    {
        nombre: "Segundo Grado",
        numero: "2°",
        formacionAcademica: ["Lengua materna", "Matemáticas", "Conocimiento del medio", "Inglés"],
        desarrolloPersonal: ["Educación Física", "Educación Socioemocional", "Artes"]
    },
    {
        nombre: "Tercer Grado",
        numero: "3°",
        formacionAcademica: ["Español", "Matemáticas", "Ciencias Naturales", "La Entidad Donde Vivo", "Formación Cívica y Ética", "Educación Física", "Educación Artística", "Educación Socioemocional"],
        extracurriculares: ["Computación", "Inglés"]
    },
    {
        nombre: "Cuarto Grado",
        numero: "4°",
        formacionAcademica: ["Español", "Matemáticas", "Ciencias Naturales", "Historia", "Geografía", "Formación Cívica y Ética", "Educación Física", "Educación Artística", "Educación Socioemocional"],
        extracurriculares: ["Computación", "Inglés"]
    },
    {
        nombre: "Quinto Grado",
        numero: "5°",
        formacionAcademica: ["Español", "Matemáticas", "Ciencias Naturales", "Historia", "Geografía", "Formación Cívica y Ética", "Educación Física", "Educación Artística", "Educación Socioemocional"],
        extracurriculares: ["Computación", "Inglés"]
    },
    {
        nombre: "Sexto Grado",
        numero: "6°",
        formacionAcademica: ["Español", "Matemáticas", "Ciencias Naturales", "Historia", "Geografía", "Formación Cívica y Ética", "Educación Física", "Educación Artística", "Educación Socioemocional"],
        extracurriculares: ["Computación", "Inglés"]
    }
];

const container = document.querySelector(".grid-container-escolar");

grados.forEach(grado => {
    const divGrado = document.createElement("div");
    divGrado.classList.add("grado-escolar");
    
    divGrado.innerHTML = `
        <div class="titulo-grado">
            <h2>${grado.nombre}</h2><p class="grado">${grado.numero}</p>
        </div>
        <div class="seccion-formacion">
            <h3 class="titulo-seccion">Formación Académica:</h3>
            <ul class="lista-asignaturas">
                ${grado.formacionAcademica.map(asignatura => `<li class="asignatura">${asignatura}</li>`).join("")}
            </ul>
        </div>
        ${grado.desarrolloPersonal ? `
        <div class="seccion-desarrollo">
            <h3 class="titulo-seccion">Desarrollo Personal y Social:</h3>
            <ul class="lista-asignaturas">
                ${grado.desarrolloPersonal.map(asignatura => `<li class="asignatura">${asignatura}</li>`).join("")}
            </ul>
        </div>` : ""}
        ${grado.extracurriculares ? `
        <div class="seccion-extracurricular">
            <h3 class="titulo-seccion">Extracurriculares:</h3>
            <ul class="lista-asignaturas">
                ${grado.extracurriculares.map(asignatura => `<li class="asignatura">${asignatura}</li>`).join("")}
            </ul>
        </div>` : ""}
    `;

    container.appendChild(divGrado);
});
