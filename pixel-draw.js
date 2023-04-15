let gridContainer = document.querySelector('.grid-container');
let gridNum = 22;


function createGrid() {
  for(i = 0; i < Math.pow(gridNum, 2); i++){
    let gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-squares');
    gridSquare.style.width = `calc(100% / ${gridNum})`;
    gridContainer.appendChild(gridSquare);
  }
}

createGrid();