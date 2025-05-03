function primeiroElemento(Array){
    return Array[0]
}

function primeiraLetra(string){
    return string[0]
}


const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(Resolve){
    Resolve('Ana', 'Bia', 'Carlos', 'Daniel')
})
.then(primeiroElemento)
.then(primeiraLetra)
.then(letraMinuscula)
.then(console.log)