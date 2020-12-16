let paralelo
function setup(){
    createCanvas(600,400,WEBGL)
    createEasyCam();
    paralelo = new Parallelogram(50, -200, 0, 50, 50, 50)
}
function draw(){
    background(50)
    paralelo.setColor("#00FF00")
    paralelo.draw()
   
}