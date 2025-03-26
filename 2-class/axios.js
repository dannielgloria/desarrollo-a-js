//? Pedir informacion (GET)
axios.get("https://rickandmortyapi.com/api/character/10000")
    .then( response => {
        console.log(response.data)
    })
    .catch(error=>{
        console.error('Error: ', error.message)
    })

//! Guardar informacion (POST)
axios.post("https://httpbin.org/post",
    {
        nombre: "Daniel",
        mensaje: "Prueba"
    })
    .then( response => {console.log("Se actualizo correctamente la informacion enviada EstatusCode: ", response.status)})
    .catch(error=>{console.error('Error: ', error.message)})