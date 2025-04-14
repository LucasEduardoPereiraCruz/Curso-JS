//Anonymous function 
(function (x, y, z){
     return x + y + z
})

// Function Expression 
const x = 1 
const sum =function (a, b) { 
    return a + b 
}

const result = sum(7, 59)
console.log(result)

const anotherSum = sum
console.log(anotherSum(5,9))

let A = 3 
console.log(A)

B = sum
console.log(B(11, 16))