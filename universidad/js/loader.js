// document.addEventListener("DOMContentLoaded", function() {
//     // Aquí se añade la clase centrado--oculto una vez que la página se ha cargado
//     const loader = document.querySelector(".centrado");
//     loader.classList.add("centrado--oculto");

//     // También puedes remover la clase `hidden` del body para permitir el scroll
//     document.body.classList.remove("hidden");
// });
window.addEventListener("load", function() {
    // Aquí se añade la clase centrado--oculto una vez que todo ha cargado
    const loader = document.querySelector(".centrado");
    loader.classList.add("centrado--oculto");

    // También puedes remover la clase `hidden` del body para permitir el scroll
    document.body.classList.remove("hidden");
});