function calculaImc(peso, altura){
    return peso / Math.pow(altura, 2)
}

function classificarImc(imc){
    if (imc < 18.5) {
        return (`Abaixo do peso - IMC = ${imc.toFixed(2)}`)
    } else if (imc < 25) {
        return (`Peso normal - IMC = ${imc.toFixed(2)}`)
    } else if (imc < 30) {
        return (`Acima do peso - IMC = ${imc.toFixed(2)}`)
    } else if (imc < 48 ) {
        return (`Obeso - IMC = ${imc.toFixed(2)}`)
    } else {
        return (`Obsedidade grave - IMC = ${imc.toFixed(2)}`)
    } 
}

(function main(){
    const peso = 90.0
    const altura = 1.81
    const imc = calculaImc(peso, altura)
    console.log(classificarImc(imc))
})()