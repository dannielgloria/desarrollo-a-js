fetch('https://api.ejemplo.com/algo')
    .then( response => response.json())// Transforma la respuesta en JSON   
    .then(data => console.log(data))
    .catch(error => console.error(error))

axios.get('https://randomuser.me/api/')
    .then(response => {console.log(response.data)})
    .catch(error =>{console.error(error);})


// promesa poco cotidiana pero es un ejemplo de uso
let conciliacion = new Promise((resolve, reject) => {
    
    let ids = getUsuarios()
    let data = calculoIntereses(ids)
    let totales= deudaByUserId(ids)
    let response = calculoDeConciliacion(data, totales)
    
    if (response) {
            resolve(response); // Estado de tarea resuelta
    } else {
            reject(error) // Estado de tarea erronea
    }
})