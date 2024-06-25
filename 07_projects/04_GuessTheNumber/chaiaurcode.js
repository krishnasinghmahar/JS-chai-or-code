// My solution to the problem

// const form = document.querySelector('form')
// const randomNumber = randomNumberGenerator()
// const lowOrHigh = document.querySelector('.lowOrHi')
// const guesses = document.querySelector('.guesses')
// const guessRemaining = document.querySelector('.lastResult')

// let guessArray = []
// let counter = 10

// form.addEventListener('submit', (e) => {
//   e.preventDefault()

//   let input = form.querySelector('#guessField')
//   let inputValue = parseInt(input.value)
//   if (inputValue === '' || inputValue < 1 || inputValue > 100 || isNaN(inputValue)) {
//     lowOrHigh.innerHTML = `wrong input ${inputValue}`
//   } else {

//     if (counter === 0) {
//       lowOrHigh.innerHTML = `your are failed to guess the number and the number is ${randomNumber} refresh page to play again`
//       return
//     }
//     if (inputValue === randomNumber) {
//       lowOrHigh.innerHTML = `you guess it right, number is ${randomNumber} refresh page to play again`
//       return
//     }
//     counter--
//     guessRemaining.innerHTML = counter

//     checkValue(inputValue, randomNumber)
//     guessArray.unshift(inputValue)

//     guesses.innerHTML = ''
//     guessArray.forEach((guess) => {
//       guesses.innerHTML += `${guess}  `
//     })
//   }
//   input.value = ''
// })

// function randomNumberGenerator() {
//   return Math.floor(Math.random() * 100 + 1)
// }

// function checkValue(number, randomNumber) {
//   if (number > randomNumber) {
//     lowOrHigh.innerHTML = 'too high';
//   } else {
//     lowOrHigh.innerHTML = 'too low';
//   }
// }

// Chai or Code solution

let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault()
    const guess = parseInt(userInput.value)
    validateGuess(guess)
  })
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please Enter the valid number')
  } else if (guess < 1) {
    alert('Please Enter a number more than 1 ')
  } else if (guess > 100) {
    alert('Please Enter a number less than 100 ')
  } else {
    prevGuess.push(guess)
    if (numGuess === 10) {
      displayGuess(guess)
      displayMessage(`Game over. Random number was ${randomNumber}`)
      endGame()
    } else {
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`)
    endGame()
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low`)
  } else if (guess > randomNumber) {
    displayMessage(`Number is too high`)
  }
}

function displayGuess(guess) {
  userInput.value = ''
  guessSlot.innerHTML += `${guess} `
  numGuess++
  remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<button id="newGame"> Start New Game</button>`
  startOver.appendChild(p)
  playGame = false
  newGame()
}

function newGame() {
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', () => {
    randomNumber = parseInt(Math.random() * 100 + 1)
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
  })
}
