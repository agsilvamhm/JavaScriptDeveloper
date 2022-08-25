const precoCombustivel = 5.79;
const kmPorLitro = 10;
const distanciaEmKm = 1780;

const litrosConsumidos = distanciaEmKm / kmPorLitro;
const valorGasto = litrosConsumidos * precoCombustivel;


console.log(` O valor do gasto da viagem foi de R$ ${valorGasto.toFixed(2)}`);