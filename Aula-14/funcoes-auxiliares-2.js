const entradas = [ 2, 4, 6, 8, 11, 13, 15, 17, 19, 20, 22, 24, 26, 28];
let i = 0;

function gets(){
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto)
}

module.exports = {gets, print}