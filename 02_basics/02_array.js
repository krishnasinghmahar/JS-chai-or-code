const myArray1 = [1, 2, 3]
const myArray2 = [4, 5, 6]

// myArray1.push(myArray2);

// console.log(myArray1)
// console.log(myArray1[3][0])

// const myArray3 = myArray1.concat(myArray2);
// console.log(myArray3);

const myArray3 = [...myArray1, ...myArray2]
// console.log(myArray3);

const myArray4 = [1, 2, [3, 4, [5, 6, [7, 8]]]]
const flatArray = myArray4.flat(Infinity)
// console.log(flatArray)

// console.log(Array.isArray('krishna'));
// console.log(Array.from('krishna'));
// console.log(Array.from({ name: "krishna" })) // Interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));