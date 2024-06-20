// const User = new Object() SingleTon Object
const User = {}

User.id = "123abc"
User.name = "Tom"
User.isLoggedIn = false

// console.log(User)

const User2 = {
  email: "K@gmail.com",
  fullName: {
    userFullName: {
      firstName: "krishna",
      lastName: "Mahar"
    }
  }
}

// console.log(User2.fullName.userFullName.firstName);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }
const obj3 = { 5: "c", 6: "d" }

const obj5 = { ...obj1, ...obj2, ...obj3 }

const obj4 = Object.assign({}, obj1, obj2, obj3,)

// console.log(obj4, obj5)

// console.log(Object.keys(obj5))
// console.log(Object.values(obj5))
// console.log(Object.entries(obj5))

// console.log(obj5.hasOwnProperty("1"))

const course = {
  courseName: "js in hindi",
  coursePrice: "999",
  courseInstructor: 'Hitesh'
}

const { courseInstructor: instructor } = course

// console.log(instructor)

// JSON format

// {
//   "name": "krishna",
//   "cName": "js in hindi",
//   "price": "free"
// }

[
  {},
  {}
]