function tarefaPendente(tarefa) {

    let dataConvertida = dayjs(tarefa.createdAt).format('DD/MM/YYYY HH:mm')
    let ul = document.querySelector('.tarefas-pendentes')
    let li = document.createElement('li')
    let tarefaAlterada = `'${tarefa.description}'`

    li.classList.add('tarefa')
    li.innerHTML = `
    <div class="not-done check${tarefa.id}" id="${tarefa.id}" onclick="finalizarTarefa(${tarefa.id}, token)"><img hidden src="../../assets/icons8-selecionado.gif" class="v-check ${tarefa.id}" allowFullScreen></img></div>
    <div class="descricao descricao${tarefa.id}">
        <p class="nome">${tarefa.description}</p>
        <div class='botoes' >
            <button  onclick="editarTarefa(${tarefa.id}, ${tarefaAlterada})"><i class="fas fa-marker"></i></button>
            <p class="timestamp"><i class="far fa-calendar-alt"></i> ${dataConvertida}</p>
        </div>
    </div>
`
    ul.appendChild(li)

}