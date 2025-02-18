document.getElementById('pwd').addEventListener('input', function(event) {
    const valor = event.target.value;
    //const mensaje = valor.length < 8 ? "La contraseña debe tener almenos 8 caracteres." : "";
    
    if (valor.length < 8) {
        mensaje = "La contraseña debe tener almenos 8 caracteres." 
    }else{
        mensaje = ""
    }
    document.getElementById('errorMessage').textContent = mensaje
})

const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(form)

    fetch('/api/subir_archivo',{
        method: "POST",
        body: formData
    })
    .then(res => res.json())
    .then(data => console.log('Archivo sibido correctamente', data))
    .catch(error => console.error('Error al subir el archivo', error))
})