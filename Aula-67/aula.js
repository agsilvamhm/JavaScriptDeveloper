class Pessoa {
    constructor(name){
        this.name = name
    }
}

const lista = [new Pessoa('Adalberto'), new Pessoa('Ana'), new Pessoa('Mayra'), new Pessoa('Heloyse'), new Pessoa('Miguel')]

console.log(lista)

const listaNome =[]

for (let index = 0; index < lista.length; index++) {
    const element = lista[index];
    listaNome.push(element.name)
}

console.log(listaNome)

const listaNome2 = lista.map((element) => {
    return element.name
})

console.log(listaNome2)

