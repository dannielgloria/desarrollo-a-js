
function procesarTexto(texto, funcionCallBack) {
    // Simulamos que procesa el texto de entrada
    let textoProcesado = texto.toUpperCase()

    //llamada a la funcion callback qe va a hacer otra accion con el texto
    funcionCallBack(textoProcesado);
    
}

function mostrarTexto(procesado){
    console.log("Texto procesado: ", procesado)
}

function encriptar(textoEncriptar){
    console.log("Texto antes de encriptar: ", textoEncriptar)
    const textoEncriptado = CryptoJS.AES.encrypt(textoEncriptar, '1927gtefdh').toString()
    console.log("Texto encriptado: ", textoEncriptado)
}

procesarTexto('Me gusta mucho el queso amarillo',encriptar)
procesarTexto('Mariguanizen la legaliguana',mostrarTexto)

// Mala practica (Sin CallBack)
function procesarTextoEncriptando(texto) {
    // Simulamos que procesa el texto de entrada
    let textoProcesado = texto.toUpperCase()

    console.log("Texto antes de encriptar: ", textoProcesado)
    const textoEncriptado = CryptoJS.AES.encrypt(textoProcesado, '1927gtefdh').toString()
    console.log("Texto encriptado: ", textoEncriptado)
}

function procesarTextoMostrando(texto) {
    // Simulamos que procesa el texto de entrada
    let textoProcesado = texto.toUpperCase()

    console.log("Texto procesado: ", textoProcesado)
}

procesarTextoMostrando("texto")
procesarTextoEncriptando("texto")