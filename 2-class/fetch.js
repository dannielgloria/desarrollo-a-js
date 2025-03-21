//? Pedir informacio mediante el verbo (GET)
fetch("https://rickandmortyapi.com/api/character/10") //? Recibe la direccion o URL que consumira el servico o recurso externo
    .then( response =>{
        if (!response.ok){
            if (response.status === 404) {
                throw new Error('Error Not found 404')
            } else {
                throw new Error("Error desconocido")
            }
        }
        //console.log(response)
        return response.json() // Identifica el cuerpo de la respuesta
    })
    .then( data =>{
        console.log(data)
    })
    .catch(error => {
        console.error("Hubo un problema con la peticion Fetch: ", error) // Manejador de errores
    })

//! Guardar informacion, actualizar informacion o enviar informacion (POST)
fetch("https://httpbin.org/post", 
    {
        method:'POST', // Metodo HTTP para enviar datos
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                nombre: "Daniel",
                mensaje: "Prueba"
            }
        )// Datos en formato JSON a enviar
    })
    .then( response =>{
        if (!response.ok){
            // Verifica si la solicitud fue exitosa
            if (response.status === 404) {
                throw new Error('Error Not found 404')
            } else {
                throw new Error("Error desconocido")
            }
        }
        return response.json() // Identifica el cuerpo de la respuesta
    })
    .then( data =>{
        console.log("Se actualizo correctamente la informacion enviada")
    })
    .catch(error => {
        console.error("Hubo un problema con la peticion Fetch: ", error) // Manejador de errores
    })

/*
    fetch verbos
    
    GET = traer informacion (objetos u objeto)
    POST = Guardar o actualizar datos de un objeto
    PUT = actualizar un o algunos atributos especificos de un objeto
    DELETE = te elimina un objeto

*/