let chara;
//Moving sprites
var ghost;
var direction = 90;


function setup() {
    createCanvas(800, 800);
    fill(255, 140);
    rectMode(CENTER);
    // noStroke();
    stroke(7);
    frameRate(40);
 
    // fill(0);
    // textAlign(CENTER);
    // text('holidayblues', width/2, height-20);


 // chara_ani
 chara = createSprite(400, 150, 50, 100);
 let myAnimation = chara.addAnimation('floating', 'standing1.png', 'standing2.png', 'standing3.png');
 myAnimation.offY = 18;
 chara.addAnimation('moving', 'leftwalk.png');
 chara.position.x = width/2;
 chara.position.y = height/2;

//create the sprites
ghost = createSprite(600, 200, 50, 100);
ghost.addAnimation('floating', 'blue1.png', 'blue2.png', 'blue3.png');

}

function draw() {
    background(0);
    fill(153);

    


for(let y = 0; y <= height; y += 40){
   for (let x = 0; x <= width; x += 40){
   fill(random(100, 100, 250) , random(10,200,200) , random(150, 255, 255));
   rect (x, y, 40,40);
   } 
}


fill(20, 20, 100);
line(0, 0, width, height);
line(0, 800, 800, 0);
fill(0);
// noFill();
rect(400, 400, 500, 500, 10, 10);
// fill(20, 50, 150);
rect(405, 405, 440, 440);


push();
  ghost.attractionPoint(0.2, mouseX, mouseY);
  ghost.maxSpeed = 7;
pop();

  drawSprites();



if (mouseX < chara.position.x - 10) {
    chara.changeAnimation('moving');
    //flip horizontally
    chara.mirrorX(-1);
    //negative x velocity: move left
    chara.velocity.x = -2;
  } else if (mouseX > chara.position.x + 10) {
    chara.changeAnimation('moving');
    //unflip
    chara.mirrorX(1);
    chara.velocity.x = 2;
  } else {
    //if close to the mouse, don't move
    chara.changeAnimation('floating');
    chara.velocity.x = 0;
  }

  if (mouseY < chara.position.y - 10) {
    chara.changeAnimation('moving');
    //flip horizontally
    //negative x velocity: move left
    chara.velocity.y = -2;
  } else if (mouseY > chara.position.y + 10) {
    chara.changeAnimation('moving');
    //unflip
    chara.velocity.y = 2;
  } else {
    //if close to the mouse, don't move
    chara.changeAnimation('floating');
    chara.velocity.y = 0;
  }

  if (chara.position.x < 200)
    chara.position.x = 200;
  if (chara.position.y < 500)
    chara.position.y = 500;
  if (chara.position.x > width-200)
    chara.position.x = width-200;
  if (chara.position.y > height-200)
    chara.position.y = height-200;

  drawSprites();



}