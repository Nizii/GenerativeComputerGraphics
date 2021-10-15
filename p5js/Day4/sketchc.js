
var circles = [];

function setup() {
  createCanvas(800, 500);
}

function draw() {
  fill("orange");
  
  var index1 = 0;
  while(index1 < circles.length) {
    circle(circles[index1].x, circles[index1].y, random(1, 5));
	  index1 += 1;
  }

  if (mouseIsPressed) {
     circles[circles.length] = {x: mouseX, y: mouseY, d: random(0, 100)}
  }
}


