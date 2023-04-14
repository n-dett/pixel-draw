let gridContainer = document.querySelector('.grid-container');
let gridNum = 16;


function creategridColumn() {
  let gridColumn = document.createElement('div');
  gridColumn.classList.add('grid-column');
  
  for(i = 0; i < gridNum; i++){
    let gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-squares');
    gridColumn.appendChild(gridSquare);
  }
  gridContainer.appendChild(gridColumn);
}


function createGrid() {
    for(j = 0; j < gridNum; j++){
      creategridColumn()
    }
}


createGrid();






// function createGrid() {
//   for(i = 0; i < Math.pow(gridNum, 2); i++){
//     let gridSquare = document.createElement('div');
//     gridSquare.classList.add('grid-squares');
//     gridContainer.appendChild(gridSquare);
//   }
// }


// createGrid();