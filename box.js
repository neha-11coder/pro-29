class Box{

    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0,
            friction:0.9
        }
        this.body=Bodies.rectangle(x,y,30,40,options);
        this.width=30;
        this.height=40;

        World.add(world,this.body);


    }
    display(){

        var pos=this.body.position;

        push ();
        translate (pos.x,pos.y);

        rectMode(CENTER);
        strokeWeight(3);
        stroke("black");
        rect(0,0,30,40);
        pop ();
    }
}