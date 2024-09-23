function setup() {
  createCanvas(600, 600);
}

function draw() {
// Variables
  //Color Parameters
  let pc = color(168,72,44) //pot color
  let pcdarker = color(84,36,22) //inside of pot color
  let plc = color("#569f03") //plant color
  let plcdarker = color(65.7,110.7,46.8)
  let sc = color(86,61,49) //soil color
  
  //Pot Center Coordinate Parameters
  let pcx = 300 //2D center x coordinate (vertical axis) for the pot
  let pcy = 400 //2D center y coordinate (horizontal axis) for the pot
  
  //Pot 3D Dimensions, also 2D Ellipse Height Parameters
  let pw = 400 //pot width (in terms of 3D/physical geometry)
  let ph = 200 //pot height (in terms of 3D/physical geometry)
  let eheight = 100 //2D height of the ellipses
  
  //Plant Parameters
  let plw = 40 //2D plant stem width 
  let plh = 250 //2D plant stem height (first "branch")
  let lheight = 40 //2D height of one half of the leaf

  background(220);
  fill(pc)
  strokeWeight(1.5)

// Bottom rim
  stroke(0)
  ellipse(pcx,pcy+ph/2,pw,eheight)
  
// Sides of pot
  stroke(0,0)
  rect(pcx-pw/2,pcy-ph/2,pw,ph)

// Top rim
  stroke(0)
  ellipse(pcx,pcy-ph/2,pw,eheight)
  
// Inside rim shadow
  fill(pcdarker)
  ellipse(pcx,pcy-ph/2,pw-50,eheight-25)
  
// Soil in process, need to determine the angle for the arcs
// Soil arc top
  // fill(sc)
  // arc(pcx,pcy-ph/2+ph/20,0,0,PI,0,OPEN)
  
// Soil arc bottom
  // arc(pcx,pcy-ph/2+ph/20,pw-50,eheight-25,0,PI,OPEN)
  
// Plant stem 
  fill(plc)
  triangle(pcx-plw/2,pcy-ph/2,pcx,pcy-plh,pcx+plw/2,pcy-ph/2)
  
// Plant stem 2
  fill(plcdarker)
  triangle(pcx,pcy-plh,pcx+plw/2,pcy-plh+0.1*plh,pcx+plw/2,pcy-ph/2)
  
// Plant branch 1
  triangle(pcx,pcy-plh,pcx+0.2*plh,pcy-1.3*plh,pcx+plw/2,pcy-plh+0.1*plh)
  
// Leaf upper half
  arc(pcx+0.2*plh+((pcx+0.8*plh)-(pcx+0.2*plh))/2,pcy-1.3*plh,((pcx+0.8*plh)-(pcx+0.2*plh)),pcy-1.3*plh-lheight,PI,0,OPEN)
  
// Leaf lower half
  arc(pcx+0.2*plh+((pcx+0.8*plh)-(pcx+0.2*plh))/2,pcy-1.3*plh,((pcx+0.8*plh)-(pcx+0.2*plh)),pcy-1.3*plh-lheight,0,PI,OPEN)

// Leaf center line
  line(pcx+0.2*plh,pcy-1.3*plh,pcx+0.8*plh,pcy-1.3*plh)
}

