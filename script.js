// get my DOM elements
const buttons = document.querySelectorAll("button");
const body = document.querySelector("body");
const text = document.querySelector(".test123");
const allDigits = document.querySelectorAll("h1");
console.log(allDigits);
const digitArray = allDigits.forEach((digit) => digit.push);
console.log(digitArray);

// Create Color object
const color = {
  decimal: 0,
  pureHex: "0",
  hex: "#000000",
};

// Turn decimal number into pure hex string
const decToPureHex = (color) => {
  color.pureHex = color.decimal.toString(16);
  return color;
};

// Turn pureHex into hex
const pureHexToHex = (color) => {
  color.hex = `#${color.pureHex}`;
};

// Digit stepper
const digitStep = () => {};

// Generate new random color
const genRandom = (color) => {
  color.decimal = Math.floor(Math.random() * 16777215);
  decToPureHex(color);
  pureHexToHex(color);
  return color;
};

// Function for updating the DOM
const updateDom = (color) => {
  body.style.backgroundColor = color.hex;
  text.innerText = color.pureHex;
};

// Function called on buttons being clicked, changes of color
const colorChange = (e) => {
  e.preventDefault();
  console.log(e);
  switch (e.target.value) {
    case "gen":
      genRandom(color);
      break;
    case "oneplus" || "onemin":
      digitStep();
  }
  updateDom(color);
};

buttons.forEach((button) => {
  button.addEventListener("click", colorChange);
});
