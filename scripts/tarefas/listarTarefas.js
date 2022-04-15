function listarTarefas(valor) {
    let endPoint = {
        method: 'GET',
        headers: {
            authorization: valor
        }
    }

    let url = 'https://ctd-todo-api.herokuapp.com/v1/tasks'

    fetch(url, endPoint)
        .then(response =>{
            if(response.status == 200){
                return  response.json()
            }else{
                throw response.status
            }
        })
        .then(data => {
            console.log(data)

            for (const tarefa of data) {
                tarefa.completed ? tarefaFinalizada(tarefa) : tarefaPendente(tarefa);
            }
        })
        .catch(error =>Swal.fire(`Erro ${error}`, 'Por favor, tente novamente mais tarde', 'error'))
}
