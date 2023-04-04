
var last_position_of_x, last_position_of_y;
var width=screen.width;
var new_width=screen.width-70;
var new_height=screen.height-300;
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    canvas.addEventListener("mousedown", my_mousedown);
    
    function my_mousedown(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends

        mouseEvent = "mouseDown";
        function circle(mouse_x,mouse_y){
            ctx.beginPath();
            ctx.strokeStyle=color;
            ctx.lineWidth=2;
            ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
            ctx.stroke();   
        }
        function cleararea(){
            ctx.clearRect(0,0,canvas.width,canvas.height);
        }
    }