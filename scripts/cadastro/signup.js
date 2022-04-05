
//capturando input digitado pelo usuário
let campoNome = pegarElementoID('campoNome') 
let campoApelido = pegarElementoID('campoApelido')
let campoEmail = pegarElementoID('campoEmail')
let campoSenha = pegarElementoID('campoSenha')
let campoRepetirSenha = pegarElementoID('campoRepetirSenha')


// tag small para validação dos campos não preenchidos 
let inputNomeValidacao = pegarElementoID('inputNomeValidacao')
let inputApelidoValidacao = pegarElementoID('inputApelidoValidacao')
let inputEmailValidacao = pegarElementoID('inputEmailValidacao')
let inputSenhaValidacao = pegarElementoID('inputSenhaValidacao')
let inputRepetirSenhaValidacao = pegarElementoID('inputRepetirSenhaValidacao')

//botão criar conta
let btnCriarConta = pegarElementoID('criarConta')


// variáveis com valores normalizados
let campoNomeNormalizado 
let campoApelidoNormalizado
let campoEmailNormalizado
let campoSenhaNormalizado
let campoRepetirSenhaNormalizado

// criando objeto
let novoUsuario = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',

    }

btnCriarConta.addEventListener('click', evento =>{

    if(liberaBotao())
    //retirando espaços dos campos
    campoNomeNormalizado = retiraEspacosDeUmValor(campoNome.value)
    campoApelidoNormalizado = retiraEspacosDeUmValor(campoApelido.value)
    campoEmailNormalizado = retiraEspacosDeUmValor(campoEmail.value)
    campoSenhaNormalizado = retiraEspacosDeUmValor(campoSenha.value)
    campoRepetirSenhaNormalizado = retiraEspacosDeUmValor(campoRepetirSenha.value)

    //colocando campos em letra minúscula
    campoNomeNormalizado = converteValorRecebidoParaMinusculo(campoNome.value)
    campoApelidoNormalizado = converteValorRecebidoParaMinusculo(campoApelido.value)
    campoEmailNormalizado = converteValorRecebidoParaMinusculo(campoEmail.value)
    
    // atribuindo valores ao objeto 
    novoUsuario.firstName = campoNomeNormalizado
    novoUsuario.lastName = campoApelidoNormalizado
    novoUsuario.email = campoEmailNormalizado
    novoUsuario.password = campoSenhaNormalizado


})


//variaveis para liberção do botão
let validaNome = false
let validaApelido = false
let validaEmail = false
let validaSenha = false
let validaRepetirSenha = false

// blur dos inputs

campoNome.addEventListener('blur', () => {
    if(campoNome.value == ''){
        inputNomeValidacao.innerText = 'Campo obrigatório'
        validacaoCampoAlerta(campoNome, inputNomeValidacao)
        validaNome = false
    }else{
        validacaoCampoOk(campoNome, inputNomeValidacao)
        validaNome = true
    }
    liberaBotao()
})

campoApelido.addEventListener('blur', ()=>{
    if(campoApelido.value == ''){
        inputApelidoValidacao.innerText = 'Campo obrigatório'
        validacaoCampoAlerta(campoApelido, inputApelidoValidacao)
        validaApelido = false
    }else{
        validacaoCampoOk(campoApelido, inputApelidoValidacao)
        validaApelido = true
    }
    liberaBotao()
})

campoEmail.addEventListener('blur', () =>{
    if((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(campoEmail.value))){
        validacaoCampoOk(campoEmail, inputEmailValidacao)
        validaEmail = true
    }else if(campoEmail.value == ''){
        inputEmailValidacao.innerText = 'Campo obrigatório'
        validacaoCampoAlerta(campoEmail, inputEmailValidacao)
        validaEmail = false
    }else{
        inputEmailValidacao.innerText = 'Email inválido'
        validacaoCampoAlerta(campoEmail, inputEmailValidacao)
        validaEmail = false
    }
    liberaBotao()
})

campoSenha.addEventListener('blur', () =>{
    if((/(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[!@#$%^&*()-+]).{8,}$/.test(campoSenha.value))){
       validacaoCampoOk(campoSenha, inputSenhaValidacao)
        validaSenha = true
    }else if(campoSenha.value == ''){
        inputSenhaValidacao.innerText = 'Campo obrigatório'
        validacaoCampoAlerta(campoSenha, inputSenhaValidacao)
        validaSenha = false
    }else {
        inputSenhaValidacao.innerText = 'A senha deve conter pelo menos : \n1 letra maiúscula \n1 letra minúscula \n1 número \n1 caracter especial\n no mínimo 8 caracteres'
        validacaoCampoAlerta(campoSenha, inputSenhaValidacao)
        validaSenha = false
    }
    liberaBotao()
})


campoRepetirSenha.addEventListener('blur', () =>{
    if(campoRepetirSenha.value == campoSenha.value){
        validacaoCampoOk(campoRepetirSenha, inputRepetirSenhaValidacao)
        validaRepetirSenha = true
    }else if(campoRepetirSenha.value == ''){
        inputRepetirSenhaValidacao.innerText = 'Campo obrigatório'
        validacaoCampoAlerta(campoRepetirSenha, inputRepetirSenhaValidacao)
        validaRepetirSenha = false
    }else {
        inputRepetirSenhaValidacao.innerText = 'As senhas não são iguais'
        validacaoCampoAlerta(campoRepetirSenha, inputRepetirSenhaValidacao)
        validaRepetirSenha = false
    }
    liberaBotao()
})


function liberaBotao(){
    if(validaNome && validaApelido && validaEmail && validaSenha && validaRepetirSenha){
        btnCriarConta.removeAttribute('disabled')
        btnCriarConta.innerText = 'Criar conta'
        return true
    }else{
        btnCriarConta.setAttribute('disabled', true)
        btnCriarConta.innerText = 'bloqueado'
        return false
    }
}

function limpaInput(){
    campoNome.value = ''
    campoApelido.value = ''
    campoEmail.value = ''
    campoSenha.value = ''
    campoRepetirSenha.value = ''
}

liberaBotao()
limpaInput()


