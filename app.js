// import Controls from "./controls.mjs"

class Controls{
    constructor(){
        this.forward=false;
        this.reverse=false;
        this.left=false;
        this.right=false;
        console.log("controls")

        this.#addkeyboard();
    }

    #addkeyboard(){
        document.onkeydown=(event)=>{
            console.log(event);
            switch(event.key){
                case "ArrowUp":
                    this.forward=true;
                    break;
                case "ArrowDown":
                    this.reverse=true;
                    break;

                case "ArrowLeft":
                    this.left=true;
                    break;

                case "ArrowRight":
                    this.right=true;
                    break;

                default:
                    console.log("others")
                    break;

            }
            console.table(this)
        }


        document.onkeyup=(event)=>{
            console.log(event);
            switch(event.key){
                case "ArrowUp":
                    this.forward=false;
                    break;

                case "ArrowDown":
                    this.reverse=false;
                    break;

                case "ArrowLeft":
                    this.left=false;
                    break;

                case "ArrowRight":
                    this.right=false;
                    break;

                default:
                    console.log("others")
            }
            console.table(this)
        }
    }
}


class Car{
    constructor(x,y,width,height){
        this.x=x,
        this.y=y,
        this.width=width,
        this.height=height

        this.controls=new Controls()
    };

    update(){
        if(this.controls.forward){
            this.y-=2;
        }
        if(this.controls.reverse){
            this.y+=2;
        }
    }

    draw(ctx){
        ctx.fillStyle="blue"
        ctx.beginPath();
        ctx.fillRect(
            this.x-this.width/2,
            this.y-this.height/2,
            this.width,
            this.height);
    };
}


function animate(){
    car1.update()
    canvas.height=window.innerHeight;
    car1.draw(ctx);
    requestAnimationFrame(animate);
}


const canvas=document.getElementById('mycanvas');
const ctx=canvas.getContext('2d');

const car1=new Car(150,350,50,100);
animate();