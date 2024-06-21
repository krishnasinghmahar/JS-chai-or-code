// for of loop

let arr = [1, 2, 3, 4, 5]

for (const num of arr) {
  console.log(num)
}

const greetings = "Hello World!"
for (const greet of greetings) {
  console.log(greet);
}

const map = new Map();
map.set('In', "India")
map.set("Usa", "United States of America")
map.set("Fr", "France")
map.set("UK", "United Kingdom")

console.log(map)

for (const [key, value] of map) {
  console.log(key + ':-' + value)
}

const myObject = {
  game1: "coc",
  game2: "cor"
}

// for (const [game, gameName] of myObject) { myObject is not iterable
//   console.log(game, value)
// }

