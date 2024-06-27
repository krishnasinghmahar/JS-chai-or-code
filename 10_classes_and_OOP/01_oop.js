const user = {
  username: "krishna",
  userCount: 8,
  signedIn: true,
  getUserDetails() {
    console.log(this.username);
  }
}

// console.log(user.getUserDetails())

function User(username, userCount, isLoggedIn) {
  this.username = username
  this.userCount = userCount
  this.isLoggedIn = isLoggedIn
  return this
}

const userOne =new User('krishna', 12, true)
const userTwo =new User('Chai', 14, false)
console.log(userOne);
console.log(userTwo);