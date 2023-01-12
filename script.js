'use strict';

// Important variables
const gridContainer = document.querySelector('.grid-container');

const slider = document.querySelector('#myRange');
const sliderDisplay = document.querySelector('#sliderDisplay');

const btnColor = document.querySelector('#btn-color');
const btnRainbow = document.querySelector('#btn-rainbow');
const btnClear = document.querySelector('#btn-clear');

// Defaults
const defaultGridSize = 16;
const defaultColor = 'black';

// Setup Grid

function setupGrid(gridSize) {
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (let i = 0; i < gridSize * gridSize; i++) {
    let gridElement = document.createElement('div');
    gridElement.classList.add('grid-element', 'border');
    gridContainer.append(gridElement);
  }

  updateSliderDisplay();
}

setupGrid(slider.value);

function updateSliderDisplay() {
  sliderDisplay.textContent = slider.value;
}

slider.addEventListener('mousemove', () => {
  sliderDisplay.textContent = slider.value;
  updateSliderDisplay();
  removeGrid();
  setupGrid(slider.value);
});

// Color Management
let changeColor = defaultColor;
let setColor;

// Set Color
btnColor.addEventListener('click', () => {
  setColor = prompt('Set Color:');
  console.log('New color =', setColor);
  changeColor = setColor;
});

// Create Rainbow
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

function changeColorGrid(element) {
  if (changeColor === setColor || changeColor === 'black') {
    element.style.backgroundColor = changeColor;
  } else {
    createRainbowColor();
    element.style.backgroundColor = changeColor;
  }
}

gridElements.forEach((element) => {
  element.addEventListener('mouseover', (e) => changeColorGrid(e.target));
});

// Clear grid color
function removeGrid() {
  gridContainer.innerHTML = '';
}

function clearGrid() {
  gridElements.forEach((element) => element.removeAttribute('style'));
  // changeColor = defaultColor;
}

btnClear.addEventListener('click', clearGrid);

// Slider grid size
