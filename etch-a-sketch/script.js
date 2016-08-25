
$(document).ready(function(){
    var width = 40;
    var height = 40;
    function userInput(){
        width = prompt("please enter a new sketch box width");
        height= prompt("please enter a new sketch box height");
        numbersBoxes = 960 / width;
        boxes = '<div class="box" style="width: ' + width + 'px,' + 'height: ' + height + 'px"></div>';
        $("#divContainer").prepend(boxes.repeat(numbersBoxes));
    }
    
    var numbersBoxes = 960 / width;
    var boxes = '<div class="box" style="width: 40px, height: 40px"></div>';
    $("#divContainer").prepend(boxes.repeat(numbersBoxes));
    
    $("#reset").on("click", function(e){
        e.preventDefault();
        $(".box").remove();
        userInput();
    });
    
});
