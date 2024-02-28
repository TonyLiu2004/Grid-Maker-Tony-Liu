// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

//insert cell at
function addCell(input){
    let td = document.createElement("td");
    td.onclick = function(){td.style.backgroundColor = colorSelected;}
    input.appendChild(td);
}

// Add a row
function addR() {
    let row = document.createElement("tr");
    for(let i = 0; i < numCols; i++){
        addCell(row);
    }
    if(numCols==0){ //first cell
        addCell(row);
        numCols++;
    }
    document.getElementById("grid").appendChild(row);
    numRows++;
    console.log(numRows, numCols);
}

// Add a column
function addC() {
    if(numRows == 0){ //first cell
        addR();
        console.log("called addr");
        return;
    }
    let grid = document.getElementById("grid");
    for(let i = 0; i < numRows; i++){
        addCell(grid.children[i]);
    }
    numCols++;
    console.log(numRows, numCols);
}

// Remove a row
function removeR() {
    if(numRows < 1) return;
    document.getElementById("grid").deleteRow(numRows-1);
    numRows--;
    if(numRows == 0) clearAll();
    console.log(numRows, numCols);
}

// Remove a column
function removeC() {
    if(numCols < 1) return;
    let grid = document.getElementById("grid");
    for(let i = 0;i < numRows; i++){
        grid.children[i].deleteCell(numCols-1);
    }
    numCols--;
    if(numCols == 0) clearAll();
    console.log(numRows, numCols);
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}