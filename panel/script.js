document.getElementById('addDataForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la forma tradicional

    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let telefono = document.getElementById('telefono').value;

    if (nombre && email && telefono) {
        // Mostrar los datos ingresados
        document.getElementById('mensaje').textContent = `Datos agregados: 
            Nombre: ${nombre}, 
            Email: ${email}, 
            Teléfono: ${telefono}`;
        document.getElementById('mensaje').style.color = 'green'; // Mensaje de éxito
    } else {
        document.getElementById('mensaje').textContent = 'Por favor complete todos los campos';
        document.getElementById('mensaje').style.color = 'red'; // Mensaje de error
    }
});
