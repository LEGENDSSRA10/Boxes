var canvas;
var music;
var box1, box2, box3, box4;
var square;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    box1 = createSprite(80, 550, 150, 20);
    box1.shapeColor = "blue";

    box2 = createSprite(280, 550, 150, 20);
    box2.shapeColor = "pink";

    box3 = createSprite(480, 550, 150, 20);
    box3.shapeColor = "red";

    box4 = createSprite(680, 550, 150, 20);
    box4.shapeColor = "orange";



    square = createSprite(random(20, 750),20, 40, 40);
    square.velocityX = 5;
    square.velocityY = 5;

}

function draw() {
    background(rgb(169,169,169));
    text(mouseX+","+mouseY,mouseX,mouseY);
    
    edges = createEdgeSprites();
    square.bounceOff(edges);


    

if(box1.isTouching(square))
{
    square.shapeColor = box1.shapeColor;
    square.bounceOff(box1);
    music.play();
    square.velocityX = 0;
    square.velocityY = 0;
}

if(box2.isTouching(square))
{
    square.shapeColor = box2.shapeColor;
    square.bounceOff(box2);
}

if(box3.isTouching(square))
{
    square.shapeColor = box3.shapeColor;
    square.bounceOff(box3);
    square.velocityX = 0;
    square.velocityY = 0;
    music.stop();
}

if(box4.isTouching(square))
{
    square.shapeColor = box4.shapeColor;
    square.bounceOff(box4);
}
drawSprites();
}
