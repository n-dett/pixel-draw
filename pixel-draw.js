const gridContainer = document.querySelector('.grid-container');
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

// Draw
const gridSquare = document.querySelectorAll('.grid-squares');
let penColor = '#0066ff';

gridSquare.forEach(square => {
  square.addEventListener('mousedown', changeColor)
})

gridContainer.addEventListener('mousedown', () => {
  gridSquare.forEach(square => {
    square.addEventListener('mouseover', changeColor);
  });
});

gridContainer.addEventListener('mouseup', () => {  
  gridSquare.forEach(square => {
    square.removeEventListener('mouseover', changeColor);
  });
});

function changeColor() {
  this.style.backgroundColor = penColor;
}


// Reset grid to white
function clearGrid() {
  let clearButton = document.querySelector('#clear-button');
  clearButton.addEventListener('click', () => {
    gridSquare.forEach(square => {
      square.style.backgroundColor = '#ffffff';
    })
  })
}

clearGrid();
