let a = 4
const b = 5
var c = 6

if (true) {
  let a = 1;
  const b = 2;
  var c = 3
  // console.log(a)
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "krishna"
  function two() {
    const website = "website"
    console.log(username);
  }
  // console.log(website); error
  two()
}

// one()

if(true){
  const username = "krishna"
  if(username){
    const website = " youtube"
    // console.log(username + website)
  }
  // console.log(website); error
}
// console.log(username); error

function addOne(num){
  return num + 1
}

addOne(5)

const addTwo = function(num) {
  return num + 2
}

addTwo(2) 