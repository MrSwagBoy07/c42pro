var r = 0;
var g = 50;
var b=255;



function setup() {
  createCanvas(800,400);
 

}

function draw() {
  background(r,g,b);  
  r=map(mouseX,0,1200,0,255);
  g=map(mouseX,50,900,0,255);
  b=map(mouseX,100,600,0,255);
  fill("white")
  ellipse(mouseX,mouseY,10,10);

 


  drawSprites();
}