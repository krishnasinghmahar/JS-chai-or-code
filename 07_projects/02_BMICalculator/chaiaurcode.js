// const height = document.querySelector('#height')
// const weight = document.querySelector('#weight')

// const calculate = document.querySelector('button')
// const result = document.querySelector('#results')

// calculate.addEventListener('click', (e) => {
//   e.preventDefault()
//   if (height.value === '') {
//     alert('Enter the height')
//     return
//   }

//   if (weight.value === '') {
//     alert('Enter the weight')
//     return
//   }

//   const BMI = calculateBMI(height.value, weight.value)
//   result.innerText = BMI

// })

// function calculateBMI(height, weight) {
//   height = height / 100
//   return (weight / (height * height)).toFixed(1)
// }


const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const height = parseInt(form.querySelector('#height').value)
  const weight = parseInt(form.querySelector('#weight').value)
  const result = form.querySelector('#results')
  const BMIresult = form.querySelector('#BMI-range-result')

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Enter the valid height: ${height}`
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Enter the valid weight: ${weight}`
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2)
    result.innerHTML = BMI
    if (BMI < 18.6) {
      BMIresult.innerHTML = 'Under Weight'
    } else if (BMI > 24.9) {
      BMIresult.innerHTML = 'Overweight'
    } else {
      BMIresult.innerHTML = 'Normal weight'
    }
  }
})