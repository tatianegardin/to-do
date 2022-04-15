function tarefaFinalizada(tarefa) {
    let ul = document.querySelector('.tarefas-terminadas')
    let li = document.createElement('li')
    li.classList.add('tarefa')
    li.innerHTML = `
    <div class="done"></div>
    <div class="descricao">
    <p class="nome">${tarefa.description}</p>
    <div>
        <button><i id="${tarefa.id}" onclick = "returnStatusTarefa(${tarefa.id}, token)" class="fas fa-undo-alt change"></i></button>
        <button><i id="${tarefa.id}" onclick = "deletarTarefa(${tarefa.id}, token)" class="far fa-trash-alt"></i></button>
    </div>
    </div>
`
    ul.appendChild(li)

}