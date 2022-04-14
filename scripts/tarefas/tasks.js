// variaveis
let nomeUsuario = document.querySelector('.user-info p');
let token = sessionStorage.getItem('jwt');
let novaTarefa = document.getElementById('novaTarefa');
let btnTarefa = document.querySelector('.nova-tarefa button');

onload = function () {
    if (!token) {
        location.href = 'index.html'
    } else {
        pegarUsuario(token)
    }

}




//função para listar as tarefas



//função para criar uma nova tarefa
const criarNovaTarefa = (entradaTarefa) => {

    let tarefa = {
        description: entradaTarefa,
        completed: false
    };

    const padraoVazio = /^$/;                                       // regexp para strings vazias
    const testeRegexVazio = padraoVazio.test(tarefa.description);   // retorna true se o nome da tarefa entrar na regra do Regexp

    if (testeRegexVazio === true) {
        console.log('A Tarefa não pode ser nome vazio.');

        return alert(`A Tarefa não pode ser nome vazio.`)
    } else {

        let urlCriarTarefa = "https://ctd-todo-api.herokuapp.com/v1/tasks";
        let novaTarefaJSON = JSON.stringify(tarefa);

        console.log(novaTarefaJSON);

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
                console.log(response)
                return response.json()

            } else {
                console.log(response)
                throw response.status
            }

        }).then(data => {
            window.location = 'tarefas.html'
            return data.jwt

        }).catch(error => {
            if (error == 400) {
                console.log('Erro 400');
                alert('Erro 400')
            } else {
                console.log('Tentar novamente mais tarde');
                alert('Tentar novamente mais tarde')
            }
        })
    }
}

//evento para criar a nova tarefa 

btnTarefa.addEventListener('click', event => {
    event.preventDefault()
    let textoNovaTarefa = novaTarefa.value; // CORRIGIR A CAPTURA DO TEXTO DA TAREFA
    criarNovaTarefa(textoNovaTarefa)
})
