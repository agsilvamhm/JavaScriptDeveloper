/*
Uma sala contêm 5 alunos e para cada aluno foi sorteado um número de 1 - 100. 
Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

Dados de entrada:
5
50
10
98
23

saída 
98
*/

const { gets, print} = require('../Aula-10/funcoes-auxiliares');
/*
print(gets());
print(gets());
print(gets());
print(gets());
print(gets());
*/

let maiorNumero = 0
let quantidadeAlunos = gets(); // Vai pegar o valor do primeiro get (entrada)

console.log(quantidadeAlunos)

for (let index = 1; index < quantidadeAlunos; index++) {
    let numeroSorteado = gets();
    if (numeroSorteado > maiorNumero) {
        maiorNumero = numeroSorteado;
    }
}

console.log(maiorNumero)