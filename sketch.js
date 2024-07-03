function setup() {
    createCanvas(600,600);
  background("rgb(255,255,255)");
  
  
  }
  
  function draw() {
    
    stroke ("blue");
    fill ("red");
     
    
    
    //console.log(mouseIsPressed)
    if (mouseIsPressed)  {
    
    rect (mouseX,mouseY,50,70);
    }
  }