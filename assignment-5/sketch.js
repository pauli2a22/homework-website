let xPos = [];
let yPos = [];
let xSpeed = [];
let ySpeed = [];
let sizes = [];
let rVals = [];
let gVals = [];
let bVals = [];

let shapeCount;
let bgShade;
let trailAlpha;

function setup() {
  createCanvas(windowWidth, windowHeight);

  shapeCount = 30;
  bgShade = 10;
  trailAlpha = 25;

for (let i = 0; i < shapeCount; i++) {
  xPos.push(random(width));
  yPos.push(random(height));

  xSpeed.push(random(-2, 2));
  ySpeed.push(random(-2, 2));

  sizes.push(random(width * 0.02, width * 0.07));

  rVals.push(random(100, 255));
  gVals.push(random(100, 255));
  bVals.push(random(100, 255));
  }

noStroke();
background(bgShade);
}

function draw() {
  background(0, trailAlpha);

for (let i = 0; i < xPos.length; i++) {
  fill(rVals[i], gVals[i], bVals[i], 120);

  ellipse(xPos[i], yPos[i], sizes[i], sizes[i]);

  fill(rVals[i], gVals[i], bVals[i], 40);
  ellipse(xPos[i], yPos[i], sizes[i] * 2, sizes[i] * 2);

  xPos[i] += xSpeed[i];
  yPos[i] += ySpeed[i];

  if (xPos[i] < 0 || xPos[i] > width) {
    xSpeed[i] = -xSpeed[i];
  }

  if (yPos[i] < 0 || yPos[i] > height) {
    ySpeed[i] = -ySpeed[i];
  }
}

drawConnections();
drawClock();
}

function drawConnections() {
  stroke(255, 40);

for (let i = 0; i < xPos.length; i++) {
  for (let j = i + 1; j < xPos.length; j++) {
    let d = dist(xPos[i], yPos[i], xPos[j], yPos[j]);

    if (d < width * 0.12) {
      line(xPos[i], yPos[i], xPos[j], yPos[j]);
    }
  }
}

noStroke();
}

function drawClock() {
  let h = nf(hour(), 2);
  let m = nf(minute(), 2);
  let s = nf(second(), 2);

  let timeText = h + ":" + m + ":" + s;
  let dateText = month() + "/" + day() + "/" + year();

fill(255);
textAlign(CENTER, CENTER);
textSize(width * 0.05);
text(timeText, width / 2, height / 2);

textSize(width * 0.015);
text(dateText, width / 2, height / 2 + 40);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(bgShade);
}