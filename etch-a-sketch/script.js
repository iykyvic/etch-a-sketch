
$(document).ready(function(){
    var width = 40;
    var height = 40;
    function userInput(){
        width = prompt("please enter a new sketch box width");
        height= prompt("please enter a new sketch box height");
    }
    $("#reset").on("click", function(e){
        e.preventDefault();
        userInput();
    });
    var numbersBoxes = 960 / width;
    var boxes = '<div class="box" style="width: ' + width + ',' + height: ' + height + 'px"></div>';
    $("#divContainer").prepend(boxes.repeat(numbersBoxes));
    
});
