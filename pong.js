let pad1;
let pad2;
let ball;
let puntosp1 = 0;
let puntosp2 = 0;
let img;
let punto;
let raqueta;
let borde;

function preload() {
  img = loadImage("unnamed.jpg");
punto = loadSound("punto.mp3")
raqueta = loadSound("raqueta.mp3")
borde = loadSound("borde.mp3")
}

function setup() {
  createCanvas(900, 675);
  pad1 = createSprite(50, 370, 25, 250);
  pad1.shapeColor = color(210, 39, 48);

  pad2 = createSprite(850, 370, 25, 250);
  pad2.shapeColor = color(219, 62, 177);

  ball = createSprite(width / 2, height / 2, 30);
  ball.shapeColor = color(13, 42, 199);
  ball.setSpeed(3.5, random(0, 360));
}
function draw() {
  background(img);
  drawSprites();

  textSize(25);
  fill(254, 191, 178);
  text("Puntos P1: " + puntosp1, 40, 50);
  text("Puntos P2: " + puntosp2, 720, 50);

  if (keyIsDown(83) === true) {
    pad1.position.y += 5;
  }

  if (keyIsDown(87) === true) {
    pad1.position.y -= 5;
  }

  if (keyIsDown(UP_ARROW) === true) {
    pad2.position.y -= 5;
  }

  if (keyIsDown(DOWN_ARROW) === true) {
    pad2.position.y += 5;
  }
  if (pad1.position.y === 120) {
    pad1.position.y += 5;
  }
  if (pad1.position.y === 555) {
    pad1.position.y -= 5;
  }

  if (pad2.position.y === 120) {
    pad2.position.y += 5;
  }
  if (pad2.position.y === 555) {
    pad2.position.y -= 5;
  }

  if (ball.position.y < 0) {
    ball.velocity.y *= -1;
    borde.play()
  }

  if (ball.position.y > 675) {
    ball.velocity.y *= -1;
    borde.play()
  }

  if (ball.overlap(pad1)) {
    ball.velocity.x *= -1;
    raqueta.play()
  }

  if (ball.overlap(pad2)) {
    ball.velocity.x *= -1;
    raqueta.play()
  }
  if (ball.position.x < 0) {
    puntosp2 += 1;
    punto.play();
  }
  if (ball.position.x > 900) {
    puntosp1 += 1;
  punto.play()
  }
}
