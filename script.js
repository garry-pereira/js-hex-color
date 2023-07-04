// get my DOM elements
const buttons = document.querySelectorAll('button')
const body = document.querySelector('body')
const text = document.querySelector('.test123')
const allDigits = document.querySelectorAll('h1')
console.log(allDigits)
console.log(buttons)
const buttonsArray = Array.from(buttons)
console.log(buttonsArray)

// Create Color object
const color = {
  decimal: 0,
  pureHex: '0',
  hex: '#000000',
}

// Turn decimal number into pure hex string
const decToPureHex = (color) => {
  color.pureHex = color.decimal.toString(16)
  return color
}

// Turn pureHex into hex
const pureHexToHex = (color) => {
  color.hex = `#${color.pureHex}`
}

// Digit stepper
// const digitStep = () => {}

// Generate new random color
const genRandom = (color) => {
  color.decimal = Math.floor(Math.random() * 16777215)
  decToPureHex(color)
  pureHexToHex(color)
  return color
}

// Function for updating the DOM
const updateDom = (color) => {
  body.style.backgroundColor = color.hex
  text.innerText = color.pureHex
}

// Function called on buttons being clicked, changes of color
const colorChange = (e) => {
  e.preventDefault()
  console.log(e)
  genRandom(color)
  updateDom(color)
}

buttonsArray.forEach((button) => {
  button.addEventListener('click', colorChange)
})
