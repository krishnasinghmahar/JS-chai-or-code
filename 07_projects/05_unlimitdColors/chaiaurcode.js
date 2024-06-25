// My Solution

// const body = document.querySelector('body')
// const start = document.querySelector('#start')
// const stop = document.querySelector('#stop')


// // getRandomColor is copied from chatGPT
// function getRandomColor() {
//   const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//   return `#${randomColor.padStart(6, '0')}`;
// }

// function changeBackgroundColor() {
//   body.style.backgroundColor = getRandomColor()
// }

// let intervalId = setInterval(changeBackgroundColor, 1000)


// start.addEventListener('click', () => {
//   intervalId = setInterval(changeBackgroundColor, 1000)
// })

// stop.addEventListener('click', () => {
//   clearInterval(intervalId)
// })


// Hitesh sir's solution

const start = document.querySelector('#start')
const stop = document.querySelector('#stop')

const randomColor = function () {
  const hex = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)]
  }
  return color
}

let intervalId

function startChangingColor() {
  if (!intervalId) {
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = randomColor()
    }, 1000)
  }
}

function stopChangingColor() {
  clearInterval(intervalId)
  intervalId = null
}

start.addEventListener('click', startChangingColor)

stop.addEventListener('click', stopChangingColor)
