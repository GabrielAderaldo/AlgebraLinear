let circulo 
function setup(){
    createCanvas(600,400,WEBGL)
    createEasyCam();
    circulo = new sphere(200,200,100,50,10,10)   
}
function draw(){
    background(50)
    circulo.setColor("#00FF00")
    circulo.draw()
}