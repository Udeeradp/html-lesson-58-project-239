var particles = [];
var myCcolors = ["red" , "green", "yellow", "blue"];

function setup() {
var cnv = creatCanvas(1200,1200);
  cnv.position(300, 0, "fixed");
}
//creation od a particles
function creatParticle(){
for (var i = 0; i < particles.length; i++) {
  var c = random(myColors);
  fill(c);
  circle(particles[i][0], particles[i][1], 20);
}
}

function draw() {
background("#730201");
  creatParticle();
}
