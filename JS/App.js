let c
function setup(){
    createCanvas(600,400)
    c = new Circle(100,100,50,50)

}
function draw(){
    background(50)
    c.setColor("#00FF00")
    c.draw()
}