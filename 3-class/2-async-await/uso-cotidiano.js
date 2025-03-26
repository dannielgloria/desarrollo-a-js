//? USO COTIDIANO

async function procesarPersonajes() {
    try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        const data = response.data;
        const names = data.results.map(personaje => personaje.name)
        
        return names
    } catch (error) {
        console.error('No fue posible obtener los datos')
        const response = {}
        return response
    }
}

// funcion  async anonima
(async function() {
    const nombresProcesados = await procesarPersonajes();
    console.log("Nombres de los personajes de Ricardo y Moises: ", nombresProcesados);
})();

