function retiraEspacosDeUmValor (valorRecebido) {
    return valorRecebido.trim();
}

function converteValorRecebidoParaMinusculo (valorRecebido) {
    return valorRecebido.toLowerCase();
}

function validacaoCampoAlerta(input, tag){
    tag.style.color = "#EE1729EC"
    tag.style.fontSize = "8pt"
    tag.style.fontWeight = "bold"
    input.style.border = "1px solid #EE1729EC"

}
function validacaoCampoOk(input, tag){
    tag.innerText = ""
    input.style.border = ""
}

function pegarElementoID(id) {
    return document.getElementById(id)
}

function exibirErroApi(tag){
    tag.style.backgroundColor = "rgba(233, 73, 73, 0.288)"
    tag.style.padding = "1rem"
    tag.style.borderRadius = "1rem"
    tag.style.border = "1px"
    tag.style.width = "80%"
    tag.style.textAlign = "center"
} 


function mostrarSenha(tag,campo){
    tag.addEventListener("click", function () {
        campo.type = campo.type == "text" ? "password" : "text";
      });
}


