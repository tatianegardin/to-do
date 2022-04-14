//função para pegar o nome e sobrenome do usuário a partir do token
function pegarUsuario(valor) {
    let endPoint = {
        method: 'GET',
        headers: {
            authorization: valor
        }
    }

    let url = 'https://ctd-todo-api.herokuapp.com/v1/users/getMe'

    fetch(url, endPoint)
        .then(response => response.json())
        .then(data => {
            nomeUsuario.innerHTML = `${data.firstName} ${data.lastName}`
        })

}
