function finalizarTarefa(id, token) {
    let descricao = document.querySelector('.nome').value;
    let statusTarefa = {
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
                let iconeV = document.querySelector(`.v-check`);
                iconeV.removeAttribute('hidden');
                tarefaFinalizada;
            } else {
                tarefaPendente;
            }
            window.location.reload();
        })
        .catch(error => console.log(error))

}

//Função para retornar a tarefa pendente

function returnStatusTarefa(id, token) {
    let descricao = document.querySelector('.nome').value;
    let statusTarefa = {
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
            if (data.completed == false) {
                tarefaPendente;
            } else {
                tarefaFinalizada;

            }
            window.location.reload();
        })
        .catch(error => console.log(error))

}


