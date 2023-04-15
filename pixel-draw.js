let gridContainer = document.querySelector('.grid-container');
let gridNum = 16;

// Create initial grid
function createGrid() {
  for(i = 0; i < Math.pow(gridNum, 2); i++){
    let gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-squares');
    gridSquare.style.width = `calc(100% / ${gridNum})`;
    gridContainer.appendChild(gridSquare);
  }
}

createGrid();

let gridSquare = document.querySelectorAll('.grid-squares');
let currentColor = '#0066ff';

function draw() {
  gridSquare.forEach(pixel => {
    pixel.addEventListener('mousedown', changeColor);
    pixel.addEventListener('mousemove', changeColor);
  })
}

function changeColor() {
  gridSquare.forEach(() => {
      this.style.backgroundColor = currentColor
  }
)}

function clearGrid() {
  let clearButton = document.querySelector('#clear-button');
  clearButton.addEventListener('click', () => {
    gridSquare.forEach(pixel => {
      pixel.style.backgroundColor = '#ffffff';
    })
  })
}
clearGrid();
draw();