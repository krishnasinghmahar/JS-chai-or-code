// Primitive

// 7 Types - String, Number, Boolean, null, undefined, Symbol, BigInt

// Reference (Non primitive)

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId) // false

const bigNumber = 12349791785924142n;

// 3 Types - Functions, Objects, Array

const heroes = ["spiderMan", "superMan", "batMan"]

const myObj = {
  name: "krishna",
  age: 21
}

const myFunction = function () {
  console.log('hello world')
}

myFunction()

console.log(typeof null); // object