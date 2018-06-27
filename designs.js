// Select color input
// Select size input
var height, width, color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event){
    event.preventDefault(); //Prevent the grid to be deleted after it is created
    height = $('#inputHeight').val(); //Input value inside the input box to add rows 
    width = $('#inputWeight').val(); // Input value inside the 2nd input box to add columns
    makeGrid(height, width);
})

function makeGrid(x, y) {
    $('tr').remove();

// Your code goes here!
    for (var i = 1; i <= x; i++){
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>'); //Create a row of cells
        for (var j = 1; j <= y; j++){
            $('#table' + i).append('<td></td>'); //Create a column of cells
        }
    }
    // Add color to cell
    $('td').click(function addColor(){
        color = $('#colorPicker').val(); 

        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        }else {
            $(this).attr('style', 'background-color:' + color);
        }
    })
}
