let stretchy;
let face;
let tear;
let x = [];
let y = [];
let chara;

function setup() {
  createCanvas(800, 800);
  strokeWeight(1);
  frameRate(30);
  
  face = loadImage('eye.png');

  push();
  fill(255);
  for (let i = 0; i < 3000; i++) {
      x[i] = random(800, 0);
      y[i] = random(1000, 100);
  
    }
  pop();

    // chara_ani
    chara = createSprite(400, 150, 50, 100);
    let myAnimation = chara.addAnimation('floating', 'standing1.png', 'standing2.png', 'standing3.png');
    myAnimation.offY = 18;
    chara.addAnimation('moving', 'leftwalk.png');
    chara.position.x = width/2;
    chara.position.y = height/2;

  //Sometimes image sequences are not enough and you may want to
  //use p5's drawing function while retaining the built-in features of the
  //sprite class
  stretchy = createSprite(400, 200, 10, 10);



  stretchy.draw = function() {
    fill(0);

    push();
    rotate(radians(this.getDirection()));
    ellipse(5, 5, 100+this.getSpeed(), 100-this.getSpeed());
    pop();

   
    image(face, this.deltaX*2, this.deltaY*2);
  };

  stretchy.maxSpeed = 20;
}

function draw() {
  background(0);
  stroke(255);
  line(450, 0, 450, 800);
  triangle(900, 800, 450, 600, 20, 800,10);

  fill(0);
  textAlign(CENTER);
  text('so sad', width/2, height-20);

//   if(mouseIsPressed){
//     fill(100, 100, 250);
// }

for(let i = 0; i < x. length; i++){
    y[i] += random(5);
    // let y = i ;
    if(y[i]> height){
        y[i] = y[i]- height;
    }
    
    rect(x[i], y[i], 0.5, 20);
}

  //mouse trailer, the speed is inversely proportional to the mouse distance
  stretchy.velocity.x = (mouseX-stretchy.position.x)/5;
  stretchy.velocity.y = (mouseY-stretchy.position.y)/10;

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
  if (chara.position.y < 600)
    chara.position.y = 600;
  if (chara.position.x > width-200)
    chara.position.x = width-200;
  if (chara.position.y > height-200)
    chara.position.y = height-200;

  drawSprites();
}
