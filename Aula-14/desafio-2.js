/*
Desafio
Dado um inteiro positivo num, retorne o número de inteiros positivos menor ou igual a num cuja soma de dígitos é par. A soma dos dígitos de um inteiro positivo é a soma de todos os seus dígitos.

Entrada
Como entrada você recerá um valor inteiro e positivo.

Saída
Como saída, será impresso a soma de todos os numeros inteiros positivos menores ou iguais ao num, como nos exemplos a baixo:
*/

const { gets, print} = require('./funcoes-auxiliares-2')

// let lines = gets().split("\n");
 
let num =  4 //parseInt(lines.shift());
 
const getDigitSum = (num) => {
    const str =  lines.toString();
          sum = 0;
   
    for (const char of str) {
            sum += +char;
    }
    return sum    ;
};
 
let count = 0;
 
for (let i = 1; i <= lines.lenght; i++) {
    if (getDigitSum(i) % 2 === 0    )
          count++;
}
 
print( ''        );