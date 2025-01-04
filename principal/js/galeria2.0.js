let currentIndex = 0;
let autoChangeInterval;

function changeImage(thumbnail) {
    const mainImg = document.getElementById('main-img');
    mainImg.src = thumbnail.src;
    mainImg.alt = thumbnail.alt;

    // Actualizar el índice actual según el thumbnail seleccionado
    const thumbnails = document.querySelectorAll('.thumbnail img');
    currentIndex = Array.from(thumbnails).indexOf(thumbnail);

    // Reiniciar el temporizador
    resetAutoChangeImage();
}

function autoChangeImage() {
    const thumbnails = document.querySelectorAll('.thumbnail img');
    const mainImg = document.getElementById('main-img');

    if (thumbnails.length === 0) return;

    // Incrementar el índice y reiniciarlo si se supera el número de thumbnails
    currentIndex = (currentIndex + 1) % thumbnails.length;

    // Cambiar la imagen principal
    mainImg.src = thumbnails[currentIndex].src;
    mainImg.alt = thumbnails[currentIndex].alt;
}

// Función para reiniciar el temporizador
function resetAutoChangeImage() {
    clearInterval(autoChangeInterval); // Detener el temporizador actual
    autoChangeInterval = setInterval(autoChangeImage, 3000); // Reiniciar el temporizador
}

// Cambiar la imagen automáticamente cada 3 segundos
autoChangeInterval = setInterval(autoChangeImage, 3000);
