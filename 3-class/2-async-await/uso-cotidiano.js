async function procesarPersonajes() {
    try {
        const response = await axios.get('https://rickandmortyap.com/api/character');
        const data = response.data;
        const nombres = data.results.map(personaje =>personaje.name);
        console.log(nombres)
    } catch (error) {
        console.error('No fue posible obtener los datos');
    }
}
procesarPersonajes()