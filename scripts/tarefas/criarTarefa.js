const criarNovaTarefa = (entradaTarefa) => {

    let tarefa = {
        description: entradaTarefa,
        completed: false
    };

    const padraoVazio = /^$/;                                       // regexp para strings vazias
    const testeRegexVazio = padraoVazio.test(tarefa.description);   // retorna true se o nome da tarefa entrar na regra do Regexp

    if (testeRegexVazio === true) {
        return Swal.fire("Campo nova tarefa é obrigatório!", "Não é possível criar uma tarefa sem descrição.", 'info')

    } else {

        let urlCriarTarefa = "https://ctd-todo-api.herokuapp.com/v1/tasks";
        let novaTarefaJSON = JSON.stringify(tarefa);

        let endPoint = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': token
            },
            body: novaTarefaJSON
        }

        fetch(urlCriarTarefa, endPoint).then(response => {
            if (response.status == 201) {
                return response.json()

            } else {
                throw response.status
            }

        }).then(data => {
            tarefaPendente(data)
            return data.jwt

        }).catch(error => {
            if (error == 400) {
                Swal.fire("Erro 400", "", 'error')

            } else {
                Swal.fire("Ocorreu um erro inesperado.", "Por favor, tente novamente mais tarde!", 'warning')

            }
        })
    }
}






