function setup() {
  createCanvas(800, 800, WEBGL);
  //background(51);
  let width = 100;
  let height = 100;
} 

function draw() {
  for (let x = 20; x < width; x+=40) {
    for (let y = 20; y < height; y+=40) {
      //noStroke()
      //let c = color(255, 204, 0);
      //fill(c);
      background(205, 102, 94);
      sphere(40);
    }
  }
}
