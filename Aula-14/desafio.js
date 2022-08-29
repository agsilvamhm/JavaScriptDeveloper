/*
3)Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.
Para realizar o cálculo receba o valor bruto do salario e o adicional dos benefícios
o salário a ser transferido é calculado da seguinte maneira:

Valor bruto do salário - percentual de impostos mediante a faixa salarial + adicional dos benefícios

Para calcular o percentual de impostos segue as aliquotas.

de R$    0.00 a R$ 1100.00 =  5.00%
de R$ 1100.00 a R$ 2500.00 = 10.00%
Maior que R$ 2500.00 = 15.00%

Exemplo:
    Entrada:
        2000.00
         250.00
    
    Saída:
        2050.00     
*/

const { gets, print} = require('./funcoes-auxiliares')

const salario = gets();
const beneficio = gets();

if (salario < 1100.01){
    print(`Valor com desconto de 5% R$ ${((salario * 0.95)+ beneficio).toFixed(2)}`)
} else if (salario < 2500.01) {
    print(`Valor com desconto de 10% R$ ${((salario * 0.90)+ beneficio).toFixed(2)}`)
} else {
    print(`Valor com desconto de 15% R$ ${((salario * 0.85)+ beneficio).toFixed(2)}`)  
}