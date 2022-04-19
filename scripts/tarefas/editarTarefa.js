let btn = document.querySelector('#alterar')

btn.addEventListener('click', e=>{
    let input = document.querySelector('.novaTarefa')
    e.preventDefault()
    requisicaoAPI(input.id, token) 
})

function editarTarefa(id, descricao){
    let div = document.querySelector('.not-done')
    div.innerHTML = '<i class="fas fa-times-circle cancel-edicao"></i>'

    let input = document.querySelector('.novaTarefa')
    input.value = descricao
    input.id = id

    let btnCriar = document.querySelector('#criarTarefa')
    btnCriar.style.display = 'none'

    btn.style.display = 'inline'
}

function retornarEnvio(){
    let div = document.querySelector('.not-done')
    div.innerHTML = ''
    
    let input = document.querySelector('.novaTarefa')
    input.value = ''
    input.id = 'novaTarefa'
    
    
    let btnCriar = document.querySelector('#criarTarefa')
    btnCriar.style.display = 'inline'
    
    btn.style.display = 'none'
}

let btnVoltar = document.querySelector('.not-done')

btnVoltar.addEventListener('click', e=>{
    retornarEnvio()
})
let tarefas = document.querySelector('.tarefas-pendentes')
tarefas.addEventListener('click', e=>{
    console.log('clicou')
})


function requisicaoAPI(id, token){

    let input = document.querySelector('.novaTarefa')

    let editandoTarefa= {
        description: input.value,	
        completed: false    
    }
    
    let urleditarTarefa = `https://ctd-todo-api.herokuapp.com/v1/tasks/${id}`;

    let edicaoTarefaJSON = JSON.stringify(editandoTarefa);

    let endpoint = {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'authorization': token
        },
        body: edicaoTarefaJSON
    }
    
    fetch(urleditarTarefa, endpoint)
    .then(response => {
        if (response.status == 200) {
            console.log("Tarefa editada com sucesso")
            return response.json()

        } else {
            console.log(response)
            throw response.status
        }

    }).then(data => {
        window.location.reload()
        limparInput()
       

    }).catch(error => {
        if (error == 400) {
            console.log('Erro 400');
            alert('Erro 400')
        } else {
            console.log('Tente novamente mais tarde');
            alert('Tente novamente mais tarde')
        }
    })
    
}

function limparInput(){
    let input = document.querySelector('.novaTarefa')
    input.value = ''
}


