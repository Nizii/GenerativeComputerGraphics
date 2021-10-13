let canvas;

function setup() {
  background("black");
  fill(255, 204, 0);
}

function draw(){
  createCanvas(800, 800);
  frameRate(1);
  fill(255, 204, 0);
  angleMode(DEGREES);
  translate(width / 2, height / 2);
  //Shape of The Head
  zeichneKreis();
  //Eyes
  noStroke()
  ellipse(random(-10, -150), random(-50,-200), random(5,150), random(5,150));
  ellipse(random(10, 150), random(-50,-150), random(35,150), random(35,150));
  //Mouth
  let rand = random(0,1);
  if(rand < 0.33) {
    stroke(255, 204, 0);
    strokeWeight(random(1,100));
    fill(255, 204, 0);
    line(random(-150, 0), random(50, 150), random(150, 20), random(50, 150));
  } else if (rand < 0.66 && rand > 0.33) {
    fill(255, 204, 0);
    ellipse(random(-200, 150), random(100, 80), random(5,150), random(5,150));
  } else {
    noStroke();
    fill(255, 204, 0);
    rect(random(-140,140), random(50,170), random(3,150), random(3,150));
  }  
}

// Draw a Circle
function zeichneKreis() {
  let anzahlPunkte = random(4, 150);
  let grössePunkt = random(2, 40);
  let radius = random(300, 350);;
  for (let i = 0; i < anzahlPunkte; i++) {
    push();
    rotate(i * (360 / anzahlPunkte));
    noStroke();
    ellipse(0, radius+random(-50,50), grössePunkt, grössePunkt);
    pop();
  }
}





