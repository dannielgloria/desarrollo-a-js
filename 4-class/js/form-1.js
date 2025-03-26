document.getElementById('miFormulario').addEventListener('submit', function(event){
    logicaFormulario(event)
})

function logicaFormulario(event) {
    event.preventDefault(); // Previene el envio del formulario

    const nombre = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const validacion = validarDatos(nombre,email)
    if (validacion === true) {
        console.log('Bienvenid@ a la pagina: ', nombre, " tu email es :", email)
    } else {
        console.error('Acceso denegado')
    }

}

function validarDatos(name,email) {
    if (name===""||email==="") {
        alert("Ingresa porfavor datos en el formulario")
        return false
    } else {
        alert("Formulario Enviado")
        return true
    }
}