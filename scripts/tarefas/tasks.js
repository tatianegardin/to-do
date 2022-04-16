// variaveis
let nomeUsuario = document.querySelector('.user-info p');
let token = sessionStorage.getItem('jwt');
let novaTarefa = pegarElementoID('novaTarefa');
let btnTarefa = document.querySelector('.nova-tarefa button');

onload = function () {
    if (!token) {
        location.href = 'index.html'
    } else {
        pegarUsuario(token)
        listarTarefas(token)
    }
}








