
let slider;

function setup() {
  background(51);
  createCanvas(800,600);
  slider = createSlider(0, 255, 100);
  slider.position(10, 10);
  slider.style('width', '80px');
}


function draw() {
  let val = slider.value();
  background(51);
  loadPixels();
  frameRate(2);
  let c = color(random(0,250), random(0,250), random(0,250));
  //Quelle -> https://p5js.org/reference/#/p5/pixels
  let d = pixelDensity();
  let halfImage = 8 * (width * d) * (height / 2 * d);
  //let halfImage = random(100000,5000000);
  console.log(halfImage);
  for (let i = 0; i < halfImage; i += val) {
    pixels[i] = red(c);
    pixels[i + 1] = green(c);
    pixels[i + 2] = blue(c);
    pixels[i + 3] = alpha(c);
  }
  updatePixels();
}



