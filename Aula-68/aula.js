const lista = [1,2,3,4,5,6,7,8,9,10]

// percorrer toda a lista e reduzi-la a um único valor

const somaTodosOsValores = lista.reduce((previus, current) => {
    console.log(previus, current)
    return previus + current
},0) // o zero serve para inicializar, pois caso o array fosse vazio apresentaria um erro.
  


console.log(somaTodosOsValores)