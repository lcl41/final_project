let chara;
let GRAVITY = -0.2;

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  strokeWeight(7);

  // background(0);
  // fill(153);

  background(200);
  fill(20, 20, 100);
  line(0, 0, width, height);
  line(0, 800, 800, 0);
  fill(200);
  rect(400, 400, 500, 500, 10, 10);
  fill(20, 50, 150);
  rect(405, 405, 440, 440);

    //fish_draw
    fill(153);
    noStroke();
    arc(350, 300, 80, 80, 0, radians(270));
    strokeJoin(ROUND);
    rect(290, 290, 60, 60, 20);
    triangle(291, 350, 250, 330, 280, 370);
  
    fill(102);
    arc(400, 500, 80, 80, radians(180), radians(450));
    rect(410, 450, 70, 70, 20);
    triangle(460, 480, 500, 470, 510, 530);
  
    fill(230);
    arc(250, 580, 80, 80, radians(190), radians(150));
    rect(260, 565, 70, 70, 20);
    triangle(320, 590, 350, 600, 350, 560);
  
    fill(250);
    ellipse(340, 300, 10, 10);
    ellipse(410, 490, 10, 10);
    ellipse(260, 600, 10, 10);

    // chara_ani
  chara = createSprite(400, 150, 50, 100);
  
  let myAnimation = chara.addAnimation('floating', 'standing1.png', 'standing2.png', 'standing3.png');
  myAnimation.offY = 18;
  chara.addAnimation('moving', 'leftwalk.png');
  chara.position.x = width/2;
  chara.position.y = height/2;


}

function draw() {
  fill(0);
  ellipse(400,20,600,200);
  
  push();
  fill(0);
  textAlign(CENTER);
  text('Spit out', width/2, height-20);
  

  for(var i=0; i<allSprites.length; i++)
  {
    var mySprite = allSprites[i];

    //adding a speed at 90 degrees (down)
    //equivalent to: mySprite.velocity.y += GRAVITY;
    mySprite.addSpeed(GRAVITY, 90);

    //even if they are out of the canvas, sprites keep getting updated
    //consuming precious memory
    //use Sprite.remove() to remove a sprite from the sketch
    if(mySprite.position.y > height + 100)
      mySprite.remove();
  }

  if(frameCount%10 == 0)
    print('Sprite in the scene: ' +allSprites.length);

  //draw the sprites
  drawSprites();
}

//every mouse press
function mousePressed() {
  //I create a sprite at mouse position
  var newSprite = createSprite(mouseX, mouseY);

  //assign an animation
  newSprite.addAnimation('normal', 'g1.png', 'g2.png', 'g3.png', 'g4.png', 'g5.png', 'g6.png');

  //and set it to a random frame
  newSprite.animation.stop();
  var f = round(random(0, newSprite.animation.getLastFrame()));
  newSprite.animation.changeFrame(f);
pop();


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
  if (chara.position.y < 470)
    chara.position.y = 470;
  if (chara.position.x > width-200)
    chara.position.x = width-200;
  if (chara.position.y > height-200)
    chara.position.y = height-200;

  drawSprites();
}