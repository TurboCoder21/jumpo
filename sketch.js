let player;
let enemy;
let pImg;
let aImg;
let bImg;
var score=0;
var over=0;

function preload()
{
  pImg=loadImage("playerp5.png");
  aImg=loadImage("angryp5.png");
  bImg=loadImage("bgp5.png");
}

function setup()
{
    createCanvas(900,500);
    player=new Player();
    enemy = new Enemy();
}

function draw()
{
    background(bImg);
    player.show();
    player.move();
    enemy.show();
    enemy.move();
    displayScore();

    if(player.intersects(enemy))
    {
      over=1;
    }

    if(over==1)
    {
      gameOver();
    }
}

function keyPressed()
{
  if(key==' ')
  {
    player.jump();
  }   
}

function mousePressed()
{
  player.jump();
}

function displayScore()
{
  textAlign(CENTER);
  textSize(50);
  text("SCORE: "+score,400,50);
}

function gameOver()
{
  player.x=-600;
  player.y=-600;
  enemy.x=1600;
  enemy.y=1100;
  textAlign(CENTER);
  textSize(50);
  text("GAME OVER!!",400,250);
}