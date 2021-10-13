
var rectangle = [];

function setup() {
  createCanvas(800, 500);
}

function draw() {
  fill("pink");

  var index2 = 0;
  while(index2 < rectangle.length) {
    rect(rectangle[index2].x, rectangle[index2].y, rectangle[index2].h, rectangle[index2].w);
	  index2 += 1;
  }

  if (mouseIsPressed) {
      rectangle[rectangle.length] = { x: mouseX, y: mouseY, w: random(1, 100), h:random(1, 100)}
  }
}



