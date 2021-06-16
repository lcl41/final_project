// let tree;

// function preload() {
//     tree = loadModel('edittree.obj');
//   }

//Creating animations from sprite sheets

let numFrames = 101; //개수
let images = []; //이미지변수, 이미지를 배열로 쓰겠다.
let currentFrame = 0; //현재 프레임


function preload() {
    for (let i = 0; i < numFrames; i++) {
      images[i] = loadImage("tree/.png_" + nf(i,4) + ".png");
    }
}

function setup() {
    createCanvas(800, 800);
    rectMode(CENTER);
    background(200);
}
//     createCanvas(800, 800, WEBGL);
//     rectMode(CENTER);

//     // push();
//     // createCanvas(100, 100, WEBGL);
//     // pop();

//     strokeWeight(7);

// }

function draw() {
    
    fill(20,20,100);
    line(0,0,width,height);
    line(0,800,800,0);
    fill(200);
    rect(400,400,500,500,10,10);
    fill(20,50,150);
    
    // push();
    // rotateX(frameCount * 0.01);
    // rotateY(frameCount * 0.01);
    // model(tree);
    // pop();
}