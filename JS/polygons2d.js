
class Rectangle{
    constructor(x,y,w,h){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.points = []
        this.points.push(new Vector(3, [x, y, 1]))
        this.points.push(new Vector(3, [x + w, y, 1]))
        this.points.push(new Vector(3, [x + w, y + h, 1]))
        this.points.push(new Vector(3, [x, y + h, 1]))
        this.color = "#000000"

        this.tr = new Transformations()
    }

    setColor(newColor){
        this.color = newColor
    }

    translate(dx,dy){
        let translate
      
        for(let a=0;a<this.points.length;a++){
          
            translate = this.tr.translate2D(this.points[a],dx,dy)
            this.points[a].values[0] = translate.values[0]
            this.points[a].values[1] = translate.values[1]
           

        }
    }

    rotation(angle){
        for(let i= 0;i<this.points.length;i++){
            this.points[i] = this.tr.rotation2D(this.points[i],angle)
        }
    }

    draw(){

        strokeWeight(0);
        stroke(this.color);
        fill(this.color);

        beginShape(TRIANGLES);

        

        
        vertex(this.points[0].values[0], this.points[0].values[1])//p0
        vertex(this.points[1].values[0], this.points[1].values[1])//p1
        vertex(this.points[3].values[0], this.points[3].values[1])//p3
        //this.rotation(180)
        //this.translate(-this.x,-this.y)
        //this.rotation(180)
        //this.translate(this.x,this.y)
        //vertex(this.points[0].values[0]+this.w, this.points[0].values[1]+this.h)//p0
        //vertex(this.points[1].values[0]+this.w, this.points[1].values[1]+this.h)//p1
        //vertex(this.points[3].values[0]+this.w, this.points[3].values[1]+this.h)//p3
        vertex(this.points[1].values[0], this.points[1].values[1])//p1
        vertex(this.points[2].values[0], this.points[2].values[1])//p2
        vertex(this.points[3].values[0], this.points[3].values[1])//p3
        this.translate(-this.x-(this.w/2),-this.y-(this.h/2))
        this.rotation(1)
        this.translate(this.x+(this.w/2),this.y+(this.h/2))


        var vertice0Pinicial = this.points[0].values[0]
        var vertice0Final = this.points[0].values[1]
        
        var vertice1Pinicial = this.points[1].get(1)
        var vertice1Final = this.points[1].get(2)

        var vertice3Pinicial = this.points[3].get(1)
        var vertice3Final = this.points[3].get(2)
        
        endShape(CLOSE);
        
    }

}

class Triangle{
    

    constructor(x,y,w,h){
        this.points = []
        this.x = x
        this.y = y
        this.w = w
        this.h = h

        this.points.push(new Vector(3, [x, y, 1]));
        this.points.push(new Vector(3, [x + w, y, 1]));
        this.points.push(new Vector(3, [x, y + h, 1]));
        this.color = '#000000'

        this.tr = new Transformations() 
    }

    setColor(newColor){
        this.color = newColor
    }

    translate(dx,dy){
        let translate
        for(let i=0;i<this.points.length;i++){
            translate = this.tr.translate2D(this.points[i],dx,dy)
            this.points[i].values[0] = translate.values[0]
            this.points[i].values[1] = translate.values[1]
        }
        
    }

    rotation(angle){
     
        for(let i=0;i<this.points.length;i++){
            
            this.points[i] = this.tr.rotation2D(this.points[i],angle)
        }
       
    }

    draw(){
        strokeWeight(0);
        stroke(this.color);
        fill(this.color);
        beginShape(TRIANGLES);

        vertex(this.points[0].values[0], this.points[0].values[1])
        vertex(this.points[1].values[0], this.points[1].values[1])
        vertex(this.points[2].values[0], this.points[2].values[1])
        this.translate(-this.x-(this.w/2),-this.y-(this.h/2))
        this.rotation(1)
        this.translate(this.x+(this.w/2),this.y+(this.h/2))
        endShape(CLOSE);
 
        
    }



//fim da classe
}

class Line{

    constructor(x,y,w,h){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.points = []

        this.points.push(new Vector(3, [x, y, 1]));
        this.points.push(new Vector(3, [x + w, y, 1]));
        this.color = '#000000'

        this.tr = new Transformations()
    }

    setColor(newColor){
        this.color = newColor
    }

    translate(dx,dy){
       let translate
        for(let i=0;i<this.points.length;i++){
            translate = this.tr.rotation2D(this.points[i],dx,dy)
            this.points[i].values[0] = translate.values[0]
            this.points[i].values[1] = translate.values[1]
        }
    }

    rotation(angle){
        
        for(let i=0;i<this.points.length;i++){
            this.points[i] = this.tr.rotation2D(this.points[i],angle)
        }
    }

    draw(){
        strokeWeight(15);
        stroke(this.color);
        fill(this.color);

        beginShape(TRIANGLES);

        vertex(this.points[0].values[0], this.points[0].values[1])
        vertex(this.points[1].values[0], this.points[1].values[1])
        this.translate(-this.x-(this.w/2),-this.y-(this.h/2))
        this.rotation(1)
        this.translate(this.x+(this.w/2),this.y+(this.h/2))
        endShape(CLOSE);
    }

}

class Circle{
    constructor(x,y,r,triangle){
        this.x = x 
        this.y = y

        this.triangle = triangle
        this.points = []

        this.points.push(new Vector(3,[0,0,1]))
        this.points.push(new Vector(3,[0+r,0,1]))
        this.color = "#000000"

        this.tr = new Transformations()
    }

    setColor(newColor){
        this.color = newColor
    }

    translate(dx,dy){
        let translate
        for(let i=0;i< this.points.length;i++){
            translate = this.tr.translate2D(this.points[i],dx,dy)
            this.points[i].values[0] = translate.values[0]
            this.points[i].values[1] = translate.values[1]
           }

    }

    rotation(angle){
        for(let i=0;i<this.points.length;i++){
            this.points[i] = this.tr.rotation2D(this.points[i],angle)
        }
    }

    draw(){
        strokeWeight(1);
        stroke(this.color);
        fill(this.color);

        beginShape(TRIANGLES);
        for(let i =0; i<this.triangle;i+=1){
            this.translate(this.x,this.y)
            vertex(this.points[0].values[0], this.points[0].values[1])
            vertex(this.points[1].values[0], this.points[1].values[1])
            this.translate(-(this.x),-(this.y))
            this.rotation(360/this.triangle)
            this.translate(this.x,this.y)
            vertex(this.points[1].values[0], this.points[1].values[1])
            this.translate(-(this.x),-(this.y))
           
        }
        endShape(CLOSE);
    }
    
//fim da classe
}



