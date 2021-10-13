var circles = [];
var rectangle = [];

function setup() {
  createCanvas(1800, 1000);
}

function draw() {
  background(0);

  //fill(color(random(255), random(255), random(255)))
  fill("yellow");
  
  var index1 = 0;
  while(index1 < circles.length) {
    //ellipse(circles[index1].x, circles[index1].y, random(1, 50));
    //ellipse(circles[index1].x, circles[index1].y, circles[index1].d);
    //ellipse(random(0, 2000), circles[index1].y, random(0, 80));
    //ellipse(circles[index1].x, random(0, 1000), random(0, 80));
	  index1 += 1;
  }
  

  var index2 = 0;
  while(index2 < rectangle.length) {
    rect(rectangle[index2].x, rectangle[index2].y, rectangle[index2].h, rectangle[index2].w);
	  index2 += 1;
    //index1 += 1;
  }

  if (mouseIsPressed) {
    //if(index1 % 2 == 1){
      rectangle[rectangle.length] = { x: mouseX, y: mouseY, w: random(0, 150), h:random(0, 150)}
    //} else {
     // circles[circles.length] = { x: mouseX, y: mouseY, d: random(0, 80)}
    //}
  }
/*
  if (mouseIsPressed) {
      circles[circles.length] = { x: mouseX, y: mouseY, d: random(0, 40)}
  }
  */
}
