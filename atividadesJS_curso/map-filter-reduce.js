const students = [
    {Name: 'Jake', score: 6.4},
    {Name: 'Susan', score: 8.6},
    {Name: 'Emma', score: 9.4},
    {Name: 'Peter', score: 9.1},
 ]

const greatStudent = student => student.score >= 9
const getScore = el => el.score
const avg = (acc, el, i, array) => {
    if(i === array.length - 1) {
        return (acc + el) / array.length
    } else {
        return acc + el
    }
}

console.log(
    students
     .filter(greatStudent)
     .map(getScore)
     .reduce(avg)
)