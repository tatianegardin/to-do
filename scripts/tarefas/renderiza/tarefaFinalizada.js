function tarefaFinalizada(tarefa){
    let ul = document.querySelector('.tarefas-terminadas')
    let li = document.createElement('li')
    li.classList.add('tarefa')
    li.innerHTML = `
    <li class="tarefa">
        <div class="done"></div>
        <div class="descricao">
        <p class="nome">${tarefa.description}</p>
        <div>
            <button><i id="${tarefa.id}" class="fas fa-undo-alt change"></i></button>
            <button><i id="${tarefa.id}" class="far fa-trash-alt"></i></button>
        </div>
        </div>
    </li>
`
    ul.appendChild(li)

}