async function getCharacter() {
    const characterId = document.getElementById('characterId').value;

    if(!characterId){
        alert('Por favor, ingresa un ID de personaje.')
        return;
    }

    if (!/^\d+$/.test(characterId)) {
        alert('El ID debe ser un número válido.')
        return;
    }
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${characterId}`);
        if (!response.data || Object.keys(response.data).length === 0 ) {
            console.error('No se encontraron datos para el personaje con ID: ', characterId)
            alert('No se encontró el personaje. Verifica que el ID exista e intenta de nuevo.')
            return
        }
        const character = response.data
        console.log(character)
        displayCharacter(character)
    } catch (error) {

        if (error.response && error.response.status === 404) {
            alert('No se encontró el personaje. Verifica que el ID exista e intenta de nuevo.')
        } else {
            alert('Hubo un error al traer el personaje, porfavor consulta a tu administrador')

        }

    }
}

function displayCharacter(character) {
    document.getElementById('characterImage').src = character.image
    document.getElementById('characterName').textContent = character.name
    document.getElementById('characterDetails').textContent = `Status: ${character.status}, Genero: ${character.gender}, Especie: ${character.species}`
    document.getElementById('characterCard').style.display = 'block'
}

function refreshPage() {
    document.getElementById('characterCard').style.display = 'none'
    document.getElementById('characterId').value = ''
}