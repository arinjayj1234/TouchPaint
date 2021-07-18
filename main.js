canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
lwidth = 3;
radius = 8;

var width = screen.width;
new_width = screen.width-70;
new_height = screen.height-300;
if (width<992) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) {
    console.log("my_touchstart")
    color = document.getElementById("color").value;
    lwidth = document.getElementById("lwidth").value;
    radius = document.getElementById("radius").value;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) {
    cpox = e.touches[0].clientX - canvas.offsetLeft;
    cpoy = e.touches[0].clientY - canvas.offsetTop;
    console.log("Current Position of X and Y Coordinate = ");
    console.log("X = "+cpox+"Y = "+cpoy);
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = lwidth;
    ctx.arc(cpox, cpoy, radius, 0, 2*Math.PI);
    ctx.stroke();
}

function cleararea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
