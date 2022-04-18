// variaveis
let nomeUsuario = document.querySelector('.user-info p');
let token = sessionStorage.getItem('jwt');
let novaTarefa = pegarElementoID('novaTarefa');
let btnTarefa = document.querySelector('#criarTarefa');
let btnSessao = pegarElementoID('closeApp');

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
    let textoNovaTarefa = novaTarefa.value; // CORRIGIR A CAPTURA DO TEXTO DA TAREFA
    criarNovaTarefa(textoNovaTarefa)
})

//evento para finalizar sessão

btnSessao.addEventListener('click', e =>{
    e.preventDefault()
    finalizarSessao()
})



