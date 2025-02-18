document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envio del formulario

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;

    const validacion = validarDatos(email,nombre)
    if (validacion === true) {
        console.log('Bienvenid@ a la pagina: ', nombre, " tu email es :", email);
    } else {
        console.error('Acceso denegado')
    }
    

    
})

function validarDatos(email,nombre) {
    if (nombre===""|| email==="") {
        alert("Ingresa porfavor datos al formulario")
        return false
    } else {
        alert("Formulario enviado")
        return true
    }
}