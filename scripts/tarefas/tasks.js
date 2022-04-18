// variaveis
let nomeUsuario = document.querySelector('.user-info p');
let token = sessionStorage.getItem('jwt');
let novaTarefa = document.querySelector('.novaTarefa');
let btnTarefa = pegarElementoID('criarTarefa');
let btnSessao = pegarElementoID('closeApp');

// evento que executa uma função quando a página carregar
onload = function () {
    if (!token) {
        location.href = 'index.html'
    } else {
        limparInput()
        pegarUsuario(token)
        listarTarefas(token)
    }
}


//evento para criar a nova tarefa 

btnTarefa.addEventListener('click', event => {
    event.preventDefault()
    let textoNovaTarefa = novaTarefa.value;     // Captura o nome da tarefa digitada no input (captura dinâmica)
    criarNovaTarefa(textoNovaTarefa)
})

//evento para finalizar sessão

btnSessao.addEventListener('click', e => {
    e.preventDefault()
    finalizarSessao()
})



