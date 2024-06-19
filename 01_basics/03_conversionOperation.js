let score = "33";

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);

// "33" => 33
// "33ab" => NaN
// true => 1; false => 0

let isLoggedIn = 2
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn) 

// 1 => true; 0 => false
// "" => false
// "krishna" => true
// 2 => true

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(typeof stringNumber)

// ********* Operations ************

let value = 3
let negValue = -value
// console.log(negValue) // -3

// console.log(2 + 3)
// console.log(2 - 3)
// console.log(2 * 3)
// console.log(2 ** 3)
// console.log(2 / 3)
// console.log(2 % 3)

let str1 = "Hello"
let str2 = " World"
let str3 = str1 + str2
// console.log(str3)

// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + 2 + 3)
// console.log(1 + 2 + "3")

// console.log((1 + 2) / 3 % 4); // use brackets

// console.log(+true) // 1
// console.log(+"") // 0

let num1, num2, num3
num1 = num2 = num3 = 4

let gameCounter = 100
gameCounter++
console.log(gameCounter)