// color input
const colorPicker = document.getElementById('colorPicker');
// size input
const sizePicker = document.getElementById('sizePicker');
// When the user write the Height and width and press the Sumbit button, this call the makeGrid function 
document.querySelector('input[type="submit"]').addEventListener('click', Submit);
function Submit(event){
  event.preventDefault();
  makeGrid();
}
function makeGrid() {
  // Define variables 
  const canvas = document.getElementById('pixelCanvas');
  var Height = document.getElementById('inputHeight').value;
  var Width = document.getElementById('inputWidth').value;
  grid.innerHTML=null;

  // Grid Process 
  for (var v = 0; v < Height; v++){
    var row = document.createElement('tr')
    canvas.appendChild(row);
    for(var h = 0; h < Width; h++){
      var colum = document.createElement('td')
      // ColorPicker Process
      colum.addEventListener("click",function(eve) {
        var color = colorPicker.value;
        eve.target.style.backgroundColor = color;
      });
      canvas.lastChild.appendChild(colum);
    }
  }
} 
