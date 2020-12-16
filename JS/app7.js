let piramide

function setup(){
    createCanvas(600,400,WEBGL)
    createEasyCam();
    piramide = new Pyramid(100,100,50,50,50,50,50)
}
function draw(){
    background(50)

    piramide.setColor("#00FF00")
    piramide.draw()
   
}