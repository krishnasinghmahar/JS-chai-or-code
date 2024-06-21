const user = {
  username: "krishna",
  price: "999",

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`)
    console.log(this);
  }
}

// user.welcomeMessage()
user.username = "KSM"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//   let username = "krishna"
//   console.log(this.username)
// }

// chai()

const chai1 = function () {
  let username = "krishna"
  console.log(this)
}

// chai1()

const chai = () => {
  let username = "krishna"
  console.log(this)
}

// chai()

// const addTwo = (num1, num2) => {
//   return num1 + num2
// }

// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({ username: "krishna" })


console.log(addTwo(2, 3))

const array = [1, 2, 3, 4, 5]

array.forEach((a) => console.log(a))
