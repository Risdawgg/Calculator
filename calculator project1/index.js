let string = ''
let buttons = document.querySelectorAll('button')
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    try {
      if (e.target.innerHTML == '=') {
        string = eval(string)
        document.getElementById('output').innerHTML = string
      } else if (e.target.innerHTML == 'RESET') {
        string = ''
        document.getElementById('output').innerHTML = string
      } else if (e.target.innerHTML == 'DEL') {
        string = string.substring(0, string.length - 1)
        document.getElementById('output').innerHTML = string
      } else {
        console.log(e.target) 
        string = string + e.target.innerHTML
        document.getElementById('output').innerHTML = string
      }
    } catch (error) {
      alert(error.message)
    }
  })
})
