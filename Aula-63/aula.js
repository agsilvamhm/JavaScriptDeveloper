function adicao(x, y){
    return x + y
}

function multiplicacao(x, y){
    return x * y
}

function caulculadora(x, operacao, y) {
    console.log(operacao(x,y))
}

caulculadora(20, adicao, 25)

caulculadora(2, multiplicacao, 3)