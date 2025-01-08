// document.addEventListener("DOMContentLoaded", function() {
//     // Aquí se añade la clase centrado--oculto una vez que la página se ha cargado
//     const loader = document.querySelector(".centrado");
//     loader.classList.add("centrado--oculto");

//     // También puedes remover la clase `hidden` del body para permitir el scroll
//     document.body.classList.remove("hidden");
// });
// window.addEventListener("load", function() {
//     // Aquí se añade la clase centrado--oculto una vez que todo ha cargado
//     const loader = document.querySelector(".centrado");
//     loader.classList.add("centrado--oculto");

//     // También puedes remover la clase `hidden` del body para permitir el scroll
//     document.body.classList.remove("hidden");
// });


document.addEventListener("DOMContentLoaded", function () {
    const loader = document.querySelector(".centrado");
    const progressBar = document.querySelector(".uk-progress");

    if (progressBar) {
        let progress = 0;

        // Simulación de progreso basado en un intervalo (opcional, para animación visual)
        const interval = setInterval(() => {
            progress += 10; // Incrementa el progreso (puedes ajustar esto según tus necesidades)
            progressBar.value = progress;

            // Detén el intervalo cuando alcance el máximo
            if (progress >= 100) {
                clearInterval(interval);
            }
        }, 200); // Intervalo en milisegundos
    }

    window.addEventListener("load", function () {
        // Oculta el loader una vez que la página ha cargado
        loader.classList.add("centrado--oculto");
        document.body.classList.remove("hidden");

        if (progressBar) {
            // Asegúrate de que el progreso esté al 100% al terminar de cargar
            progressBar.value = 100;
        }
    });
});
