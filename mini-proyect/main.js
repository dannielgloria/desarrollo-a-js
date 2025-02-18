document.getElementById('commetForm').addEventListener('submit',function(event){
    event.preventDefault();
    const name    = document.getElementById('name').value
    const email   = document.getElementById('email').value
    const comment = document.getElementById('comment').value

    const bodyObjetc = {
        name: name,
        email: email,
        body: comment
    }

    // crear un comentario
    axios.post("https://jsonplaceholder.typicode.com/posts",bodyObjetc)
        .then(res => {
            console.log('Comentario añadido: ', res.data)
        })
        .catch(error => {console.log('Error: ', error)})
})

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

loadAllPost()