document.getElementById('synchronous').addEventListener("click", function () {
  let number = document.getElementById('number-input').value

  let oddNumbers = []
  let evenNumbers = []

  let odd
  let even

  //odd
  for (let i = 1; i <= number; i++) {
    if (i % 2 == 1) {
      oddNumbers.push(i)
      odd = oddNumbers.join(' ')
      document.getElementById('odd-show').innerHTML = odd
      console.log(odd)
    }
  }

  //even
  for (let i = 1; i <= number; i++) {
    if (i % 2 == 0) {
      evenNumbers.push(i)
      even = evenNumbers.join(' ')
      document.getElementById('even-show').innerHTML = even
      console.log(even)
    }
  }

  document.getElementById('number-input').value = '';
})


document.getElementById('asynchronous').addEventListener("click", function () {
  let number = document.getElementById('number-input').value

  let oddNumbers = []
  let evenNumbers = []

  let odd
  let even

  //odd
  let i = 1
  setInterval(() => {
    if (i <= number) {
      if (i % 2 == 1) {
        oddNumbers.push(i)
        odd = oddNumbers.join(' ')
        document.getElementById('odd-show').innerHTML = odd
        console.log(odd)
      }
    }
    i++
  }, 3000)

  //even
  let j = 1
  setInterval(() => {
    if (j <= number) {
      if (j % 2 == 0) {
        evenNumbers.push(j)
        even = evenNumbers.join(' ')
        document.getElementById('even-show').innerHTML = even
        console.log(even)
      }
    }
    j++
  }, 2000);
})
