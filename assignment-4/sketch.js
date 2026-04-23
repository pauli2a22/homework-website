function setup() {
  createCanvas(1024,1024);
  noLoop(); 
}

function draw() {
  background(240); //light backgrounf
  
  let darkRed = color(139, 0, 0);
  let brightRed = color(255, 0, 50);
  let orange = color(255, 140, 0);
  let darkOrange = color(200, 80, 0);
  let olive = color(128, 128, 0);
  let darkOlive = color(85, 85, 0);
  let black = color(0);
  let cyan = color(0, 255, 255);
  let pink = color(255, 20, 147);
  let lightPink = color(255, 182, 193);
  let yellow = color(255, 255, 0);
  let white = color(255);
  
 //define stripe pattern 
  //this is one repeat of the pattern
  let stripePattern = [
    {width: 80, color: darkRed},
    {width: 40, color: brightRed},
    {width: 20, color: lightPink},
    {width: 40, color: darkOrange},
    {width: 20, color: yellow},
    {width: 40, color: white},
    {width: 20, color: black},
    {width: 60, color: olive},
    {width: 40, color: orange},
    {width: 20, color: cyan},
    {width: 40, color: pink},
    {width: 20, color: white}
  ];
  

  //calc width of one pattern repeat
  let patternWidth = 0;
  for (let i = 0; i < stripePattern.length; i++) {
    patternWidth += stripePattern[i].width;
  }
  
  //  horizontal stripes 
  let yPos = 0;
  
  // to fill the whole canvas
  while (yPos < height) {
    // draw them in that order
    for (let i = 0; i < stripePattern.length; i++) {
     //has the stripes information like color and width
      let stripe = stripePattern[i];
      fill(stripe.color);
      noStroke();
      
      // Draw rect across the entire width
      rect(0, yPos, width, stripe.width);
      
     //next stripe will start where this one ended
      yPos += stripe.width;
      
      // stop drawing and break loop so stripes dont get drawn outside rhe canvas 
      if (yPos >= height) {
        break;
      }
    }
  }
  
  // transparent vertical stripes 
  // woven look
  blendMode(MULTIPLY); //  makes overlapping colors blend together
  
    // start at left edge (x=0)
  let xPos = 0;
  
  //keeep going sideways until edge 
  while (xPos < width) {
    
    // go through each stripe pattern and get current stripes info 
    for (let i = 0; i < stripePattern.length; i++) {
      let stripe = stripePattern[i];
      
      // make slightly transparent version of stripe 
      let transparentColor = color(red(stripe.color), 
                                    green(stripe.color), 
                                    blue(stripe.color), 
                                    200); 
      fill(transparentColor);
      noStroke();
      
      // vertical rectangle this time
      rect(xPos, 0, stripe.width, height);
      
      //next stripe will start where this one ended
      xPos += stripe.width;
      
      // so drawing is on canvas 
      if (xPos >= width) {
        break;
      }
    }
  }
  
  //circles 
  
  // reset blend mode for circles so theyre solid
  blendMode(BLEND);
  
  // circles where vertical and horizontal stripes itersect
  
  // list to store the positions where stripes begin
  let stripePositions = [];
  
  //start at top left edge
  let pos = 0;
  
  //add current position to list and move to next and repeat until whole canvas is covered
  //these are the x and y coordinates of the intersections
  while (pos < width) {
    for (let i = 0; i < stripePattern.length; i++) {
      stripePositions.push(pos);
      pos += stripePattern[i].width;
      if (pos >= width) break;
    }
  }
  
  // draw circles at intersections using nested loops - create a grid
  for (let i = 0; i < stripePositions.length; i++) {
    for (let j = 0; j < stripePositions.length; j++) {
      
    //get x and y coordinates for position j 
      let x = stripePositions[i];
      let y = stripePositions[j];
      
      // only draw circles within canvas bounds
      if (x < width && y < height) {
        // alternate between two circle styles
        //creates checkerboard pattern so it alters etween style1 and style 2 
        if ((i + j) % 2 == 0) {
          // even intersections - white circles with stroke
          fill(255, 255, 255, 200);
          stroke(0, 100);
          strokeWeight(2);
          circle(x, y, 25);
        } else {
          // odd intersections - semitransparent colored circles
          fill(cyan.levels[0], cyan.levels[1], cyan.levels[2], 150);
          noStroke();
          circle(x, y, 16);
        }
      }
    }
  }
}

/**
 * A function to define what to do whenever a key
 * is pressed over the canvas. 
 */
function keyPressed() {
  // Was it the upper/lower 'S' key?
  if (key == 'S' || key == 's') {
    saveCanvas("assignment[4]_pattern_[valenzuela]_paulina");
  }
}