var img;

function setup() {
  createCanvas(610,610)
  background(0)
  
  img = loadImage("desktop/IMG_0362.jpg");  // Load the image
}
  



function draw() {
  image(img, 0, 0);
  
  {strokeWeight(20)
stroke(0)
 
line(10, 10, 10, 600)
line(10, 10, 600, 10)
line(600, 10, 600, 600)
line(10, 600, 230, 600)
line(600, 600, 370, 600)

  noStroke();
  resetMatrix()
  textSize(84);
  textFont("Times New Roman")
  fill(0);
text("K A T Y", 159, 285);


  
  textSize(70);
  
text("B R E T T", 160, 375);
fill(0);

//textSize(15);
  //textFont("Dante")
//text("d e s i g n   p o r t f o l i o", 230, 425);
//fill(0);




 
 resetMatrix()
 {translate(mouseX, mouseY);
  textSize(30);
  

fill(255);

  ellipse(0, 0, 100, 100)
  
 
  
 }
}


}

//
