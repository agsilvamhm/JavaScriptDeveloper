/* 
1) Crie um programa onde dado um número crie a sua tabuada.

const numero = 7

for (let i = 1; i <= 10; i++) {
    console.log(numero + ' * ' + i + ' = ' + numero * i)
}
*/

/*
2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado;
*/

const lista = [223,24,14,56,55,56,13,44]

for (let index = 0; index < lista.length; index++) {
    if (lista[index] % 2 === 0) {
        console.log(lista[index])
    }
}