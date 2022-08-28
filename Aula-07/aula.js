/*
1 - Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por quilometro rodado,
Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/ 
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

const focus = new Carros('Ford', 'Branca', 12)

console.log(`Para o percurso com o ` + focus.marca +  ' ' + focus.gastoMedio(100, 5.19))
