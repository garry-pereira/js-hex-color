// get my DOM elements
const button = document.querySelector(".gen-color");
const body = document.querySelector("body");
const text = document.querySelectorAll("h1");

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

// Generate new random color
const genRandom = (color) => {
  color.decimal = Math.floor(Math.random() * 16777215);
  decToPureHex(color);
  pureHexToHex(color);
  return color;
};

const colorChange = (e) => {
  e.preventDefault();
  console.log(e);
  genRandom(color);
  body.style.backgroundColor = color.hex;
  text.innerText = color.pureHex;
};

button.addEventListener("click", colorChange);
console.log(text);
