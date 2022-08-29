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

/* const salario = gets();
const beneficio = gets();

if (salario < 1100.01){
    print(`Valor com desconto de 5% R$ ${((salario * 0.95)+ beneficio).toFixed(2)}`)
} else if (salario < 2500.01) {
    print(`Valor com desconto de 10% R$ ${((salario * 0.90)+ beneficio).toFixed(2)}`)
} else {
    print(`Valor com desconto de 15% R$ ${((salario * 0.85)+ beneficio).toFixed(2)}`)  
} */


const valorSalario = parseFloat(gets());
const valorBeneficios = parseFloat(gets());

// TODO: utilizando as funções úteis abaixo, calcule e imprima a saída conforme o enunciado.

function calcularPorcentagem(valor, percentual) {
  return valor * (percentual / 100);
}

function pegarAliquota(salario) {
  if (salario >= 0 && salario <= 1100) {
    return 5;
  } else if (salario >= 1100.01 && salario <= 2500.00) {
    return 10;
  } else {
    return 15;
  }
}

print(((valorSalario - calcularPorcentagem(valorSalario, pegarAliquota(valorSalario))) + valorBeneficios).toFixed(2))
