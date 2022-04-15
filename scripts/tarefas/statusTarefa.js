// let onclick = document.querySelector('.not-done') 
// console.log (onclick)

function finalizarTarefa(id, token) {
    let descricao = document.querySelector('.nome').value;
    let statusTarefa= {
        description: descricao,	
        completed: true    
    }
        let statusTarefaJson = JSON.stringify(statusTarefa)

    let urlFinalizarTarefa = `https://ctd-todo-api.herokuapp.com/v1/tasks/${id}`;
    let endpoint = {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'authorization': token
        },
        body: statusTarefaJson
    }
    fetch(urlFinalizarTarefa, endpoint)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.completed == true) {
                console.log('tarefa finalizada')
                tarefaFinalizada;
            } else {
                console.log('tarefa não finalizada')
                tarefaPendente;
            }
            
        })
        .catch(error => console.log(error))

}
