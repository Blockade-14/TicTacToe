var X = "X";
var O = "O";
var turn = X;
var cells = document.querySelectorAll(".borderLine");
var matrix = [
    [cells[0], cells[1], cells[2]],
    [cells[3], cells[4], cells[5]],
    [cells[6], cells[7], cells[8]]
]

window.addEventListener("click", function(e){

    var cell = e.target;

    if( cell.innerHTML !== "" ){
        return;
    }

    if( turn === X ){
        cell.innerHTML = X;
        turn = O;
        cell.classList.add("signX");
    }else{
        cell.innerHTML = O;
        turn = X;
        cell.classList.add("signO");
    }

    var win = checkWin();

    if( win ){
        alert( "Winner is: " + win );

        newGame();
    }
    else if( hasEmpty() === false){
        alert( "Drow" );

        newGame();
    }
})

function checkWin(){

    var result;

    for( var i=0; i<3; i++ ){
        result = checkRow(i);
        if( result ) return result;

        result = checkColumn(i);
        if( result ) return result;
    }

    result = checkDiagonal(true);
    if( result ) return result;

    result = checkDiagonal();
    if( result ) return result;

    return false;

}
        
function checkRow(num){

    var row = matrix[num];

    for( var i=0; i<row.length; i++ ){
        if( row[i].innerHTML === "" || row[i].innerHTML !== row[0].innerHTML ){
            return false;
        }
    }

    return row[0].innerHTML;
}

function checkColumn(num){

    var column = [matrix[0][num], matrix[1][num], matrix[2][num]];

    for( var i=0; i<column.length; i++){
        if( column[i].innerHTML === "" || column[i].innerHTML !== column[0].innerHTML){
            return false;
        }
    }

    return column[0].innerHTML;
}

function checkDiagonal(main){

    var d1 = [matrix[0][0], matrix[1][1], matrix[2][2]];
    var d2 = [matrix[0][2], matrix[1][1], matrix[2][0]];
    var d = (main) ? d1 : d2;

    for( var i=0; i<d.length; i++){
        if( d[i].innerHTML === "" || d[i].innerHTML !== d[0].innerHTML){
            return false;
        }
    }

    return d[0].innerHTML;  
}

function newGame(){

    for( var i=0; i<cells.length; i++ ){
        cells[i].innerHTML = "";
        cells[i].classList.remove("signX");
        cells[i].classList.remove("signO");
    }

    turn = X;
}   

function hasEmpty(){

    for( var i=0; i<cells.length; i++ ){
        if( cells[i].innerHTML === "" ){
            return true;
        }
    }

    return false;
}  










