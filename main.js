function preload(){
}

function setup(){
canvas=createCanvas(600,600);
canvas.position(150, 0);
video=createCapture(VIDEO);
video.hide();
}

function draw(){
image(video, 150, 150, 300, 300);
fill(230,230,230);
stroke(234,251,123);
circle(145, 475, 50);
circle(450, 475, 50);
circle(145, 160, 50);
circle(465, 160, 50);
}
function snapshot(){
    save('pic.png');
}