import Controls from "./controls.mjs";
let c1=new Controls();
class Car{
    constructor(x,y,width,height){
        this.x=x,
        this.y=y,
        this.width=width,
        this.height=height
        this.controls=new Controls
    };

    draw(ctx){
        ctx.fillStyle="blue"
        ctx.beginPath();
        ctx.fillRect(this.x,this.y,this.width,this.height);
    };
}

export default Car;

