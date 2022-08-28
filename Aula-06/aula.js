/*const pessoa = {
    nome: 'Adalberto Gonçalves',
    idade: 48,
    altura: 1.81,

    descrever: function (){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

console.log(pessoa.nome);

console.log(pessoa.idade);

pessoa.descrever();
*/

class Pessoa {
    nome;
    idade;
    altura;
    anoNascimento;

    constructor(nome, idade, altura){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.anoNascimento = 2022 - idade

    }

    descrever() {
        console.log(`Menu nome é ${this.nome}, minha idade é ${this.idade} e minha algura é ${this.altura} `)
    }
}

const estudante = new Pessoa('Adalberto Gonçalves', 48, 1.81);

console.log(estudante)

function compararPessoa(p1, p2){
    if (p1.idade > p2.idade){
        console.log (`O ${p1.nome} é mais velha que ${p2.nome}`)
    } else if (p2.idade > p1.idade){
        console.log (`O ${p2.nome} é mais velha que ${p1.nome}`)
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`)
    }
}

const adalberto = new Pessoa('Adalberto',48 , 1.81);
const ana = new Pessoa('Ana', 45, 1.59)

compararPessoa(adalberto, ana);