async function getCharacter() {
    const characterId = document.getElementById('characterId').value;

    if(!characterId) return;

    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${characterId}`);
        const character = response.data
        console.log(character)
        displayCharacter(character)
    } catch (error) {
        console.error('Error al traer personaje: ', error)
        alert('Hubo un error al traer el personaje, porfavor consulta tu consola para mas INFO')
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