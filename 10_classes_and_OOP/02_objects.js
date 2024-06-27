function multiplyBy2(num) {
  return num * 2
}

multiplyBy2.power = 2

// console.log(multiplyBy2(3));
// console.log(multiplyBy2.power);
// console.log(multiplyBy2.prototype);

function createUser(username, score) {
  this.username = username
  this.score = score
}

createUser.prototype.increment = function () {
  this.score++
}

createUser.prototype.printScore = function () {
  console.log(`score: ${this.score}`);
}

const chai = new createUser('chai', 25)
const tea = new createUser('tea', 250)
chai.increment()
tea.increment()
chai.printScore()
tea.printScore()