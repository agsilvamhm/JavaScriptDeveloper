/*
1 - Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por quilometro rodado,
Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
 
class Carros {
    marca
    cor 
    mediaKmLitro

    constructor(marca, cor, mediaKm){
        this.marca = marca
        this.cor = cor
        this.mediaKmLitro = mediaKm
    }

    gastoMedio(quantKm, precoComb){
        return (`O gasto para este percurso é de  R$ ${((quantKm * precoComb) / this.mediaKmLitro).toFixed(2)}`)
    }
}

const focus = new Carros('Ford', 'Branca', 11)

console.log(`Para o percurso com o ` + focus.marca +  ' ' + focus.gastoMedio(250, 5.19))

const palio = new Carros('Fiat', 'Branca', 14)


console.log(`Para o percurso com o ` + palio.marca +  ' ' + palio.gastoMedio(250, 5.19))

*/

/* 2 - Crie uma classe para representar Pessoas
Para cada pessoa teremos os atributos, nome, peso e altura
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancia uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao josé para dizer o valor do seu IMC.
*/

class Pessoa {
    nome 
    peso 
    altura 

    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    informarIMC(){
        return (this.peso / (Math.pow(this.altura,2))).toFixed(2)
    }

    classificarIMC(){
        const IMC = this.informarIMC()
        if (IMC < 18.5) {
            return (`Abaixo do peso`)
        } else if (IMC < 25) {
            return (`Peso normal`)
        } else if (IMC< 30) {
            return (`Acima do peso`)
        } else if (IMC < 48 ) {
            return (`Obeso`)
        } else {
            return (`Obsedidade grave`)
        } 
    }
}

const adalberto = new Pessoa('Adalberto', 90, 1.81)
const jose = new Pessoa('José', 70, 1.75)

console.log(`Meu nome é ${adalberto.nome } e o meu IMC é ${adalberto.informarIMC()}`)
console.log(adalberto.classificarIMC())
console.log(`Meu nome é ${jose.nome} e o meu IMC é ${jose.informarIMC()}`)
console.log(jose.classificarIMC())