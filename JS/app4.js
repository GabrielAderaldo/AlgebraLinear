//let t
let linha
function setup(){
    createCanvas(600,400)
    //t = new Triangle(100,100,50,50)
    linha = new Line(50,50,50,50)
}
function draw(){
    background(50)
    linha.setColor("#00FF00")
    linha.draw()
    //t.setColor("#00FF00")
    //t.draw()
   
}