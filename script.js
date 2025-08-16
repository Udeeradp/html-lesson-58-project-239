
let particles = [];
let myColors = ["red", "green", "yellow", "blue", "white"];
var song;

function setup() {
  let cnv = createCanvas(1200, 1200);
  cnv.position(300, 0, "fixed");
}

function createParticle() {
  for (let i = 0; i < particles.length; i++) {
    let c = random(myColors);
    fill(c);
    noStroke();
    circle(particles[i][0], particles[i][1], random(2, 15));
  }
}

function moveParticle(){
  for (var i = 0; i < particles.length; i++){
    particles[i][0] += particles[i][2];
    particles[i][1] += particles[i][3];
     
  }
  
}

function draw() {
  background("#730201");
  createParticle();
  moveParticle();
  text("Merry Chritsmas!", 300,400);
  textFont("Comfoter Brush", 100);
}

function mouseDragged() {
  for (var i = 0; i < 20; i++){
    var velocityX = random(-2, 2);
     var velocityY = random(-2, 2);
     particles.push([mouseX, mouseY, velocityX, velocityY]);
  }
}

function preload(){
  song= loadSound("https://cdn.glitch.global/6b8c59d7-9579-4df4-94f8-70a6f4995286/mal-mal-sariya-sandalindu-duggannarala.mp3?v=1743871673805")
}

function mouseReleased(){
  if(!song.isPlaying()){
    song.play();
  }
  
}
