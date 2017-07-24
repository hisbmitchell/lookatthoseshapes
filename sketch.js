

function preload(){
  bg1 = createVideo (['assets/green2.mov']);
  gif = loadGif('assets/shapers3.gif')

 wholething = loadSound('assets/wholething.wav')
  
  
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  

  //shapes.volume(0);
  bg1.loop();
  bg1.hide();
  wholething.play();
 
}

function draw() {
  
   //background(0);
   image(bg1,0,0);
   //image(shapes,30,30);
   image(gif, width/4 ,height/4);
   
  
}
