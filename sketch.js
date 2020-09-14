var car, wall;
var speed, weight;
function setup()  {
createCanvas(1600, 920);
speed = random(55, 90);
weight = random(400, 1500);
car = createSprite(50, 350, 50, 50);
wall = createSprite(1500, 350, 40, height/2);
wall.shapeColor = 'white';

}
function draw()  {
  background(0);
car.velocityX = speed;
if(wall.x-car.x<(car.width+wall.width)/2)
{
  car.velocityX = 0;
  var deformation = 0.5*weight*speed*speed/22509;
  if(deformation>180)
  {
    car.shapeColor = color(255, 0, 0);
    wall.shapeColor = 'yellow';
  }
  if(deformation<180&&deformation>100)
  {
    car.shapeColor = color(230, 230, 0);
    wall.shapeColor = 'green';
  }
  if(deformation<100)
  {
    car.shapeColor = color(0, 255, 0);
    wall.shapeColor = 'red';
  }
}
drawSprites()
}

