/* function escrevaMeuNome(nome){
    console.log('Meu nome é ' + nome)
}

escrevaMeuNome('Adalberto')

function verificaIdade(idade){
    if (idade <18  ){
        console.log('você é menor de idade!')
    } else {
        console.log('você é maior de idade')
    }
}

verificaIdade(48) */

function aplicarDesconto( principal, desconto){
    return principal - (principal * desconto/ 100)
}

function aplicarAcrescimo ( principal, acrescimo){
    return principal + (principal * acrescimo / 100)
}

const preco = 100.0
const formaPagamento = 4

if (formaPagamento === 1) {
    console.log(`Preço a ser pago com 10% de desconto R$ ${(aplicarDesconto(preco, 10)).toFixed(2)}`)   
} else if (formaPagamento === 2){
    console.log(`Preço a ser pago com 15% de desconto R$ ${(aplicarDesconto(preco, 15)).toFixed(2)}`)   
} else if (formaPagamento === 3) {
    console.log(`Preço normal  R$ ${(aplicarDesconto(preco, 0)).toFixed(2)}`)      
} else {
    console.log(`Preço com acréscimo de 10% R$ ${(aplicarAcrescimo (preco, 10)).toFixed(2)}`)     
}