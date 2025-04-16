const numbers = [1, 2, 3, 4, 5, 6]
const numbersV2 = numbers.map((el) => el * 2)

console.log(numbers, numbersV2)

const students = [
   {Name: 'Jake', score: 6.4},
   {Name: 'Susan', score: 8.6},
   {Name: 'Emma', score: 9.4},
   {Name: 'Peter', score: 9.1},
]

const getScore = el => el.score

console.log(
   students
       /*getScore mostra as notas como elas são*/
        .map(getScore)
       /*math.ceil arredonda as notas para cima*/ 
        .map(Math.ceil)
       /*math.floor arredonda para baixo*/ 
)

/*Outra forma de fazer é colocar em uma constante*/
const result = students 
   .map(getScore)
   .map(Math.ceil)

   console.log(students, result)