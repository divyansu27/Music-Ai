song=""
function preload(){
    song=losdSound("music.mp3")
}
function setup()
{
    canvas=createCanvas(600,500);
    canvas.centre();
    vedeo=createCapture(VEDEO);
    vedeo.hide();
}
function draw(){
    image(vedeo,0,0,600,500);
}
function play(){
    song.play()
}