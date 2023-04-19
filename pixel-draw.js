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

// Choose pen color
let penColor = '#000000';

const colorPicker = document.querySelector("#colorpicker")
colorPicker.addEventListener("input", function(event){
  penColor = event.target.value;
  console.log(penColor);
});


// Draw
const gridSquare = document.querySelectorAll('.grid-squares');

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

// Eraser tool
let erase = document.querySelector('#eraser-button');
erase.addEventListener('click', () => penColor = '#ffffff')

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
