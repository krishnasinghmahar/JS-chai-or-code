const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log('Async task is completed')
    resolve()
  }, 1000)
})

promiseOne.then(() => {
  console.log('Promise consumed');
})

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Async task 2');
    resolve()
  }, 1000)
}).then(() => {
  console.log('Async task 2 resolved');
})

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "krishna", email: 'krishna@gmail.com' })
  }, 1000)
})

promiseThree.then((user) => {
  console.log(user);
})

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    const error = false
    if (!error) {
      resolve({ username: 'krishna', password: "134" })
    } else {
      reject('ERROR! something went wrong')
    }
  }, 1000)
})

promiseFour.then((user) => {
  return user.username
}).then((username) => {
  console.log(username)
}).catch((error) => {
  console.error(error);
}).finally(() => console.log('The promise is resolved or rejected'))

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    const error = false
    if (!error) {
      resolve({ username: 'javascript', password: "134" })
    } else {
      reject('ERROR! JS went wrong')
    }
  }, 1000)
})

async function consumePromiseFive() {
  try {
    const response = await promiseFive
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive()

// async function getAllUsers(){
//   const response = await fetch('https://jsonplaceholder.typicode.com/users')
//   const data = await response.json()
//   console.log(data);
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    return response.json()
  }).then((data) => {
    console.log(data);
  }).catch((error) => {
    console.log(error)
  })
