function setup() {
  createCanvas(600, 600);
  noLoop(); //!!!!!
}

function draw() {
  //gradient grey to pink
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(color(156, 142, 149), color(240, 185, 216), inter);
    stroke(c);
    line(0, y, width, y);
  }
  
  //shirt
  fill(82, 36, 189);//purple
  noStroke();
  rect(150, 470, 300, 300, 40, 40, 0, 0);
  
  stroke(42, 18, 97);//sleeve lines?
  strokeWeight(3);
  line(190, 500, 190, 600);
  line(410, 500, 410, 600);
  
  //hair
  fill(28, 16, 3);
  noStroke();
  ellipse(200, 350, 90, 180);
  ellipse(400, 350, 90, 180);
  ellipse(300, 270, 280, 240);
  
  //chest
  fill(199, 154, 103);
  arc(300, 470, 120, 50, 0, PI);
  //neck
  rect(265, 430, 70, 45);
  
  //choker
  stroke(0);
  strokeWeight(3);
  line(263, 452, 337, 452);
  
  //head
  fill(199, 154, 103);
  noStroke();
  ellipse(300, 320, 200, 240);
  
  //ears
  ellipse(200, 335, 25, 35);
  ellipse(400, 335, 25, 35);
  
  //earrings
  noFill();
  stroke(192, 192, 192);
  strokeWeight(3);
  circle(200, 360, 20);
  circle(400, 360, 20);
  
  //bangs
  fill(28, 16, 3);
  noStroke();
  arc(300, 200, 200, 140, 0, PI);
  
  //left eye
  fill(255); //white
  stroke(0);
  strokeWeight(2);
  ellipse(255, 300, 50, 35);
  fill(0); //pupil
  noStroke();
  circle(255, 300, 22);
  fill(255);//sparkle
  circle(260, 295, 8);
  stroke(0); //lashes
  strokeWeight(2);
  line(235, 292, 228, 287);
  line(240, 287, 235, 280);
  line(250, 284, 248, 276);
  
  //right eye
  fill(255);
  stroke(0);
  strokeWeight(2);
  ellipse(345, 300, 50, 35);
  fill(0); //pupil
  noStroke();
  circle(345, 300, 22);
  fill(255); //sparkle
  circle(350, 295, 8);
  stroke(0); //lashes
  strokeWeight(2);
  line(365, 292, 372, 287);
  line(360, 287, 365, 280);
  line(350, 284, 352, 276);
  
  //nose
  fill(180, 140, 90);
  noStroke();
  circle(300, 340, 8);
  
  //blush
  fill(255, 182, 193, 120); //baby pink
  ellipse(230, 330, 35, 25);
  ellipse(370, 330, 35, 25);
  
  //smile
  noFill();
  stroke(160, 100, 80);
  strokeWeight(2);
  arc(300, 375, 60, 30, 0, PI);
  
  // text
  noStroke();
  fill(255, 0, 128);
  textAlign(RIGHT, BOTTOM);
  textSize(24);
  text("Paulina", 580, 580);
}