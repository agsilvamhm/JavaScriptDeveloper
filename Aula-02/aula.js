const precoGasolina = 6.66
const precoAlcool = 5.79
const tipoCombustivel = 'Etanol'
const consumoMedioKmLitro = 10
const distaciaKm = 100

if (tipoCombustivel === 'Gasolina'){
    console.log(` O valor total da viagem R$ ${(precoGasolina * distaciaKm / consumoMedioKmLitro).toFixed(2)}`)
} else {
    console.log(` O valor total da viagem R$ ${(precoAlcool * distaciaKm / consumoMedioKmLitro).toFixed(2)}`)
}
