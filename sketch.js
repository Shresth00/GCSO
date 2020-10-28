var Bullet, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  Bullet = createSprite(50,200,20,10);
  wall = createSprite(1100,200,10,height/2);
  speed = random(55,90);
  weight = random(400,1500);
}

function draw() {
  background(255,255,255);  

  Bullet.velocityX = speed;

  if(wall.x-Bullet.x < (Bullet,width+wall.width)/2)
  {
    Bullet.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22500;
    if(deformation>100)
    {
      Bullet.shapeColor=color(255,0,0);
    }

    if(deformation<180 && deformation>100)
    {
      Bullet.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      Bullet.shapeColor=color(0,255,0);
    }
  }

  drawSprites();
}