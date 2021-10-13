let canvas;

function setup() {
  /*
  createCanvas(1000, 1000);
  fill("black");
  angleMode(DEGREES);
  translate(width / 2, height / 2);
  //Shape of The Head
  zeichneKreis();
  //Eyes
  ellipse(random(-10, -200), random(-50,-250), random(5,200), random(5,200));
  ellipse(random(10, 200), random(-50,-250), random(35,200), random(35,200));
  //Mouth
  let rand = random(0,1);
  if(rand < 0.33) {
    strokeWeight(random(1,100));
    line(random(-200, 0), random(50, 200), random(200, 20), random(50, 200));
  } else if (rand < 0.66 && rand > 0.33) {
    ellipse(random(-300, 250), random(130, 80), random(5,200), random(5,200));
  } else {
    rect(random(-140,140), random(50,220), random(3,150), random(3,150));
  }  
  */
}

function draw(){
  createCanvas(1000, 1000);
  frameRate(1);
  fill("black");
  angleMode(DEGREES);
  translate(width / 2, height / 2);
  //Shape of The Head
  zeichneKreis();
  //Eyes
  ellipse(random(-10, -200), random(-50,-250), random(5,200), random(5,200));
  ellipse(random(10, 200), random(-50,-250), random(35,200), random(35,200));
  //Mouth
  let rand = random(0,1);
  if(rand < 0.33) {
    strokeWeight(random(1,100));
    line(random(-200, 0), random(50, 200), random(200, 20), random(50, 200));
  } else if (rand < 0.66 && rand > 0.33) {
    ellipse(random(-300, 250), random(130, 80), random(5,200), random(5,200));
  } else {
    rect(random(-140,140), random(50,220), random(3,150), random(3,150));
  }  
}

// Draw a Circle
function zeichneKreis() {
  let anzahlPunkte = random(4, 150);
  let grössePunkt = random(2, 40);
  let radius = random(400, 450);;
  for (let i = 0; i < anzahlPunkte; i++) {
    push();
    rotate(i * (360 / anzahlPunkte));
    noStroke();
    ellipse(0, radius+random(-50,50), grössePunkt, grössePunkt);
    pop();
  }
}





