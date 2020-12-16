var raioTerra = 2
var distanciaTerra = 50*raioTerra+(raioTerra*10)


let sol,mercurio,venus,terra,lua,marte,jupiter,saturno,urano,netuno,plutão

function setup(){
    createCanvas(1080,720,WEBGL)
    createEasyCam();
    sol = new sphere(0,0,0,10*raioTerra,10,10)
    mercurio = new sphere(distanciaTerra*0.387,0,0,raioTerra*0.19,10,10)
    venus = new sphere(distanciaTerra*0.723,0,0,raioTerra*474.5,10,10)
    terra = new sphere(distanciaTerra,0,0,raioTerra,10,10) 
    lua = new sphere(distanciaTerra*1.00257+raioTerra,0,0,0.1362*raioTerra,10,10) 
    marte = new sphere(distanciaTerra*1.52,0,0,0.266*raioTerra,10,10)
    jupiter = new sphere(distanciaTerra*5.2,0,0,5.6*raioTerra,10,10)
    saturno = new sphere(distanciaTerra*9.58,0,0,raioTerra*4.73,10,10)
    urano = new sphere(distanciaTerra*19.2,0,0,raioTerra*2,10,10)
    netuno = new sphere(distanciaTerra*30.05,0,0,raioTerra*1.94,10,10)
    plutão = new sphere(distanciaTerra*39.48,0,0,raioTerra*0.0125,10,10)

}
function draw(){
    background(0)
    sol.setColor("#FFFF00")
    sol.draw()
    mercurio.setColor("#FFFFFF")
    mercurio.draw()
    venus.setColor("#FFFFFF")
    venus.draw()
    terra.setColor("#0000ff")
    terra.draw()
    lua.setColor("#FFFFFF")
    lua.draw()
    marte.setColor("#FFFFFF")
    marte.draw()
    jupiter.setColor("#FFFFFF")
    jupiter.draw()
    saturno.setColor("#FFFFFF")
    saturno.draw()
    urano.setColor("#FFFFFF")
    urano.draw()
    netuno.setColor("#FFFFFF")
    netuno.draw()
    plutão.setColor("#FFFFFF")
    plutão.draw()

    
}