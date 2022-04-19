let btn = document.querySelector('#alterar')

btn.addEventListener('click', e=>{
    let input = document.querySelector('.novaTarefa')
    e.preventDefault()
    requisicaoAPI(input.id, token) 
})

function editarTarefa(id, descricao){
    let todasTarefas = document.querySelectorAll('.not-done')
    for(tarefa of todasTarefas){
        tarefa.style.backgroundColor = ''
    }
    
    let todosZoom = document.querySelectorAll(`.descricao`)
    for(valor of todosZoom){
        valor.style.transform = 'scale(1)'
    }

    let divTarefa = document.querySelector(`.check${id}`)
    divTarefa.style.backgroundColor = 'var(--secondary)'

    let div = document.querySelector('.not-done')
    div.innerHTML = '<i class="far fa-times-circle cancel-edicao"></i>'
    div.style.backgroundColor = 'white'

    let divZoom = document.querySelector(`.descricao${id}`)

    divZoom.style.transform = 'scale(1.02)'

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
    div.style.backgroundColor = ''

    
    let input = document.querySelector('.novaTarefa')
    let pegarId = input.id
    input.value = ''
    input.id = 'novaTarefa'

    let divTarefa = document.getElementById(pegarId)
    divTarefa.style.backgroundColor = ''

    let divZoom = document.querySelector(`.descricao${pegarId}`)
    divZoom.style.transform = 'scale(1)'
    
    
    let btnCriar = document.querySelector('#criarTarefa')
    btnCriar.style.display = 'inline'
    
    btn.style.display = 'none'
}


let btnVoltar = document.querySelector('.not-done')
btnVoltar.addEventListener('click', e=>{
    retornarEnvio()
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
            return response.json()

        } else {
            throw response.status
        }

    }).then(data => {
        window.location.reload()
        limparInput()
        
    }).catch(error => {
        Swal.fire("Ocorreu um erro inesperado.", "Por favor, tente novamente mais tarde!", 'warning')
    })
    
}

function limparInput(){
    let input = document.querySelector('.novaTarefa')
    input.value = ''
}


