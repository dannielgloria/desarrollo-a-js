let promesaAPI = new Promise((resolve, reject) => {
    // Tarea/Funcion asincrona 
    // (ejemplificamos que nos conctamos a un Servidor por medio de una API)
    let apiSimulador = Math.random() <0.5; // Estado de tarea procesando 

    if (apiSimulador) {
        resolve("www.google.com"); // Estado de tarea resuelta
    } else {
        reject("Error 500") // Estado de tarea erronea
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


// Manejo de promesa // Asi mero se usa/consume una promesa
promesaAPI.then(response =>{
    console.log("Exito: ", response);
}).catch(error => {
    console.error("Falló: ", error);  
})



