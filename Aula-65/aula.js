const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const db = (value, i, listRef) => {
    console.log(value)
}

lista.forEach(db)

for (let index = 0; index < lista.length; index++) {
    console.log(lista[index])
}