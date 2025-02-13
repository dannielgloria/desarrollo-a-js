fetch('https://api.ejemplo.com/algo')
    .then( response => response.json())// Transforma la respuesta en JSON   
    .then(data => console.log(data))
    .catch(error => console.error(error))

axios.get('https://randomuser.me/api/')
    .then(response => {console.log(response.data)})
    .catch(error =>{console.error(error);})

response = {
    data: {
        message: "not foud"
    },
    status: {
        value:"error",
        code: 404
    },
    headers: 'json'
}

response = "error"

function suma(a,b) {
    return a+b
}