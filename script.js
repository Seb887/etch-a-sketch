'use strict';

const DEFAULT_COLOR = '#333333';
const DEFAULT_MODE = 'black';
const DEFAULT_SIZE = 32;

let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;

function setCurrentColor(newColor) {
  currentColor = newColor;
}

function setCurrentMode(newMode) {
  currentMode = newMode;
}

function setCurrentSize(newSize) {
  currentSize = newSize;
}

function clearGrid() {
  gridContainer.innerHTML = '';
  setupGrid(currentSize);
}

function reloadGrid() {
  clearGrid();
  setCurrentSize(currentSize);
}

const gridContainer = document.querySelector('.grid-container');
const blackBtn = document.querySelector('#btn-black');
const rainbowBtn = document.querySelector('#btn-rainbow');
const clearBtn = document.querySelector('#btn-clear');
const slider = document.querySelector('#myRange');
const sliderDisplay = document.querySelector('#sliderDisplay');

blackBtn.onclick = () => setCurrentMode('black');
rainbowBtn.onclick = () => setCurrentMode('rainbow');
clearBtn.onclick = () => clearGrid();
slider.onchange = () => reloadGrid();
slider.onclick = () => setCurrentSize(slider.value);

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function setupGrid(gridSize) {
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (let i = 0; i < gridSize * gridSize; i++) {
    let gridElement = document.createElement('div');
    gridElement.classList.add('grid-element', 'border');
    gridElement.addEventListener('mouseover', changeColor);
    gridElement.addEventListener('mousedown', changeColor);
    gridContainer.appendChild(gridElement);
  }

  refreshSliderValue();
}

function changeColor(e) {
  if (e.type === 'mouseover' && !mouseDown) return;
  if (currentMode === 'rainbow') {
    console.log(currentMode);
    let randomR = Math.floor(Math.random() * 256);
    let randomG = Math.floor(Math.random() * 256);
    let randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  } else if (currentMode === 'black') {
    console.log(currentMode);
    e.target.style.backgroundColor = currentColor;
  }
}

function refreshSliderValue() {
  sliderDisplay.textContent = slider.value;
}

window.onload = () => {
  setupGrid(currentSize);
};
