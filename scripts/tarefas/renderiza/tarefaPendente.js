function tarefaPendente(tarefa){
    let ul = document.querySelector('.tarefas-pendentes')
    let li = document.createElement('li')
    li.classList.add('tarefa')
    li.innerHTML = `
    <li class="tarefa">
        <div class="not-done" id="${tarefa.id}"></div>
        <div class="descricao">
            <p class="nome">${tarefa.description}</p>
            <p class="timestamp"><i class="far fa-calendar-alt"></i> ${tarefa.createdAt}</p>
        </div>
    </li>

`
    ul.appendChild(li)

}