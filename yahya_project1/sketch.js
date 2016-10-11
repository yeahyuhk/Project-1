function setup() {
  createCanvas(900, 600);
  frameRate(60);
  smooth();
  var colorUse = color(colorR, colorG, colorB);
}

//variable for sound bar height
var ht = 0;

//variables for sound bar color
var colorR = 0;
var colorG = 100;
var colorB = 200;

function soundBar(rx, rheight) {
  rectMode(CENTER);
  rect(rx, height, 70, rheight - (3 * mouseY) + 300 + ht);
}

function rain(x) {
  fill(255);
  ellipse(random(width), x, random(15));

}

function flare() {
  stroke(255);
  line(width / 2, 0, mouseX, mouseY)


}

function draw() {
  //stores changing fill color
  var colorUse = color(colorR, colorG, colorB);

  //this if statement pauses the sketch while ENTER is pressed, otherwise it continues
  if (keyIsDown(ENTER)) {
    ellipseMode(CENTER)
      //these shapes draw the pause symbol
    fill(100, 10);
    noStroke();
    ellipse(width / 2, height / 2 + 10, width / 2, width / 2)

    fill(colorUse);
    ellipse(width / 2, height / 2, width / 2, width / 2)

    fill(150);
    rect(width / 2 - 50, height / 2 + 10, 30, 200);
    rect(width / 2 + 50, height / 2 + 10, 30, 200);
    fill(200);
    rect(width / 2 - 50, height / 2, 30, 200);
    rect(width / 2 + 50, height / 2, 30, 200);

    //THIS IS THE DRAW FUNCTION UNLESS ENTER IS PRESSED

  } else {
  
    strokeWeight(2)
    flare();
    rain(30);
    rain(60);
    rain(100);
    fill(colorR, colorG, colorB);
    ellipse(mouseX, mouseY, 30 + ht / 10, 30 + ht / 10);
    if (frameCount % 30 == 0) {
      banana = 0
      background(55);
    }
    //this adds random height to each sound bar and resets it every half second
    ht += random(20);
    if (frameCount % 30 == 0) {
      ht = 0;
    }
    if (mouseIsPressed == true) {
      background(0);
    } else {
      // draws background for fade effect
      fill(0, 20);
      rect(450, 300, width, height)
    }
    //changes appearance of sound bars 
    //if the mouse is held, an alternate appearance for the sound bars is shown
    if (mouseIsPressed == true) {
      stroke(colorR, colorG, colorB);
      strokeWeight(3);
      noFill();
    } else {
      noStroke();
      //fill of sound bars
      fill(colorR, colorG, colorB, 100);
    }

    //this constantly changes the color of the sound bars
    colorR += 1;
    colorG += 1;
    colorB += 1;

    //This resets the colors once they reach their maximum value.
    if (colorR > 255) {
      colorR = 0;
    }
    if (colorG > 255) {
      colorG = 0;
    }
    if (colorB > 255) {
      colorB = 0;
    }
    //the soundBar function is called multiple times with different parameters
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
}
