# p5.play-boilerplate
Boiler plate for p5.play

var mom1, mom2, mom1i, mom2i;
var   colorPicker, form,game,player;
function preload(){
mom1i=loadImage("images/moms ear img 1.png");
mom2i=loadImage("images/moms ear1.png");
}

function setup(){
createCanvas(displayWidth,displayHeight);
mom1=createSprite(displayWidth/2,displayHeight/2-250,10,10);
mom1.addImage(mom1i);
mom1.scale=0.7;
mom2=createSprite(displayWidth/2-50,displayHeight/2+20,10,10)
mom2.addImage(mom2i);
mom2.scale=0.5;

colorPicker = createColorPicker("#B3F3F5");
colorPicker.position(displayWidth/2+680,displayHeight/2+400);


}

function draw(){
background(colorPicker.color());


  drawSprites();
  
}
