let brushSize = 20;
let eraseMode = false;
let colorModeType = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(245);
  textFont("Arial");
}

function draw() {
  drawUI();

  if (mouseIsPressed && mouseY > 95 && pmouseY > 95) {
    if (eraseMode == true) {
      stroke(245);
      strokeWeight(brushSize);
      strokeCap(ROUND);
      line(pmouseX, pmouseY, mouseX, mouseY);
    } else {
      if (colorModeType == 1) {
        let r = map(sin(frameCount * 0.03), -1, 1, 100, 255);
        let g = map(sin(frameCount * 0.05), -1, 1, 100, 255);
        let b = map(sin(frameCount * 0.07), -1, 1, 100, 255);
        stroke(r, g, b, 170);
      }

      if (colorModeType == 2) {
        stroke(20, 170);
      }

      if (colorModeType == 3) {
        stroke(230, 60, 60, 170);
      }

      if (colorModeType == 4) {
        stroke(70, 130, 255, 170);
      }

      if (colorModeType == 5) {
        stroke(60, 180, 90, 170);
      }

      strokeWeight(brushSize);
      strokeCap(ROUND);
      line(pmouseX, pmouseY, mouseX, mouseY);
    }
  }
}

function drawUI() {
  noStroke();

  fill(255, 245);
  rect(15, 15, width - 30, 70, 16);

  fill(30);
  textAlign(LEFT, CENTER);

  textSize(14);
  text("DRAWING APP!!!!", 30, 35);

  textSize(12);
  text("Drag to draw  |  UP/DOWN size  |  C clear  |  E erase  |  B brush", 30, 58);

  drawColorButton(30, 78, colorModeType == 1, "RAINBOW 1");
  drawColorButton(125, 78, colorModeType == 2, "BLACK 2");
  drawColorButton(210, 78, colorModeType == 3, "RED 3");
  drawColorButton(280, 78, colorModeType == 4, "BLUE 4");
  drawColorButton(355, 78, colorModeType == 5, "GREEN 5");

  fill(60);
  textSize(12);
  textAlign(RIGHT, CENTER);

  let modeText = "Brush";
  if (eraseMode == true) {
    modeText = "Eraser";
  }

  text("Mode: " + modeText + "   |   Size: " + brushSize, width - 30, 58);

  stroke(220);
  strokeWeight(1);
  line(20, 95, width - 20, 95);
  noStroke();
}

function drawColorButton(x, y, isActive, label) {
  if (isActive) {
    fill(30);
    rect(x, y, 72, 22, 10);
    fill(255);
  } else {
    fill(235);
    rect(x, y, 72, 22, 10);
    fill(50);
  }

  textAlign(CENTER, CENTER);
  textSize(11);
  text(label, x + 36, y + 11);
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
    brushSize += 4;
  }
  if (keyCode === DOWN_ARROW) {
    brushSize -= 4;
  }
  if (brushSize < 4) {
    brushSize = 4;
  }
  if (key == "1") {
    colorModeType = 1;
    eraseMode = false;
  }
  if (key == "2") {
    colorModeType = 2;
    eraseMode = false;
  }
  if (key == "3") {
    colorModeType = 3;
    eraseMode = false;
  }
  if (key == "4") {
    colorModeType = 4;
    eraseMode = false;
  }
  if (key == "5") {
    colorModeType = 5;
    eraseMode = false;
  }
  if (key == "e" || key == "E") {
    eraseMode = true;
  }
  if (key == "b" || key == "B") {
    eraseMode = false;
  }
  if (key == "c" || key == "C") {
    background(245);
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(245);
}