let tree;

function preload() {
    tree = loadModel('edittree.obj');
  }

function setup() {
    createCanvas(800, 800, WEBGL);
    rectMode(CENTER);

    // push();
    // createCanvas(100, 100, WEBGL);
    // pop();

    strokeWeight(7);

}

function draw() {
    background(200);
    fill(20,20,100);
    line(0,0,width,height);
    line(0,800,800,0);
    fill(200);
    rect(400,400,500,500,10,10);
    fill(20,50,150);
    
    push();
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    model(tree);
    pop();


}