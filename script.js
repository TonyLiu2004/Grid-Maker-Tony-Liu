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
    if(numRows == 0) resetGrid();
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
    if(numCols == 0) resetGrid();
    console.log(numRows, numCols);
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    for(let i = 0;i < numRows; i++){
        for(let j = 0;j < numCols; j++){
            let cell = document.getElementById("grid").children[i].children[j];
            if(cell.style.backgroundColor == ""){
                cell.style.backgroundColor = colorSelected;
            }
        }
    }
}

// Fill all cells
function fillAll(){
    for(let i = 0;i < numRows; i++){
        for(let j = 0;j < numCols; j++){
            let cell = document.getElementById("grid").children[i].children[j];
            cell.style.backgroundColor = colorSelected;
        }
    }}

// Reset Grid
function resetGrid(){
    numRows = 0;
    numCols = 0;
    document.getElementById("grid").innerHTML = "";
}

// Clear all cells
function clearAll(){
    for(let i = 0;i < numRows; i++){
        for(let j = 0;j < numCols; j++){
            document.getElementById("grid").children[i].children[j].style.backgroundColor = "";
        }
    }
}