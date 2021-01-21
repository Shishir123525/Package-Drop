class Rectangle{
constructor(x,y,width,height){
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
this.body=Bodies.rectangle(x,y,width,height,options)
this.width=width
this.height=height
World.add(world, this.body);
Matter.Body.setStatic(this.body,true)

}
display(){
push();
 translate(this.body.position.x, this.body.position.y);
rectMode(CENTER)
fill("red")
rect(0, 0, this.width, this.height);
pop();
}
}