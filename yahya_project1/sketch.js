function setup() {
  createCanvas(900, 600);
  frameRate(2);
}

var sizes = [160, 230, 390, 440, 600, 540, 390, 280, 120]


function soundBar(rx, rheight) {
  rectMode(CENTER);
  //rect(rx, height, 70, rheight-2*mouseY+100);
  rect(rx, height, 70, rheight);
}




function draw() {
  makeRect = 0;
  var rectY = 50
  background(0);
  noStroke();
  fill(230, 180, 0);
  /* soundBar(50, 160);
  soundBar(150, 230);
  soundBar(250, 390);
  soundBar(350, 440);
  soundBar(450, 600);
  soundBar(550, 540);
  soundBar(650, 390);
  soundBar(750, 280);
  soundBar(850, 120);
  */
  for (var makeRect = 0; makeRect < 9; makeRect++) {
    var i = int(random(sizes.length));
    soundBar(rectY, sizes[i]);
    rectY += 100;
  }

}
