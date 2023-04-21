// Set initial grid
const gridContainer = document.querySelector('.grid-container');
const gridSlider = document.querySelector('#grid-slider')
const sliderLabel = document.querySelector('#slider-label');

sliderLabel.textContent = gridSlider.value;
let gridNum = 16

createGrid();


// Change grid size
gridSlider.addEventListener('input', () => {
  sliderLabel.textContent = gridSlider.value;
  gridNum = gridSlider.value;
  removeSquares(gridContainer);
  createGrid();
  // draw();
})

function removeSquares(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}


// Create grid
function createGrid() {
  for(i = 0; i < Math.pow(gridNum, 2); i++){
    let gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-squares');
    gridSquare.style.width = `calc(100% / ${gridNum})`;
    gridContainer.appendChild(gridSquare);
  }
  const gridSquares = document.querySelectorAll('.grid-squares');

  gridSquares.forEach(square => {
    square.addEventListener('mousedown', changeColor)
  })

  gridContainer.addEventListener('mousedown', () => {
    gridSquares.forEach(square => {
      square.addEventListener('mouseover', changeColor);
    });
  });

  gridContainer.addEventListener('mouseup', () => {  
    gridSquares.forEach(square => {
      square.removeEventListener('mouseover', changeColor);
    });
  });

  function changeColor() {
    this.style.backgroundColor = penColor;
  }

  clearGrid();
}


// Choose pen color
let penColor = '#000000';
let penButton = document.querySelector('#pen-button');

const colorPicker = document.querySelector("#colorpicker")
colorPicker.addEventListener("input", function(event){
  penColor = event.target.value;
  console.log(penColor);
});

// Select pen tool
penButton.addEventListener('click', () => {
  penColor = colorPicker.value;
})


// Draw on mousedown or mousedown and drag

// const gridSquares = document.querySelectorAll('.grid-squares');

// gridSquares.forEach(square => {
//   square.addEventListener('mousedown', changeColor)
// })

// gridContainer.addEventListener('mousedown', () => {
//   gridSquares.forEach(square => {
//     square.addEventListener('mouseover', changeColor);
//   });
// });

// gridContainer.addEventListener('mouseup', () => {  
//   gridSquares.forEach(square => {
//     square.removeEventListener('mouseover', changeColor);
//   });
// });

// function changeColor() {
//   this.style.backgroundColor = penColor;
// }


// Select eraser tool
let erase = document.querySelector('#eraser-button');
erase.addEventListener('click', () => penColor = '#ffffff')


// Clear grid button
function clearGrid() {
  const gridSquares = document.querySelectorAll('.grid-squares');
  let clearButton = document.querySelector('#clear-button');
  
  clearButton.addEventListener('click', () => {
    gridSquares.forEach(square => {
      square.style.backgroundColor = '#ffffff';
    })
  })
}


