// for

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    // console.log("5 is the best number")
  }
  // console.log(i)
}

for (let i = 1; i <= 10; i++) {
  // console.log(`Table of ${i}`)
  for (let j = 1; j <= 10; j++) {
    // console.log(`${i} x $ ${j} = ${i * j}`)
  }
}

let array = ['A', 'B', 'C']

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  // console.log(element);
}

// for (let index = 1; index <= 20; index++) {
//   if (index === 5) {
//     console.log('5 is detected')
//     break
//   }
//   console.log(`value is ${index}`)

// }


for (let index = 1; index <= 20; index++) {
  if (index === 5) {
    console.log('5 is detected')
    continue
  }
  console.log(`value is ${index}`)

}