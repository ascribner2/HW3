var minCol;
var maxCol;
var minRow;
var maxRow;
var count = 0;
var check;

function makeTable() { //table creation function definition
    check = 0; //if equals 1 then there is invalid input and function returns 
    //Setup Input START
    //multiply all input by 1 to make sure they convert to numbers

    minCol = document.getElementById('min_col').value; //set minCol
    //minCol value Validation
    if ((minCol * 1) < -50 || (minCol * 1) > 50) {
        document.getElementById('min_col').style.backgroundColor = "red";
        document.getElementById('min_col').value = "Out of Range -50 to 50";
        check = 1;
    } else if (isNaN(minCol * 1)) {
        document.getElementById('min_col').style.backgroundColor = "red";
        document.getElementById('min_col').value = "Not A Number";
        check = 1;
    } else if (minCol == '') {
        document.getElementById('min_col').style.backgroundColor = "red";
        document.getElementById('min_col').value = "Blank";
        check = 1;
    } else {
        document.getElementById('min_col').style.backgroundColor = "white";
    }

    maxCol = document.getElementById('max_col').value; //set maxCol
    //maxCol Value validation
    if((maxCol * 1) < -50 || (maxCol * 1) > 50){
        document.getElementById('max_col').style.backgroundColor = "red";
        document.getElementById('max_col').value = "Out of Range -50 to 50";
        check = 1;
    } else if (isNaN(maxCol * 1)) {
        document.getElementById('max_col').style.backgroundColor = "red";
        document.getElementById('max_col').value = "Not A Number";
        check = 1;
    } else if (maxCol == '') {
        document.getElementById('max_col').style.backgroundColor = "red";
        document.getElementById('max_col').value = "Blank";
        check = 1;
    } else {
        document.getElementById('max_col').style.backgroundColor = "white";
    }

    //This if-statement checks for if min > max
    if((minCol * 1) > (maxCol * 1) && check != 1){
        document.getElementById('min_col').style.backgroundColor = "red";
        document.getElementById('max_col').style.backgroundColor = "red";
        document.getElementById('min_col').value = "Min Col > Max Col";
        document.getElementById('max_col').value = "Min Col > Max Col";
        check = 1;
    } else if (check == 0){
        document.getElementById('min_col').style.backgroundColor = "white";
        document.getElementById('max_col').style.backgroundColor = "white";
    }

    minRow = document.getElementById('min_row').value; //set minRow
    //minRow value validation
    if((minRow * 1) < -50 || (minRow * 1) > 50){
        document.getElementById('min_row').style.backgroundColor = "red";
        document.getElementById('min_row').value = "Out of Range -50 to 50";
        check = 2;
    } else if (isNaN(minRow * 1)) {
        document.getElementById('min_row').style.backgroundColor = "red";
        document.getElementById('min_row').value = "Not A Number";
        check = 2;
    } else if (minRow == '') {
        document.getElementById('min_row').style.backgroundColor = "red";
        document.getElementById('min_row').value = "Blank";
        check = 2;
    } else {
        document.getElementById('min_row').style.backgroundColor = "white";
    }

    maxRow = document.getElementById('max_row').value; //set maxRow
    //maxRow value validation
    if((maxRow * 1) < -50 || (maxRow * 1) > 50){
        document.getElementById('max_row').style.backgroundColor = "red";
        document.getElementById('max_row').value = "Out of Range -50 to 50";
        check = 2;
    } else if (isNaN(maxRow * 1)) {
        document.getElementById('max_row').style.backgroundColor = "red";
        document.getElementById('max_row').value = "Not A Number";
        check = 2;
    } else if (maxRow == '') {
        document.getElementById('max_row').style.backgroundColor = "red";
        document.getElementById('max_row').value = "Blank";
        check = 2;
    } else {
        document.getElementById('max_row').style.backgroundColor = "white";
    }

    //This if-statement checks for if min > max
    if((minRow * 1) > (maxRow * 1) && check != 2){
        document.getElementById('min_row').style.backgroundColor = "red";
        document.getElementById('max_row').style.backgroundColor = "red";
        document.getElementById('min_row').value = "Min Row > Max Row";
        document.getElementById('max_row').value = "Min Row > Max Row";
        check = 2;
    } else if (check == 0){
        document.getElementById('min_row').style.backgroundColor = "white";
        document.getElementById('max_row').style.backgroundColor = "white";
    }

    if(check != 0){
        return;
    } else {
        minCol *= 1;
        maxCol *= 1;
        minRow *= 1;
        maxRow *= 1;
    }

    //Setup Input END

    

    const table = document.createElement("table"); //creates table element

    //Column Header SECTION START
    const colHeaderRow = document.createElement("tr"); //This is a row for the headers in the columns

    //This creates a blank space START
    const blankSpace = document.createElement("th"); //new header for blank space

    //blank space "text"
    const blankText = document.createTextNode(" ");
    blankSpace.appendChild(blankText);

    //style blank space
    blankSpace.style.backgroundColor = "white";

    colHeaderRow.appendChild(blankSpace); //add blank
    //Blank Space END

    for(let currentCol = minCol; currentCol <= maxCol; currentCol++){ 
        //This creates the header for each Column
        const colHeader = document.createElement("th"); //new header

        //header text
        const colHeaderText = document.createTextNode(currentCol.toString());
        colHeader.appendChild(colHeaderText);

        //style header
        colHeader.style.border = "2px solid black";
        colHeader.style.backgroundColor = "red";
        colHeaderRow.appendChild(colHeader); //add header
        //Column header END

        colHeaderRow.appendChild(colHeader);
    }

    table.appendChild(colHeaderRow);//Adds column header
    //Column Header SECTION END

    //This for-loop iterates over the rows
    for(let currentRow = minRow; currentRow <= maxRow; currentRow++ ){
        const row = document.createElement("tr"); 

        //This creates the header for each row
        const rowHeader = document.createElement("th"); //new header

        //header text
        const rcnText = document.createTextNode(currentRow.toString());
        rowHeader.appendChild(rcnText);

        //style header
        rowHeader.style.border = "2px solid black";
        rowHeader.style.columnWidth = "40px";
        rowHeader.style.padding = "2px";
        rowHeader.style.backgroundColor = "red";
        row.appendChild(rowHeader); //add header
        //Row header END

        //This for-loop fills in each column
        for(let currentCol = minCol; currentCol <= maxCol; currentCol++){
            const cell = document.createElement("td"); //new cell
            
            const num = currentRow * currentCol; //calculate cell

            //adds text to the cell
            const cellText = document.createTextNode(num.toString()); 
            cell.appendChild(cellText);

            //styles the cells
            cell.style.border = "2px solid black";
            cell.style.columnWidth = "40px";
            cell.style.padding = "2px";
            cell.style.textAlign = "center";

            row.appendChild(cell); //adds the cell to end of the line of cells
        } //Column For-Loop END

        table.appendChild(row); //Adds the row to the table
    }

    const tableElement = document.getElementById('table'); //gets table div

    //table.setAttribute("border", 2); //table border

    //If statement to check whether a table already exists
    if(count > 0){ //replaces current table
        tableElement.replaceChild(table, tableElement.lastChild);
    } else { //creates table if one doesnt exist
        tableElement.appendChild(table);
        count++;
    }
}