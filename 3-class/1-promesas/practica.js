
let promesaAPI = new Promise((resolve, reject)=>{
    // Tarea o funcion asincrona
    // Ejemplificacion de que nos conectamos a un Servidor por medio de una API
    let apiSimulada = Math.random() <0.5; // Simular el procesamiento y resolve o reject

    let responseOk = { status: true,
        message:"www.google.com"
    }

    let responseError = { status: false,
        message:"Error 500"
    }

    if (apiSimulada) {
        resolve(responseOk) // Estado de tarea resuelta
    } else {
        reject(responseError) // Estado de tarea erronea
    }
})
/* Una promesa devuelve de forma interna un objeto
este si es verdadero sera identificado como un then
 si es falso un atributo avisara a catch que es un error

si es correcto manda algo similar a este objeto
response = { status: true,
    message:"www.google.com"
}

si es falso o erroneo manda algo similar a este otro objeto
con la finalidad de que lo cache el catch
response = { status: false,
    message:"Error 500"
}
*/

// Manejo de promesa o consumo de una promesa
promesaAPI.then(response => {
    console.log("Exito: ", response)
}).catch( error => {
    console.error("Falló: ", error)
})