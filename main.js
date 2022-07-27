canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

var mouseEvent = "empty";
var last_position_of_X , last_position_of_y;

var width = screen.width;
new_width = screen.width - 70;
new_height = screen.height - 300;

color = document.getElementById("color").value;
width_of_line = 3;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    console.log(color);
    mouseEvent = "mousedown";
}

canvas.addEventListener("mouseleave", my_mouseLeave);

function my_mouseLeave(e)
{
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mouseup", my_mouseUp);

function my_mouseUp(e)
{
    mouseEvent = "mouseup";
}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
{
    current_position_of_mouse_X = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_Y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

    console.log("Current_position_of_X_and_Y_coordinates =");
    console.log("x=" + current_position_of_mouse_X + "y= " + current_position_of_mouse_Y);
    ctx.arc(current_position_of_mouse_X, current_position_of_mouse_Y, 40, 0 , 2*Math.PI);
    ctx.stroke();
    }

}

if(width < 992);
{
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart()
{
    console.log(my_touchstart);
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e)
{
    current_position_of_touch_X = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_Y = e.touches[0].clientY - canvas.offsetTop;


        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

    console.log("Current_position_of_X_and_Y_coordinates =");
    console.log("x=" + current_position_of_touch_X + "y= " + current_position_of_touch_Y);

    ctx.arc(current_position_of_touch_X, current_position_of_touch_Y, 40, 0 , 2*Math.PI);
    ctx.stroke();

}
function clear_area()
{
   canvas = ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
}