//Capturando as informações
let campoEmailLogin = document.getElementById('inputEmail');
let campoSenhaLogin = document.getElementById('inputPassword');
let botaoAcessar = document.getElementById('botaoAcessar');
let exibeErro = pegarElementoID('exibeErro')

let campoEmailLoginNormalizado;
let campoSenhaLoginNormalizado

//variável de controle da validação
let emailEValido = false;
let senhaEValido = false;

//Definindo objeto
const usuarioObjeto = {
    email: "",
    password: "",
}

validacaoTelaDeLogin()

botaoAcessar.addEventListener('click', function(evento){

    if (validacaoTelaDeLogin()) {
        evento.preventDefault()
        
        //Normalizando as informações
        campoEmailLoginNormalizado = retiraEspacosDeUmValor(campoEmailLogin.value);
        campoSenhaLoginNormalizado = retiraEspacosDeUmValor(campoSenhaLogin.value);
        campoEmailLoginNormalizado = converteValorRecebidoParaMinusculo(campoEmailLoginNormalizado);

        //Populando o objeto com as informações normalizadas
        usuarioObjeto.email = campoEmailLoginNormalizado;
        usuarioObjeto.password = campoSenhaLoginNormalizado;



        let usuarioObjetoJson = JSON.stringify(usuarioObjeto);

        let endPoint = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: usuarioObjetoJson
        }

        let urlEndPoint = "https://ctd-todo-api.herokuapp.com/v1/users/login"

        fetch(urlEndPoint, endPoint)
        .then(response => {
            if(response.status == 201){
                return response.json()
            }else{
                throw response.status
            }
        })
        .then(data => data.jwt)
        .then(data => {
            loginOk(data)
        })
        .catch(error => {
            if(error == 404 || error == 400){
                exibeErro.innerText = "Usuário ou senha incorreto."
                exibirErroApi(exibeErro)
            }else{
                exibeErro.innerText = "Tente novamente mais tarde."
                exibirErroApi(exibeErro)
            }

        })
    }

    function loginOk(jwtRecebido){
        sessionStorage.setItem('jwt', jwtRecebido)
        window.location.href = 'tarefas.html'
    }

});

//Validando o campo de Email
campoEmailLogin.addEventListener('blur', function() {
    //Captura o elemento "small"
    let inputEmailValidacao = document.getElementById('inputEmailValidacao');

    //Se o campo estiver com algum valor correto
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(campoEmailLogin.value)){
        validacaoCampoOk(campoEmailLogin, inputEmailValidacao)
        emailEValido = true;
        
    }else if(campoEmailLogin.value == "") {
        inputEmailValidacao.innerText = "Campo obrigatório";
        validacaoCampoAlerta(campoEmailLogin, inputEmailValidacao)
        emailEValido = false

    }else {
        inputEmailValidacao.innerText = "Email inválido";
        validacaoCampoAlerta(campoEmailLogin, inputEmailValidacao)
        emailEValido = false
    }

    //Chama a função de validar, para "atualizar" o status da validação principal da tela de login
    validacaoTelaDeLogin();
});

campoSenhaLogin.addEventListener('blur', () =>{
    let inputSenhaValidacao = document.getElementById('inputSenhaValidacao')
      
    if(campoSenhaLogin.value == "") {
        inputSenhaValidacao.innerText = "Campo obrigatório";
        validacaoCampoAlerta(campoSenhaLogin, inputSenhaValidacao)
        senhaEValido = false

    }else {
        validacaoCampoOk(campoSenhaLogin, inputSenhaValidacao)
        senhaEValido = true;
    }

    validacaoTelaDeLogin()
})

// Mostrar senha login
let img = pegarElementoID('olho');

mostrarSenha(img, campoSenhaLogin)


function validacaoTelaDeLogin () {
    if (emailEValido && senhaEValido) {
        botaoAcessar.removeAttribute('disabled')
        botaoAcessar.innerText = "Acessar";
        return true;
    } else {
        botaoAcessar.setAttribute('disabled', true);
        botaoAcessar.innerText = "Bloqueado";
        return false;
    }
}


