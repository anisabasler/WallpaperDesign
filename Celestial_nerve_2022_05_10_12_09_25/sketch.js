//noprotect
function setup() {
  createCanvas(800, 450, SVG);
}

function draw() {
  noStroke()
  size = 110; 
  background(9, 65, 156);


  
  
  for(x=25; x<width; x=x+85){
  for(y = 30; y <height; y = y+80) {
      fill(70, 127, 219);
  ellipse(x,y,size);
    
   
  }
  size = size - 15; 
 
}
  
    for(x=50; x<width; x=x+89){
  for(y=12; y<height; y=y+80){
    fill(103, 157, 245);
    ellipse(x,y,x/6,x/6);
  }
  }

  save("mySVG.svg");
  print("saved svg");
  noLoop();

}