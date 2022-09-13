
//new Promise((resolve, rejeita) => {
    // 
    // Se funcionou retorna o resolve
 //    resolve()
    //
    //
    // Se não funcionou retorna o rejeita
  //  rejeita()

//})

const processarUmNumero = new Promise((resolve, rejeita) => {
    setTimeout(() => {
        const numero = parseInt(Math.random() * 100)
        resolve(numero)
    },2000)
})


console.log('Aguardando a execução')


processarUmNumero
        .then((value) => {
            console.log(value)
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(()=> {
            console.log('Finalizou')
        })