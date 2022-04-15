function tarefaPendente(tarefa) {

    let dataConvertida = dayjs(tarefa.createdAt).format('DD/MM/YYYY')
    let ul = document.querySelector('.tarefas-pendentes')
    let li = document.createElement('li')
    li.classList.add('tarefa')
    li.innerHTML = `
    <div class="not-done" id="${tarefa.id}" onclick="finalizarTarefa(${tarefa.id}, token)"></div>
    <div class="descricao">
        <p class="nome">${tarefa.description}</p>
        <p class="timestamp"><i class="far fa-calendar-alt"></i> ${dataConvertida}</p>
    </div>
`
    ul.appendChild(li)

}