class Stone
{
   constructor(x,y,r)
   {
      var options = {
       isStatic : false,
       friction : 1,
       density : 1.2
      }

    this.body = Bodies.circle(this.x,this.y,this.r,options);
    this.x = x;
    this.y = y;
    this.r = r;
    World.add(world,this.body);
    this.stoneImage = loadImage("stone.png")
    
   }

   display()
   {
       var pos = this.body.position;
       push();
       translate(pos.x,pos.y);
       rotate(this.body.angle);
       ImageMode(RADIUS);
      
       image(this.stoneImage,0,0,this.r);
       
       pop();


   }
}