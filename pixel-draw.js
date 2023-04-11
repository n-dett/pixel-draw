let gridContainer = document.querySelector('.grid-container');



function createGridRow() {
  let gridRow = document.createElement('div');
  gridRow.classList.add('grid-row');
  
  for(i = 0; i < 16; i++){
    let gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-squares');
    gridRow.appendChild(gridSquare);
  }
  gridContainer.appendChild(gridRow);
}

function createGrid() {
    for(j = 0; j < 16; j++){
      createGridRow()
    }
}

createGrid();