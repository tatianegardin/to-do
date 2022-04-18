function tarefaPendente(tarefa) {

    let dataConvertida = dayjs(tarefa.createdAt).format('DD/MM/YYYY')
    let ul = document.querySelector('.tarefas-pendentes')
    let li = document.createElement('li')
    li.classList.add('tarefa')

    let tarefaAlterada = `'${tarefa.description}'`
    li.innerHTML = `
    <div class="not-done" id="${tarefa.id}" onclick="finalizarTarefa(${tarefa.id}, token) "></div>
    <div class="descricao">
        <p class="nome">${tarefa.description}</p>
        <div class='botoes' >
            <button  onclick="editarTarefa(${tarefa.id}, ${tarefaAlterada})"><i class="fas fa-marker"></i></button>
            <p class="timestamp"><i class="far fa-calendar-alt"></i> ${dataConvertida}</p>
        </div>
    </div>
`
    ul.appendChild(li)

}