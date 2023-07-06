// get my DOM elements
const buttons = document.querySelectorAll('button')
const body = document.querySelector('body')
const allDigits = document.querySelectorAll('h1')
const buttonsArray = Array.from(buttons)
const digitsArray = Array.from(allDigits)

// Create Color object
const color = {
  decimal: 0,
  pureHex: '000000',
  hex: '#000000',
}

// Turn decimal number into pure hex string
const decToPureHex = (color) => {
  color.pureHex = color.decimal.toString(16)

  // to prepend 0's
  while (color.pureHex.length < 6) {
    color.pureHex = '0' + color.pureHex
  }
}

// Turn pureHex into hex
const pureHexToHex = (color) => {
  while (color.pureHex.length < 6) {
    color.pureHex = '0' + color.pureHex
  }
  color.hex = `#${color.pureHex}`
}

// setColor function
const setDec = (sign, power, color) => {
  // get the current color from hex
  let currentHex = color.pureHex

  // get the character in question
  const powers = [5, 4, 3, 2, 1, 0]
  const indexinQuestion = powers.at(power)

  // extract our digit
  let hexinQuestion = currentHex.at(indexinQuestion)

  // now let's change the character
  // first we'll deal with incrementing
  if (sign === 1) {
    switch (hexinQuestion) {
      case '0':
        // change our hex value
        hexinQuestion = '1'
        break
      case '1':
        hexinQuestion = '2'
        break
      case '2':
        hexinQuestion = '3'
        break
      case '3':
        hexinQuestion = '4'
        break
      case '4':
        hexinQuestion = '5'
        break
      case '5':
        hexinQuestion = '6'
        break
      case '6':
        hexinQuestion = '7'
        break
      case '7':
        hexinQuestion = '8'
        break
      case '8':
        hexinQuestion = '9'
        break
      case '9':
        hexinQuestion = 'a'
        break
      case 'a':
        hexinQuestion = 'b'
        break
      case 'b':
        hexinQuestion = 'c'
        break
      case 'c':
        hexinQuestion = 'd'
        break
      case 'd':
        hexinQuestion = 'e'
        break
      case 'e':
        hexinQuestion = 'f'
        break
      default:
        hexinQuestion = '0'
    }
  }

  if (sign === -1) {
    switch (hexinQuestion) {
      case '0':
        hexinQuestion = 'f'
        break
      case '1':
        hexinQuestion = '0'
        break
      case '2':
        hexinQuestion = '1'
        break
      case '3':
        hexinQuestion = '2'
        break
      case '4':
        hexinQuestion = '3'
        break
      case '5':
        hexinQuestion = '4'
        break
      case '6':
        hexinQuestion = '5'
        break
      case '7':
        hexinQuestion = '6'
        break
      case '8':
        hexinQuestion = '7'
        break
      case '9':
        hexinQuestion = '8'
        break
      case 'a':
        hexinQuestion = '9'
        break
      case 'b':
        hexinQuestion = 'a'
        break
      case 'c':
        hexinQuestion = 'b'
        break
      case 'd':
        hexinQuestion = 'c'
        break
      case 'e':
        hexinQuestion = 'd'
        break
      default:
        hexinQuestion = 'e'
    }
  }

  // we have the new character as "hexinQuestion"
  // now I need to put the new character in the original spot

  // intermediary values for me to do what i'm trying to do..
  const limboArray = [...color.pureHex]
  limboArray[indexinQuestion] = hexinQuestion
  const limboString = limboArray.join('')
  color.pureHex = limboString

  // now update the dec
  color.decimal = parseInt(color.pureHex, 16)
  pureHexToHex(color)
}

// Generate new random color
const genRandom = (color) => {
  color.decimal = Math.floor(Math.random() * 16777215)
  decToPureHex(color)
  pureHexToHex(color)
  // return color
}

// Function for updating the DOM
const updateDom = (color) => {
  body.style.backgroundColor = color.hex
  digitsArray.map((digit, index) => {
    digit.innerText = color.pureHex[index]
  })
}

// Function called on buttons being clicked, changes of color
const colorChange = (e) => {
  e.preventDefault()
  const btn = e.explicitOriginalTarget.value

  let sign, power

  if (btn.includes('one')) {
    power = 5
  } else if (btn.includes('two')) {
    power = 4
  } else if (btn.includes('three')) {
    power = 3
  } else if (btn.includes('four')) {
    power = 2
  } else if (btn.includes('five')) {
    power = 1
  } else {
    power = 0
  }

  if (btn.includes('min')) {
    sign = -1
  } else {
    sign = 1
  }

  if (btn.includes('gen')) {
    genRandom(color)
    updateDom(color)
  } else {
    setDec(sign, power, color)
    updateDom(color)
  }
}

buttonsArray.forEach((button) => {
  button.addEventListener('click', colorChange)
})
