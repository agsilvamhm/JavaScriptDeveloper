const entradas = [9, 3, 4, 1, 10, 8, 54, 55, 64, 102];
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