function chamadaAPI(id, token){
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
    .then(data => data)  
    .catch(error => swal.fire(`Erro ${error}`, 'Por favor, tente novamente mais tarde', 'error'))
}

function deletarTarefa(id, token){
    Swal.fire({
        title: 'Você deseja deletar essa tarefa?',
        text: "Essa ação não poderá ser revertida",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, quero deletar!',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
            chamadaAPI(id, token)
            Swal.fire(
                'Deletado!',
                'Sua tarefa foi deletada com sucesso!',
                'success'
            )
            document.querySelector('.swal2-confirm').addEventListener('click', ()=> window.location.reload())

        }
      })
   
}