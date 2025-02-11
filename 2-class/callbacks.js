//Callback
function descargarChats(url, funcionCallback) {
    console.log("Descargando datos desde: " + url);
    //! Se simula que se piden datos de WhatsApp, 
    //! para ejemplos practicos se pondra un time out 
    //! que simulara que esta tardando en conectarse a el servidor de whatsApp
    setTimeout(()=>{
        console.log("Se descargaron los datos");
        funcionCallback();
    }, 10000);

}


function procesarChats() {
    console.log("Procesando los chats")
}

function hackear() {
    console.log("Hackeando el whats de mi ex por que soy toxique")
}

descargarChats("www.whatsapp.com.mx",procesarChats)
