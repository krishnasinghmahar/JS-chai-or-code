const myNumbers = [1, 2, 3, 4, 5]

const total = myNumbers.reduce((accumulator, currentValue) => {
  console.log(accumulator, currentValue)
  return accumulator + currentValue
}, 0)

console.log(total)

const shoppingCart = [
  {
    itemName: "javaScript Course",
    price: 2999
  },
  {
    itemName: "python Course",
    price: 999
  },
  {
    itemName: "DSA Course",
    price: 1999
  },
  {
    itemName: "Data Science Course",
    price: 3099
  },
  {
    itemName: "Mobile Development Course",
    price: 4999
  },
]

const total1 = shoppingCart.reduce((acc, curr) => acc + curr.price, 0)
console.log(total1)