function setup() {
  createCanvas(900, 600);
  frameRate(30);
}




function soundBar(rx, rheight) {
  rectMode(CENTER);
  rect(rx, height, 70, rheight-2*mouseY+100);
}




function draw() {
  background(0);
  noStroke();
  fill(230, 180, 0);
  soundBar(50, 160);
  soundBar(150, 230);
  soundBar(250, 390);
  soundBar(350, 440);
  soundBar(450, 600);
  soundBar(550, 540);
  soundBar(650, 390);
  soundBar(750, 280);
  soundBar(850, 120);
}