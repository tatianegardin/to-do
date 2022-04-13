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
        description: inputTarefa.innerText,
        completed: false
    };

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
        window.location = 'index.html'
        return data.jwt

    }).catch(error => {
        if (error == 400) {
            exibirErro.innerText = "Tarefa já existente"
            exibirErroApi(exibirErro)
        } else {
            exibirErro.innerText = "Tentar novamente mais tarde"
            exibirErroApi(exibirErro)
        }
    })
}

//evento para criar a nova tarefa 

btnTarefa.addEventListener('click', event => {
    event.preventDefault()
    criarTarefa()
})
