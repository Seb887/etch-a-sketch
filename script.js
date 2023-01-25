'use strict';

const DEFAULT_COLOR = '#333333';
const DEFAULT_MODE = 'color';
const DEFAULT_SIZE = 16;

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
const colorBtn = document.querySelector('#btn-color');
const rainbowBtn = document.querySelector('#btn-color');
const clearBtn = document.querySelector('#btn-clear');

clearBtn.onclick = () => clearGrid();

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
}

function changeColor(e) {
  if (e.type === 'mouseover' && !mouseDown) return;
  if (currentMode === 'rainbow') {
    let randomR = Math.floor(Math.random() * 256);
    let randomG = Math.floor(Math.random() * 256);
    let randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomb})`;
  } else if (currentMode === 'color') {
    e.target.style.backgroundColor = currentColor;
  }
}

setupGrid(currentSize);
