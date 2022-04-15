function deletarTarefa(id, token){
    let url = `https://ctd-todo-api.herokuapp.com/v1/tasks/${id}`
    let endPoint = {
        method: 'DELETE',
        headers:{
            'authorization': token
        }
    }

    fetch(url, endPoint)
    .then(response => {
        console.log(response.status)
        if(response.status == 200){
            return response.json()
        }else{
            throw response.status
        }
    })
    .then(data => {
        swal.fire('Tarefa excluída com sucesso', '', 'success')
        document.querySelector('.swal2-confirm').addEventListener('click', ()=> window.location.reload())
    })
    .catch(error => swal.fire(`Erro ${error}`, 'Por favor, tente novamente mais tarde', 'error'))
}