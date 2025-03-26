
//? USO COTIDIANO DE CONSUMO DE PROMESA

axios.get('https://randomiiiiuser.me/api/')
    .then( response => {
        console.log(response.data);
    })
    .catch( error => {
        console.error(error);
    })

// promesa poco cotidiana pero es un ejemplo de uso
let calculoImpuestos = new Promise((resolve, reject) => {
    
    let ids = getCompras()
    let data = getIVA(ids.valor)
    let deuda = ids.interes_moratorio
    let response = calculoDeImpuestos(data,deuda)

    if (response){
        resolve(response)
    } else {
        reject("No se puede calcular los impuestos")
    }

})