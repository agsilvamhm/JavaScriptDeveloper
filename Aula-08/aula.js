const notas = [];
let soma = 0;

notas.push(5);
notas.push(3);
notas.push(8);
notas.push(7);
notas.push(9);
notas.push(8);

for (let index = 0; index < notas.length; index++) {
    soma = soma + notas[index];
}

console.log((soma/notas.length).toFixed(2))