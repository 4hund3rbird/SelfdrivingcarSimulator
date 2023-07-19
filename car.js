
class Car{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        
        this.controller=new Controller();
        this.sensor=new Sensor(this);

        this.maxspeed=5;
        this.friction=0.05;
        this.speed=0;
        this.acceleration=0.2;
        this.angle=0;
        this.steer=0.02;
        // this.controls=new Controls()
    };

    update(borders){
        this.#move();
        this.sensor.update(borders);

    }

    #createpolygons(){
        
    }

    #move(){
        if(this.controller.forward){
            this.speed+=this.acceleration;
            }


            if(this.controller.reverse){
                this.speed-=this.acceleration;
            }

            if(this.speed>this.maxspeed){
                this.speed=this.maxspeed;
            }

            if(this.speed<-this.maxspeed/2){
                this.speed=-this.maxspeed/2;
            }

            if(this.speed>0){
                this.speed-=this.friction
            }

            if(this.speed<0){
                this.speed+=this.friction;
            }
            if(Math.abs(this.speed)<this.friction){
                this.speed=0;
            }

            if(this.speed!=0){
                const flip=this.speed>0?1:-1;
                if(this.controller.left){
                    this.angle+=this.steer*flip
                }
                if(this.controller.right){
                    this.angle-=this.steer*flip
                }
            }
            

            this.x-=Math.sin(this.angle)*this.speed;
            this.y-=Math.cos(this.angle)*this.speed;
            
    }
    
    draw(ctx){
        ctx.save();
        ctx.translate(this.x,this.y);
        ctx.rotate(-this.angle);
        ctx.fillStyle="blue"
        ctx.beginPath();
        ctx.fillRect(
            -this.width/2,
            -this.height/2,
            this.width,
            this.height);
        ctx.restore();
        this.sensor.draw(ctx);
    };
}