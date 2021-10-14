

function setup() { 
  createCanvas(600, 600);
  rectMode(CENTER);
} 

function draw() { 
  background(220);

  translate (width/2, height/2);
  //noStroke();

  let a = color('#008B8B');
  fill(a);
  rotate(-hour());
	rect(0, 0, 300, 300);

  let b = color('#FF8C00');
  fill(b);
  rotate(-minute());
	rect(0, 0, 200, 200);

  let c = color('#556B2F');
  fill(c);
  rotate(-second());
	rect(0, 0, 100, 100);

  let d = color('#8B0000');
  fill(d);
  rotate(-millis());
	rect(0, 0, 50, 50);
}
