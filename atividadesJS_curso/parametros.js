
function logParams(a, b, c) {
    console.log(a, b, c)
}

//Ele ignora o 4 e o 5
logParams(1, 2, 3, 4, 5)
//Ele mostra todos
logParams(1, 2, 3)
//Ele mostra o terceiro elemento como undefined (não definido)
logParams(1, 2)

//Definimos os valores das variáveis
function defaultParams(a = 4, b = 5, c = 3) {
    console.log(a, b, c)
}

defaultParams(7, 8, 9)
defaultParams(7, 8)
defaultParams(7, 8)
defaultParams(7)
defaultParams()

console.log(1)
console.log(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

//Spread/rest
function logNums(...nums) {
    console.log(Array.isArray(nums))
    for(let n of nums){
        console.log(n)
    }
}

logNums(1, 2, 3, 4, 5, 6)

//Simplificado
function logNums(...nums) {
        console.log(nums)
    }


logNums(1, 2, 3, 4, 5, 6)

//Soma de todos os números
function sumAll(...nums) {
    let total = 0 
    for(let n of nums) {
        total += n
    }
    return total
}

console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))