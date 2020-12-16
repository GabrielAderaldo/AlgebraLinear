let t
function setup(){
    createCanvas(600,400)
    t = new Triangle(100,100,50,50)
}
function draw(){
    background(50)
    t.setColor("#00FF00")
    t.draw()
   
}