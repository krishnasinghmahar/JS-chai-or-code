function sayMyName() {
  console.log("K");
  console.log("R");
  console.log("I");
  console.log("S");
  console.log("H");
  console.log("N");
  console.log("A");
}

// sayMyName()

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2) {
  // const result = number1 + number2
  // return result
  return number1 + number2
}

const result = addTwoNumbers(1, 2)

// console.log(result)

function loginUserMessage(username = "User") {
  if (!username) {
    return 'Please Enter The User Name'

  }
  return `${username} just logged in`
}

// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1) {
  return num1
}

// console.log(calculateCartPrice(1, 2, 3, 4, 5)) // 3, 4, 5

const User = {
  username: "krishna",
  price: 199
}

function handleObject(anyObject) {
  console.log(`username: ${anyObject.username}  price: ${anyObject.price}`);
}

// handleObject(User)
handleObject({
  username: "KSM",
  price: 233
})

const newArray = [100, 200, 300, 400]

function returnSecondValue(array) {
  return array[1]
}

// console.log(returnSecondValue(newArray));
console.log(returnSecondValue([1, 2, 3, 4]));