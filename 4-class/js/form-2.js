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

// agergar funcion asincrona para el getAllcharacters() consultando el endpoint https://rickandmortyapi.com/api/character
// tomando como ejemplo a :
/*
function loadAllPost() {
    axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
            const commentsContainer = document.getElementById('commentsContainer');
            commentsContainer.innerHTML = res.data.map( comment => `
                    <div class="card mb-3">
                        <div class="card-body">
                            <h4 class="card-title">${comment.title}</h4>
                            <p class="card-text">${comment.body}</p>
                        </div>
                    </div>
                `).join('');
            console.log(res.data);
        })
        .catch(error => {console.log('Error: ', error)})
}
*/
