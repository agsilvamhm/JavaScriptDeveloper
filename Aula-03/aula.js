/* const nota1 = 5.00
const nota2 = 3.00
const nota3 = 7.00

const media = (nota1 + nota2 + nota3) / 3

if (media < 5) {
    console.log (`Reprovação - Média ${media}`)
} else if (media <= 7 ) {
    console.log(`Recuperação - Média ${media}`)
} else {
    console.log(`Passou do semestre - Média ${media}`)
} */

/*const peso = 90.0
const altura = 1.81
const imc = peso / Math.pow(altura, 2)

if (imc < 18.5) {
    console.log(`Abaixo do peso - IMC = ${imc.toFixed(2)}`)
} else if (imc < 25) {
    console.log(`Peso normal - IMC = ${imc.toFixed(2)}`)
} else if (imc < 30) {
    console.log(`Acima do peso - IMC = ${imc.toFixed(2)}`)
} else if (imc < 48 ) {
    console.log(`Obeso - IMC = ${imc.toFixed(2)}`)
} else {
    console.log(`Obsedidade grave - IMC = ${imc.toFixed(2)}`)
} */

const preco = 100.0
const formaPagamento = 4

if (formaPagamento === 1) {
    console.log(`Preço a ser pago com 10% de desconto R$ ${(preco * 0.9).toFixed(2)}`)   
} else if (formaPagamento === 2){
    console.log(`Preço a ser pago com 15% de desconto R$ ${(preco * 0.85).toFixed(2)}`)   
} else if (formaPagamento === 3) {
    console.log(`Preço normal  R$ ${(preco).toFixed(2)}`)      
} else {
    console.log(`Preço com acréscimo de 10% R$ ${(preco * 1.1).toFixed(2)}`)     
}