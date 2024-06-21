const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach((item) => {
//   console.log(item)
// })

// function print(item) {
//   console.log(item)
// }

// coding.forEach(print)

coding.forEach((item, index, arr) => {
  // console.log(item, index, arr)
})

const myCoding = [
  {
    languageName: "javaScript",
    fileName: "js"
  },
  {
    languageName: "java",
    fileName: "java"
  },
  {
    languageName: "python",
    fileName: "py"
  }
]

myCoding.forEach((item) => {
  console.log(item.languageName)
})