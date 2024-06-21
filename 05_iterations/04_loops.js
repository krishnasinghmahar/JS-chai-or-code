const myObject = {
  js: "javaScript",
  py: "python",
  cpp: "c++",
  rb: "ruby",
  swift: "swift by apple"
}

for (const key in myObject) {
  if (Object.hasOwnProperty.call(myObject, key)) {
    const element = myObject[key];
    console.log(element)
  }
}

const programming = ['js', 'cpp', 'py', 'java', 'swift']

for (const key in programming) {
  console.log(programming[key])
}

const map = new Map();
map.set('In', "India")
map.set("Usa", "United States of America")
map.set("Fr", "France")
map.set("UK", "United Kingdom")

for (const [key, value] in map) {
  console.log(key)
}
