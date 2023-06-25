// get my DOM elements
const button = document.querySelector(".gen-color");
const body = document.querySelector("body");
const text = document.querySelector("h1");

const colorGen = () => {
  const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return color;
};

const colorChange = (e) => {
  e.preventDefault();
  const color = colorGen();
  body.style.backgroundColor = color;
  text.innerText = color;
};

button.addEventListener("click", colorChange);
