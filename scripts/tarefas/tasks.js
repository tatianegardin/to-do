onload = function(){
    let token = sessionStorage.getItem('jwt')
        if(!token){
            location.href = 'index.html'
        }else{
            console.log(token)
        }
}