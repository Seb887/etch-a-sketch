'use strict';

// Important variables
const gridContainer = document.querySelector('.grid-container');

// Defaults
const defaultGrid = 64;
const defaultColor = 'black';

// Setup Grid
function setupGrid(gridSize) {
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (let i = 0; i < gridSize * gridSize; i++) {
    let gridElement = document.createElement('div');
    gridElement.classList.add('grid-element');
    gridContainer.append(gridElement);
  }
}

setupGrid(defaultGrid);

// Get Buttons
const btnColor = document.querySelector('#btn-color');
const btnRainbow = document.querySelector('#btn-rainbow');
const btnClear = document.querySelector('#btn-clear');

// Color Management
let changeColor = defaultColor;
let setColor;

// Set Color
btnColor.addEventListener('click', () => {
  setColor = prompt('Set Color:');
  changeColor = setColor;
});

// Set Rainbow
function createRainbowColor() {
  let colorR = Math.floor(Math.random() * 256);
  let colorG = Math.floor(Math.random() * 256);
  let colorB = Math.floor(Math.random() * 256);
  changeColor = `rgb(${colorR}, ${colorG}, ${colorB})`;
}

btnRainbow.addEventListener('click', () => {
  createRainbowColor();
});

// Mouse event
const gridElements = document.querySelectorAll('.grid-element');

gridElements.forEach((element) => {
  element.addEventListener('mouseover', () => {
    if (changeColor === setColor || changeColor === 'black') {
      element.style.backgroundColor = changeColor;
    } else {
      createRainbowColor();
      element.style.backgroundColor = changeColor;
    }
  });
});

// Clear grid color
btnClear.addEventListener('click', () => {
  gridElements.forEach((element) => (element.style.backgroundColor = 'white'));
  changeColor = defaultColor;
});

// Slider grid size
