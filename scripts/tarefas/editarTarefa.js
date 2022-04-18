function editarTarefa(id, token, descricao){

    console.log(id)
    console.log(token)
    console.log(descricao)

    let input = document.querySelector('#novaTarefa')
    input.value = descricao



    let btn = document.querySelector('#alterar')
    btn.addEventListener('click', e=>{
        e.preventDefault()
        requisicaoAPI(id, token)
    })

}


// function aparecerCampo() {
//     let btn = document.querySelector('#alterar')
//     btn.removeAttribute("hidden");    

//     // let botaoCriar = document.querySelector('.nova-tarefa button')
//     // botaoCriar.setAttribute("hidden")
// }


function requisicaoAPI(id, token){

    let input = document.querySelector('#novaTarefa')
    console.log(input)

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
        location.reload()
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
    let input = document.querySelector('#novaTarefa')
    input.value = ''
}


