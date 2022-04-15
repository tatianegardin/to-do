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
        .then(response => {
            if(response.status == 200){
                return response.json()
            }else {
                throw response.status
            }
        })
        .then(data => {
            nomeUsuario.innerHTML = `${data.firstName} ${data.lastName}`
        })
        .catch(error =>Swal.fire(`Erro ${error}`, 'Por favor, tente novamente mais tarde', 'error'))

}
