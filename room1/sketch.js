let chara;

function setup() {
createCanvas(800, 800);
rectMode(CENTER);
strokeWeight(7);

// chara_ani
chara = createSprite(400,150,50,100);
let myAnimation = chara.addAnimation('floating', 'standing1.png','standing2.png','standing3.png');
myAnimation.offY = 18;
chara.addAnimation('moving','rightwalk.png','leftwalk.png');

}

function draw() {
  background(200);
  fill(20,20,100);
  line(0,0,width,height);
  line(0,800,800,0);
  fill(200);
  rect(400,400,500,500,10,10);
  fill(20,50,150);
  rect(405,405,440,440);
  

//fish_draw
  fill(153);
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


// if(mouseX > chara.position.x -10) {
//     chara.changeAnimation('moving');
//     chara.mirriorX(-1);
//     chara.velocity.x = -2;
// }
// else if(mouseX > chara.position.x + 10) {
//   chara.changeAnimation('moving');
//     //unflip
//     chara.mirrorX(1);
//     chara.velocity.x = 2;
//   }
//   else {
//     //if close to the mouse, don't move
//     chara.changeAnimation('floating');
//     chara.velocity.x = 0;
//   }
chara.changeAnimation('floating');
  drawSprites();
}