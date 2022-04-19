function listarTarefas(valor) {
    //carrega um fixo de skeleton
    renderizarSkeletons(5, ".tarefas-pendentes")


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

            let concluida = 0
            let pendente = 0
            for(tarefa of data){
                if(tarefa.completed){
                    concluida ++
                }else{
                    pendente ++
                }
            }
            // remove o valor fixo do skeleton
            removerSkeleton('.tarefas-pendentes')

            //adiciona o valor do skeleton de acordo com o número de tarefas recebido pela api
            renderizarSkeletons(pendente, ".tarefas-pendentes")
            renderizarSkeletons(concluida, ".tarefas-terminadas")
                        
            //setando um tempo para poder remover os skeleton e renderizar as tarefas
            setTimeout(()=>{
                //remova os skeleton para poder renderizar as tarefas
                removerSkeleton('.tarefas-pendentes')
                removerSkeleton('.tarefas-terminadas')

                //renderiza as tarefas
                for (const tarefa of data) {
                    tarefa.completed ? tarefaFinalizada(tarefa) : tarefaPendente(tarefa);
                }
            }, 600) 
            

        })
        .catch(error =>{
            Swal.fire(`Erro ${error}`, 'Por favor, tente novamente mais tarde', 'error')
        })
}
