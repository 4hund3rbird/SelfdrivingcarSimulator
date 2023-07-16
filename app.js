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