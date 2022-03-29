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
    input.style.border = `1px solid #EE1729EC`

}
function validacaoCampoOk(input, tag){
    tag.innerText = ""
    input.style.border = ``
}

function pegarElementoID(id) {
    return document.getElementById(id)
}
