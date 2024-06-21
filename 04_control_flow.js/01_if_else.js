// if and else statements

// const temperature = 41;

// if (temperature < 50) {
//   console.log('temperature is less than 50')
// } else {
//   console.log("temperature is greater than 50")
// }

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if(score > 100){
//   const name = "krishna"
//   console.log(`hi ${name}`)
// }

// console.log(`hi ${name}`)

// const balance = 1000;

// // if(balance > 500) console.log(balance)

// if (balance < 500) {
//   console.log("less than 500")
// } else if (balance < 700) {
//   console.log("less than 700")
// } else if (balance < 900) {
//   console.log("less than 700")
// } else {
//   console.log("less than 1200")
// }

const userLoggedIn = true
const debitCard = true
const googleLoggedIn = false
const emailLoggedIn = true

if (userLoggedIn && debitCard && 2 == 3) {
  console.log("Allow to buy course")
}

if (googleLoggedIn || emailLoggedIn) {
  console.log("Use logged In");
}

