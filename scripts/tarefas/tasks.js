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


//evento para criar a nova tarefa 

btnTarefa.addEventListener('click', event => {
    event.preventDefault()
    let textoNovaTarefa = novaTarefa.value; // CORRIGIR A CAPTURA DO TEXTO DA TAREFA
    criarNovaTarefa(textoNovaTarefa)
})
