'use strict';

const gridContainer = document.querySelector('.grid-container');

function setupGrid(gridSize) {
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (let i = 0; i < gridSize * gridSize; i++) {
    let gridElement = document.createElement('div');
    gridElement.classList.add('grid-element', 'border');
    gridContainer.appendChild(gridElement);
  }
}

setupGrid(8);
