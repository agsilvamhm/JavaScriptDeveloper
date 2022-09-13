const fs = require('fs')

const promiseArquivo = fs.promises.readFile('./tarefas.csv')

promiseArquivo
        .then((arquivo) => {
            console.log(arquivo.toString('UTF-8'))
        }).catch((error) =>{
            console.log('Deu ruim na leitura', error)
        })