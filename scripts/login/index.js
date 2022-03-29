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
    senha: "",
}

validacaoTelaDeLogin()

botaoAcessar.addEventListener('click', function(evento){

    if (validacaoTelaDeLogin()) {
        
        //Normalizando as informações
        campoEmailLoginNormalizado = retiraEspacosDeUmValor(campoEmailLogin.value);
        campoSenhaLoginNormalizado = retiraEspacosDeUmValor(campoSenhaLogin.value);
        campoEmailLoginNormalizado = converteValorRecebidoParaMinusculo(campoEmailLoginNormalizado);

        //Populando o objeto com as informações normalizadas
        usuarioObjeto.email = campoEmailLoginNormalizado;
        usuarioObjeto.senha = campoSenhaLoginNormalizado;

        console.log(usuarioObjeto);
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

    if(/(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[!@#$%^&*()-+]).{8,}$/.test(campoSenhaLogin.value)){
        validacaoCampoOk(campoSenhaLogin, inputSenhaValidacao)
        senhaEValido = true;
        
    }else if(campoSenhaLogin.value == "") {
        inputSenhaValidacao.innerText = "Campo obrigatório";
        validacaoCampoAlerta(campoSenhaLogin, inputSenhaValidacao)
        senhaEValido = false

    }else {
        inputSenhaValidacao.innerText = "A senha deve conter pelo menos : \n1 letra maiúscula \n1 letra minúscula \n1 número \n1 caracter especial\n no mínimo 8 caracteres";
        validacaoCampoAlerta(campoSenhaLogin, inputSenhaValidacao)
        senhaEValido = false
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


