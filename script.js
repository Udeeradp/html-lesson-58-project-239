let particles = [];
let myColors = ["red", "green", "yellow", "blue"];

function setup() {
  let cnv = createCanvas(1200, 1200); 
  cnv.position(300, 0, "fixed");
  
  // Create some particles
  for (let i = 0; i < 100; i++) {
    particles.push([random(width), random(height)]);
  }
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
