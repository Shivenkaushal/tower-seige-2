class box extends log {
  constructor(x, y,w,h){
    super(x,y,h,w);
    this.visibility=255;
    this.image = loadImage("images/equals.png");
  }
display(){
if (this.body.speed<9){
  super.display();
}
else {

  World.remove(world,this.body);
  push();
  this.visibility=this.visibility-10;
  tint(255,this.visibility);
  image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
  pop();
}
}
};