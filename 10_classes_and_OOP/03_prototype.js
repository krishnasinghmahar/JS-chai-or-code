// let name = 'krishna  '

// console.log(name.trueLength);

let myHeroes = ["thor", "spiderMan"]

let heroPower = {
  thor: 'hammer',
  spiderMan: 'sling',
  getSpiderPower() {
    console.log(`SpiderMan power is ${this.spiderMan}`);
  }
}

Object.prototype.krishna = function () {
  console.log('I am in Object');
}

// function hi(){}

// myHeroes.krishna()
// heroPower.krishna()
// hi.krishna()

const User = {
  name: 'chai',
  email: 'chai@gmail.com'
}

const Teacher = {
  makeVideo: true
}

const TeachingSupport = {
  isAvailable: true
}

const TASupport = {
  makeAssignment: "JS assignment",
  fulltime: true,
  __proto__: TeachingSupport
}

// console.log(TASupport.full);

Teacher.__proto__ = User

// console.log(Teacher.name);

Object.setPrototypeOf(TeachingSupport, Teacher)
console.log(TeachingSupport.name)

String.prototype.trueLength = function () {
  console.log(`true length of ${this} is ${this.trim().length}`);
}

'krishna  '.trueLength()