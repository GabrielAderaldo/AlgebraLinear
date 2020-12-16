let plane

function setup(){
    createCanvas(600,400,WEBGL)
    createEasyCam();
    plane = new Plane(50,50,50,50,50,50)
    
}
function draw(){
    background(50)
    plane.setColor("#00FF00")
    plane.draw()
   
}