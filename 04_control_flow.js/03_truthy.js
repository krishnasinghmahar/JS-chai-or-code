const email = []

if (email) {
  console.log("User have an email")
} else {
  console.log("user don't have an email")
}

// falsy values: false, 0, "", null, undefined, NaN, BigInt 0n, -0

// truthy values: "0"," ", 'false', [], {}, function (){}

// if([].length === 0){
//   console.log("Array is empty")
// }

// if (Object.keys({}).length === 0) {
//   console.log('Object is empty')
// }

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? undefined ?? 10

console.log(val1)

// Ternary Operator

const isCondition = false;

isCondition ? console.log('condition is true') : console.log('condition is False')