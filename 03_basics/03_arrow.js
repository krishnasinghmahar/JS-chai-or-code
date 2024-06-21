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

