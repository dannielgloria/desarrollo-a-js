async function calcularEstadoCuenta(idUsuario) {
    // Contendra promesas por lo tanto trabajara con respuestas de promesas
    try { // va a correr el codigo siempre y cuando no tenga error
        const dataUser = await fetch(`https://santander.com/api/dataUser=${idUsuario}`) // con await ESPERO a que el llamado a promesa responda
        const data = await dataUser.json() // con await ESPERO a que el llamado a promesa responda
        const impuestos = await calculoImpuestos
        const edoAcount = data.ingresos + data.egresos + data.intereses + impuestos
        return edoAcount

    } catch (error) {  // cacha cualquier error de nuestras promesas invocadas
        console.log('Error al obtener deuda: ', error)
        return null
    }
    
}


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