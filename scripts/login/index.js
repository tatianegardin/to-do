//Capturando as informações
let campoEmailLogin = document.getElementById('inputEmail');
let campoSenhaLogin = document.getElementById('inputPassword');
let botaoAcessar = document.getElementById('botaoAcessar');

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
        .then(response => response.json())
        .then(data => console.log(data.jwt))


    } else {
        alert("Ambos os campos devem ser informados")
        evento.preventDefault(); //Não permite que o formulário seja executado / realizado o 'submit'
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


