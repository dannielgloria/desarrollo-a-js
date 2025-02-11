//! Pedir informacion (GET)
axios.get('https://randomuser.me/api/')
    .then(response => {
        console.log(response.data)
        nombre= response.data.results[0].name.first
        apellido= response.data.results[0].name.last
        titulo= response.data.results[0].name.title
        nombreCompleto = titulo + ' ' + nombre + ' ' + apellido 
        console.log(nombreCompleto)
    })
    .catch(error =>{
        console.error('Error: ',error);
    }
    )

//! Guardar informacion, actualizar informacion o enviar informacion (POST)
axios.post('https://httpbin.org/post',
    {
        nombre: 'Ejemplo',
        mensaje: 'Esto es un test'
      })
    .then(response => {console.log(response.data)})
    .catch(error =>{console.error('Error: ',error);});