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
        nome: '',
        apelido: '',
        email: '',
        senha: '',

    }

btnCriarConta.addEventListener('click', evento =>{
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
    novoUsuario.nome = campoNomeNormalizado
    novoUsuario.apelido = campoApelidoNormalizado
    novoUsuario.email = campoEmailNormalizado
    novoUsuario.senha = campoSenhaNormalizado

    evento.preventDefault()
})


campoNome.addEventListener('blur', () => {
    if(campoNome.value == ''){
        inputNomeValidacao.innerText = 'Campo obrigatório'
        validacaoCampoAlerta(campoNome, inputNomeValidacao)
    }else{
        validacaoCampoOk(campoNome, inputNomeValidacao)
    }
})

campoApelido.addEventListener('blur', ()=>{
    if(campoApelido.value == ''){
        inputApelidoValidacao.innerText = 'Campo obrigatório'
        validacaoCampoAlerta(campoApelido, inputApelidoValidacao)
    }else{
        validacaoCampoOk(campoApelido, inputApelidoValidacao)
    }
})

campoEmail.addEventListener('blur', () =>{
    if((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(campoEmail.value))){
        validacaoCampoOk(campoEmail, inputEmailValidacao)
    }else if(campoEmail.value == ''){
        inputEmailValidacao.innerText = 'Campo obrigatório'
        validacaoCampoAlerta(campoEmail, inputEmailValidacao)
    }else{
        inputEmailValidacao.innerText = 'Email inválido'
        validacaoCampoAlerta(campoEmail, inputEmailValidacao)
    }
})



