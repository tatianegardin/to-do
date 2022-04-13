// variaveis
let nomeUsuario = document.querySelector('.user-info p');
let token = sessionStorage.getItem('jwt');
let novaTarefa = document.getElementById('novaTarefa');
let btnTarefa = document.querySelector('.nova-tarefa button')

onload = function () {
    if (!token) {
        location.href = 'index.html'
    } else {
        pegarUsuario(token)
    }

}


//função para pegar o nome e sobrenome do usuário a partir do token
function pegarUsuario(valor) {
    let endPoin = {
        method: 'GET',
        headers: {
            authorization: valor
        }
    }

    let url = 'https://ctd-todo-api.herokuapp.com/v1/users/getMe'

    fetch(url, endPoin)
        .then(response => response.json())
        .then(data => {
            nomeUsuario.innerHTML = `${data.firstName} ${data.lastName}`
        })

}


//função para listar as tarefas



//função para criar uma nova tarefa
const criarTarefa = (inputTarefa = novaTarefa) => {

    let tarefa = {
        description: inputTarefa.value,
        completed: false
    };

    let urlCriarTarefa = "https://ctd-todo-api.herokuapp.com/v1/tasks";
    let novaTarefaJSON = JSON.stringify(tarefa);

    console.log(novaTarefaJSON)

    let endPoint = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'authorization': token
        },
        body: novaTarefaJSON
    }

    fetch(urlCriarTarefa, endPoint)
        .then(response => response.json())
        .then(data=>console.log(data))
}

//evento para criar a nova tarefa 

btnTarefa.addEventListener('click', event=>{
    event.preventDefault()
    criarTarefa()
})
