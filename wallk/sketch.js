let chara;
let x = 200;
let y = 600;
let w = 200;
let h = 60;

function setup() {
    createCanvas(1200, 800);
    strokeWeight(7);

    // chara = createSprite(400, 150, 50, 100);
    // let myAnimation = chara.addAnimation('floating', 'standing1.png', 'standing2.png', 'standing3.png');
    // myAnimation.offY = 18;
    // chara.addAnimation('moving', 'leftwalk.png');
    // chara.position.x = width/2;
    // chara.position.y = height/2;
}

function draw() {
  background(200);
  fill(20, 20, 100);
  line(0, 600, 1200, 600);

  fill(150,20,20);
  rect(200, 200, 200, 400, 10);
  fill(20, 50, 150);
  rect(500, 200, 200, 400,10);
  // line(200,550,400,550);
  fill(10);
  rect(800, 200, 200, 400, 10);


  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y+h){
    fill(50); //오, 아래, 
} else {
    fill(150,50,50);
}
rect(x, y, w, h);

push();
if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y+h){
  fill(50);  
} else {
  fill(50,100,150);
}
rect(x+300, y, w, h);
pop();

push();
if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y+h){
  fill(50); 
} else {
  fill(100);
}
rect(x+600, y, w, h);
pop();

  // if (mouseX < chara.position.x - 10) {
  //   chara.changeAnimation('moving');
  //   //flip horizontally
  //   chara.mirrorX(-1);
  //   //negative x velocity: move left
  //   chara.velocity.x = -2;
  // } else if (mouseX > chara.position.x + 10) {
  //   chara.changeAnimation('moving');
  //   //unflip
  //   chara.mirrorX(1);
  //   chara.velocity.x = 2;
  // } else {
  //   //if close to the mouse, don't move
  //   chara.changeAnimation('floating');
  //   chara.velocity.x = 0;
  // }

  // if (mouseY < chara.position.y - 10) {
  //   chara.changeAnimation('moving');
  //   //flip horizontally
  //   //negative x velocity: move left
  //   chara.velocity.y = -2;
  // } else if (mouseY > chara.position.y + 10) {
  //   chara.changeAnimation('moving');
  //   //unflip
  //   chara.velocity.y = 2;
  // } else {
  //   //if close to the mouse, don't move
  //   chara.changeAnimation('floating');
  //   chara.velocity.y = 0;
  // }

  // if (chara.position.x < 200)
  //   chara.position.x = 200;
  // if (chara.position.y < 400)
  //   chara.position.y = 400;
  // if (chara.position.x > width-200)
  //   chara.position.x = width-200;
  // if (chara.position.y > height-200)
  //   chara.position.y = height-200;

  // drawSprites();
}