function finalizarSessao(){
    sessionStorage.removeItem('jwt')
    window.location.href = 'index.html'
}