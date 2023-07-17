function animate(){
    car1.update()
    canvas.height=window.innerHeight;
    ctx.save();
    ctx.translate(0,-car1.y+canvas.height/2)
    road.draw(ctx);
    car1.draw(ctx);
    requestAnimationFrame(animate);
}


const canvas=document.getElementById('mycanvas');
const ctx=canvas.getContext('2d');

const road=new Road(canvas.width/2,canvas.width*0.9);

const car1=new Car(road.getlanecenter(1),350,50,100);
animate();