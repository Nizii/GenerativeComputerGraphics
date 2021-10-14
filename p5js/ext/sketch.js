/*
  author Nizam Özdemir
*/

var rectangle = [];
// count of every frame in draw function
var drawCount;
// threshold for the transition draw background to draw houses
var threshold;
// x coordinates of the rect of the house
var houseX;
// y coordinates of the rect of the house
var houseY;
// counter for the height of the house one count is one layer
var houseHeightCunt;
// Var to start the programm
var start = 0;

function setup() {
  createCanvas(800, 800);
  background("yellow");
  fill("yellow");
  houseX = random(0,200);
  houseY = random(0,200);
  houseHeightCunt = 0;
  threshold = 1000;
  drawCount = 0;
  button = createButton('Start');
  button.position(0, 850);
  button.mousePressed(startbutton);
}

function startbutton() {
  start = 1;
}

function draw() {
  if(start == 1) {
    drawCount += 1;
    var index = 0;
    while(index < rectangle.length) {
      rect(rectangle[index].x, rectangle[index].y, rectangle[index].h, rectangle[index].w);
      index += 1;
    }
    // if frameCount < than 1000 frames draw background after 1000 loops draw houses
    if(drawCount < threshold){
      setBackground();
    }else{
      buildHouse();
    }
  }
}

// set rectangel by random for background
function setBackground() {
  rectangle[rectangle.length] = { x: random(1, 850), y: random(1, 850) , w: random(1, 80), h:random(1, 80)}
}

function buildHouse() {
  houseHeightCunt += 1;
  // each layer is shifted by certain coordinates, so that the house looks like a house when you look down from above
  houseX += random(0,2);
  houseY += random(3,0);
  // after 29 layers have been laid, the new position of the house will determined by random
  if(houseHeightCunt % 30 == 0) {
    houseX = random(1,750);
    houseY = random(1,750);
  // one layer of a house per frame will laid here, houses have different sizes depends on the var "houseHeightCunt"
  } else if (houseHeightCunt < 1000) {
    rectangle[rectangle.length] = { x: houseX, y: houseY , w: random(0, 100), h: random(0, 100)}
  } else if (houseHeightCunt > 1000 && houseHeightCunt < 2000) {
    rectangle[rectangle.length] = { x: houseX, y: houseY , w: random(0, 60), h: random(0, 60)}
  } else if (houseHeightCunt > 2000 && houseHeightCunt < 2500) {
    rectangle[rectangle.length] = { x: houseX, y: houseY , w: random(0, 40), h: random(0, 40)}
  }
}

