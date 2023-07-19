class Road{
    constructor(x,width,lane_count=3){
        this.x=x;
        this.width=width;
        this.lane_count=lane_count;

        this.left=x-width/2;
        this.right=x+width/2;

        const infinity=10000000;
        this.top=-infinity;
        this.bottom=infinity;

        const topLeft={x:this.left,y:this.top};
        const bottomLeft={x:this.left,y:this.bottom};
        const topRight={x:this.right,y:this.top};
        const bottomRight={x:this.right,y:this.bottom};

        this.borders=[
            [topLeft,bottomLeft],
            [topRight,bottomRight]
        ]
    }
    getlanecenter(laneindex){
        const lanewidth=this.width/this.lane_count;
        return this.left+lanewidth/2+
        Math.min(laneindex,this.lane_count-1)*lanewidth;
    }
    draw(ctx){
        // ctx.setLineDash([30,20]);
        ctx.lineWidth=5;
        ctx.strokeStyle="yellow";

        
        
        ctx.setLineDash([]);
        for(let i=1;i<=this.lane_count;i++){
            const x=lerp(this.left,this.right,i/this.lane_count);
            if(i>0 && i<this.lane_count){
                ctx.strokeStyle="white";
                ctx.lineWidth=3;
                ctx.setLineDash([30,30]);
            } else{
                ctx.strokeStyle="yellow";
                ctx.lineWidth=5;
                ctx.setLineDash([]);
            }
            ctx.beginPath();
            ctx.moveTo(x,this.top);
            
            ctx.lineTo(x,this.bottom);

            ctx.stroke();
            
        }

        this.borders.forEach((border)=>{
            ctx.beginPath();
            // ctx.setLineDash([20,20]);
            ctx.moveTo(border[0].x,border[0].y);
            ctx.lineTo(border[1].x,border[1].y);
            ctx.stroke();
            
        })

       
    }
}

