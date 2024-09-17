$(document).ready(function() {
    // Almacenar el texto original
    $('.galeria a').each(function() {
        $(this).data('original-text', $(this).find('.texto-imagen').text());
    });

    // Efecto opcional con jQuery
    $('.galeria a').hover(function() {
        // Cambiar el texto y aplicar el filtro
        $(this).find('.texto-imagen').text(`Ver más`);
        $(this).find('img').css('filter', 'grayscale(50%)');
    }, function() {
        // Restaurar el texto original y quitar el filtro
        var originalText = $(this).data('original-text');
        $(this).find('.texto-imagen').text(originalText);
        $(this).find('img').css('filter', 'none');
    });
});
