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
            window.location.reload();
        })
        .catch(error => console.log(error))

}

//Função para retornar a tarefa pendente

function returnStatusTarefa(id, token) {
    let descricao = document.querySelector('.nome').value;
    let statusTarefa= {
        description: descricao,	
        completed: false    
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
            if (data.completed == false) {
                console.log('tarefa não finalizada')
                tarefaPendente;
            } else {
                console.log('tarefa finalizada')
                tarefaFinalizada;
                
            } 
            window.location.reload();
        })
        .catch(error => console.log(error))

}


