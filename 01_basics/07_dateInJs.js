// let myDate = new Date();

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString);
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());

// let myCreatedDate = new Date(2024, 11, 20);
// let myCreatedDate = new Date(2024, 11, 20, 5, 3);
// let myCreatedDate = new Date("2024-12-20");
// let myCreatedDate = new Date("12-20-2024");

// let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())

// console.log(Math.floor(Date.now() / 1000))

let newDate = new Date()

console.log(newDate)
console.log(newDate.getDay())
console.log(newDate.getMonth() + 1)

let day = newDate.toLocaleString('default',{
  weekday: "long"
})

console.log(day)