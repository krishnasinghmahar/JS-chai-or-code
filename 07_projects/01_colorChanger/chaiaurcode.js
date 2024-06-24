// const greyBtn = document.querySelector('#grey')
// const whiteBtn = document.querySelector('#white')
// const blueBtn = document.querySelector('#blue')
// const yellowBtn = document.querySelector('#yellow')

// function changeBackgroundColor(color) {
//   const body = document.querySelector('body')
//   body.style.backgroundColor = color
// }

// greyBtn.addEventListener('click', () => {
//   changeBackgroundColor('grey')
// })

// whiteBtn.addEventListener('click', () => {
//   changeBackgroundColor('white')
// })

// blueBtn.addEventListener('click', () => {
//   changeBackgroundColor('blue')
// })

// yellowBtn.addEventListener('click', () => {
//   changeBackgroundColor('yellow')
// })


const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id
    }
  })
})