// singleton
// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "krishna",
  "full name": "krishna singh mahar",
  [mySym]: "my key 1",
  age: 20,
  isLoggedIn: false,
  lastLoggedIn: ["Saturday", "Monday"]
}

// console.table([
//   JsUser.name,
//   JsUser["full name"],
//   JsUser[mySym]
// ])

JsUser.name = 'KSM'
// Object.freeze(JsUser)
JsUser.name = 'K.S Mahar'

// console.log(JsUser)

JsUser.greeting = function () {
  console.log('Hello world')
}

JsUser.greetingTwo = function () {
  console.log(`Hello world, ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())