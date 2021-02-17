
var balloon, background;

function preload(){
  backgroundImg = loadImage("image/backg.png")
  balloonImage = loadAnimation("image/2.png","image/3.png","image/4.png");
}

function setup() {
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  bal
}

function draw() {
  background(255,255,255);  
  drawSprites();
}