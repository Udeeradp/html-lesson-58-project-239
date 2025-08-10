let particles = [];
let myColors = ["red", "green", "yellow", "blue"];

function setup() {
  let cnv = createCanvas(1200, 1200);
  cnv.position(300, 0, "fixed");
}

function createParticle() {
  for (let i = 0; i < particles.length; i++) {
    let c = random(myColors);
    fill(c);
    noStroke();
    circle(particles[i][0], particles[i][1], 20);
  }
}

function draw() {
  background("#730201");
  createParticle();
}

function mouseDragged() {
  particles.push([mouseX, mouseY]);
}
