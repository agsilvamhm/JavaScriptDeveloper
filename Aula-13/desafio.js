/*
2) Faça um programa que receba N (quantidade de numeros) e seus respectivos valores 
imprima o maior número par e o menor número impar.

Exemplo:
    Entrada:
    5
    3
    4
    1
    10
    8

    Saída:
    Maior número par: 10
    Menor número impar: 1
*/

const { gets, print} = require('./funcoes-auxiliares');

const entradas = gets();
let maiorPar = null
let menorImpar = null

for (let index = 0; index < entradas; index++) {
    let numero = gets()
    if (numero % 2 === 0){
        if (maiorPar === null || (numero > maiorPar)){
            maiorPar = numero
        }
    } else {
        if (menorImpar === null ||  (numero < menorImpar)){
            menorImpar = numero
        }
    }
}

print(`O maior número par é ${maiorPar}`)
print(`O menor número impar é ${menorImpar}`)