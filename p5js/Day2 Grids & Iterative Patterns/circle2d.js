let slider;

function setup() {
  slider = createSlider(0, 255, 100);
  slider.position(10, 10);
  slider.style('width', '80px');
  createCanvas(800, 800);
  background(51);
  let width = 100;
  let height = 100;
  let c = color(255, 204, 0);
  fill(c);
} 

function draw() {
  let val = slider.value();
  for (let x = 20; x < width; x+=40) {
    for (let y = 20; y < height; y+=40) {
      circle(x, y, random(0, val));
    }
  }
}
