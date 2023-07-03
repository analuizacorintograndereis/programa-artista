
function setup() {

createCanvas(580, 400);

background("rgb(0,0,0)");

}

function draw() {

stroke("white");

fill("blue");

if(mouseIsPressed){

circle(mouseX, mouseY,20, 35);

}

}