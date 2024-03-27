function preload() {}

function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(560,150);

    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',getPoses);
}

function modelLoaded() {
    console.log("Model Intialized");
}

function getPoses(results) {
    if(results.length > 0) {
        console.log(results);
    }
}

function draw() {
    background("#0000FF");
}