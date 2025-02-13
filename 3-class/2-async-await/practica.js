async function calcularDeuda(idUsuario) {
    // contiene promesas/ trabaja con respuestas de promesas 
    try { // va a correr el codigo siempre y cuando non tenga error
        const response = await axios.get(`https://santander.com/api/dataUser={idUsuario}`) // con await ESPERO a que el llamado a promesa responda
        const data = await response.json();
        const deuda = data.impuestos + data.prestamoValue + data.comision
        console.log("Tu deuda es de :", deuda)
    } catch (error) { // cacha cualquier error de nuestras promesas invocadas
        console.log('Error al obtener deuda: ', error)
    }

    // hacer otra tarea
    
}


calcularDeuda('124123')

