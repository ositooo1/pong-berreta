let pad1;
let pad2;
let ball;
let wall1;
let wall2;
let puntosp1 = 0;
let puntosp2 = 0;
let img;

function preload(){

    img = loadImage("unnamed.jpg");
}

function setup(){
    createCanvas(900,675);
    pad1 = createSprite(
        50 , 370, 25, 250);
      pad1.shapeColor = color(210,39,48);

      pad2 = createSprite(
        850 , 370, 25, 250);
      pad2.shapeColor = color(219,62,177);

      ball = createSprite(
        width/2, height/2, 40)
        ball.shapeColor = color(46, 31, 28)
        ball.setSpeed(3.5, random(0, 360))

    

        



}
function draw(){
background(img);
drawSprites();

textSize(25);
fill(254,191,178)
text("Puntos P1: " + puntosp1, 40, 50);
text("Puntos P2: " + puntosp2, 720, 50);


 
if(keyIsDown(83) === true){
    pad1.position.y += 5
}

if(keyIsDown(87) === true){
    pad1.position.y -= 5
}

if (keyIsDown(UP_ARROW) === true) {
   pad2.position.y -= 5
  }

  if (keyIsDown(DOWN_ARROW) === true) {
   pad2.position.y += 5
  }
  if(pad1.position.y === 120){
    pad1.position.y += 5
    }
    if(pad1.position.y === 555 ){
        pad1.position.y -= 5
        }

        if(pad2.position.y === 120){
            pad2.position.y += 5
            }
            if(pad2.position.y === 555 ){
                pad2.position.y -= 5
                }




if(ball.position.y === 0){


}





}

