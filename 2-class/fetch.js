//! Pedir informacion (GET)
fetch("https://randomuser.me/api/") //! recibe la URL a la que quieres hacer la solicitud
    .then( response => {
        // Verificar si la solicitud fue exitosa
        if (!response.ok) {
            if(response.status === 404){
                throw new Error('Error Not Found 404')
            } else{
                throw new Error('Desconocido')
            }
        }
        console.log(response)
        return response.json(); //!! Transformar la respuesta en JSON
    })
    .then(data => {
        console.log(data);// Manejar los datos recibidos
        nombre= data.results[0].name.first
        apellido= data.results[0].name.last
        titulo= data.results[0].name.title
        nombreCompleto = titulo + ' ' + nombre + ' ' + apellido 
        console.log(nombreCompleto)
    })
    .catch(error => {
        console.error("Hubo un problema con la peticion Fetch: ", error);// Manejar errores
    })

//! Guardar informacion, actualizar informacion o enviar informacion (POST)
fetch("https://httpbin.org/post", {
    method: 'POST', // Metodo HTTP para enviar datos y gaurdarlos o actualizar
    headers: {
        'Conent-Type': 'application/json'
    },
    body: JSON.stringify({
        nombre: 'Ejemplo',
        mensaje: 'Esto es un test'
      }) // DAtos que envio en fromato JSON
}) //! recibe la URL a la que quieres hacer la solicitud
    .then( response => {
        // Verificar si la solicitud fue exitosa
        if (!response.ok) {
            throw new Error('Error Not Found 404')
        }
        console.log(response)
        return response.json(); //!! Transformar la respuesta en JSON
    })
    .then(data => {
        console.log(data);// Manejar los datos recibidos
    })
    .catch(error => {
        console.error("Hubo un problema con la peticion Fetch: ", error);// Manejar errores
    })

/*
    fetch verbos
    
    GET = traer informacion (objetos u objeto)
    POST = Guardar o actualizar datos de un objeto
    PUT = actualizar un o algunos atributos especificos de un objeto
    DELETE = te elimina un objeto

*/