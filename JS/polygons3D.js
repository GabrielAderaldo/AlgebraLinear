class Parallelogram{
    constructor(x, y, z, w, h, l){
        //Outros contructors
        this.x = x
        this.y = y
        this.z = z
        this.w = w
        this.h = h
        this.l = l
        //
        this.points = [];
        this.points.push(new Vector(3,[x, y, z])); 
        this.points.push(new Vector(3,[x + w, y, z]));
        this.points.push(new Vector(3,[x + w, y + h, z]));
        this.points.push(new Vector(3,[x, y + h, z])); 

        this.points.push(new Vector(3,[x, y, z - l])); 
        this.points.push(new Vector(3,[x + w, y, z - l]));
        this.points.push(new Vector(3,[x + w, y + h, z - l]));
        this.points.push(new Vector(3,[x, y + h, z - l]));
        this.newColor = "#000000"
        this.tr = new Transformations()
    }

    setColor(newColor){
        this.newColor = newColor
    }

    translate(dx,dy,dz){
        let translate
       
        for(let a=0;a<this.points.length;a++){
            translate = this.tr.translate3D(this.points[a],dx,dy,dz)
            this.points[a].values[0] = translate.values[0]
            this.points[a].values[1] = translate.values[1]
            this.points[a].values[2] = translate.values[2]
        }
       
    }

    rotation(angle){
        for(let i= 0;i<this.points.length;i++){
            this.points[i] = this.tr.rotation3D(this.points[i],angle)
        }
    }


    draw() {

        beginShape(TRIANGLES);
            fill(this.newColor)
            strokeWeight(1);
            stroke(0,0,0)
            //FACE FRONTAL
            vertex(this.points[0].values[0], this.points[0].values[1], this.points[0].values[2]);
            vertex(this.points[1].values[0], this.points[1].values[1], this.points[1].values[2]);
            vertex(this.points[3].values[0], this.points[3].values[1], this.points[3].values[2]);

            vertex(this.points[1].values[0], this.points[1].values[1], this.points[0].values[2]);
            vertex(this.points[2].values[0], this.points[2].values[1], this.points[2].values[2]);
            vertex(this.points[3].values[0], this.points[3].values[1], this.points[3].values[2]);


            //FACE TRASEIRA
            vertex(this.points[4].values[0], this.points[4].values[1], this.points[4].values[2]);
            vertex(this.points[5].values[0], this.points[5].values[1], this.points[5].values[2]);
            vertex(this.points[7].values[0], this.points[7].values[1], this.points[7].values[2]);

            vertex(this.points[5].values[0], this.points[5].values[1], this.points[5].values[2]);
            vertex(this.points[6].values[0], this.points[6].values[1], this.points[6].values[2]);
            vertex(this.points[7].values[0], this.points[7].values[1], this.points[7].values[2]);


            //FACE ESQUERDA
            vertex(this.points[0].values[0], this.points[0].values[1], this.points[0].values[2]);
            vertex(this.points[3].values[0], this.points[3].values[1], this.points[3].values[2]);
            vertex(this.points[7].values[0], this.points[7].values[1], this.points[7].values[2]);

            vertex(this.points[0].values[0], this.points[0].values[1], this.points[0].values[2]);
            vertex(this.points[4].values[0], this.points[4].values[1], this.points[4].values[2]);
            vertex(this.points[7].values[0], this.points[7].values[1], this.points[7].values[2]);


            //FACE DIREITA
            vertex(this.points[1].values[0], this.points[1].values[1], this.points[1].values[2]);
            vertex(this.points[2].values[0], this.points[2].values[1], this.points[2].values[2]);
            vertex(this.points[6].values[0], this.points[6].values[1], this.points[6].values[2]);

            vertex(this.points[1].values[0], this.points[1].values[1], this.points[1].values[2]);
            vertex(this.points[5].values[0], this.points[5].values[1], this.points[5].values[2]);
            vertex(this.points[6].values[0], this.points[6].values[1], this.points[6].values[2]);


            //FACE SUPERIOR
            vertex(this.points[0].values[0], this.points[0].values[1], this.points[0].values[2]);
            vertex(this.points[1].values[0], this.points[1].values[1], this.points[1].values[2]);
            vertex(this.points[4].values[0], this.points[4].values[1], this.points[4].values[2]);

            vertex(this.points[1].values[0], this.points[1].values[1], this.points[1].values[2]);
            vertex(this.points[4].values[0], this.points[4].values[1], this.points[4].values[2]);
            vertex(this.points[5].values[0], this.points[5].values[1], this.points[5].values[2]);


            //FACE INFERIOR
            vertex(this.points[3].values[0], this.points[3].values[1], this.points[3].values[2]);
            vertex(this.points[2].values[0], this.points[2].values[1], this.points[2].values[2]);
            vertex(this.points[7].values[0], this.points[7].values[1], this.points[7].values[2]);
           
            vertex(this.points[2].values[0], this.points[2].values[1], this.points[2].values[2]);
            vertex(this.points[7].values[0], this.points[7].values[1], this.points[7].values[2]);
            vertex(this.points[6].values[0], this.points[6].values[1], this.points[6].values[2]);
            this.translate(-this.x-(this.w/2),-this.y-(this.h/2),-this.z-(this.l/2))
            this.rotation(1)
            this.translate(this.x+(this.w/2),this.y+(this.h/2),+this.z+(this.l/2))
        

        endShape(CLOSE);
    }


}

class Plane {
    constructor(x, y, z, w, h, l) {
        //Outros contructors
        this.x = x
        this.y = y
        this.z = z
        this.w = w
        this.h = h
        this.l = l
        //
        this.points = [];
        this.points.push(new Vector(3, [x,y,z]));
        this.points.push(new Vector(3, [x+w,y,z]));
        this.points.push(new Vector(3, [x,y+h,z]));
        this.points.push(new Vector(3, [x+w,y+h,z])); 
        this.newColor = "#0000000"
        this.tr = new Transformations()
    }

    setColor(newColor){
        this.newColor = newColor
    }

    translate(dx,dy,dz){
        let translate
       
        for(let a=0;a<this.points.length;a++){

            translate = this.tr.translate3D(this.points[a],dx,dy,dz)
            this.points[a].values[0] = translate.values[0]
            this.points[a].values[1] = translate.values[1]
            this.points[a].values[2] = translate.values[2]
        }
       
    }

    rotation(angle){
        for(let i= 0;i<this.points.length;i++){
            this.points[i] = this.tr.rotation3D(this.points[i],angle)
        }
    }



    draw() {

        beginShape(TRIANGLES);
            strokeWeight(1);
            fill(this.newColor)
            stroke(0,0,0,0);
            
            vertex(this.points[0].values[0], this.points[0].values[1], this.points[0].values[2]);
            vertex(this.points[3].values[0], this.points[3].values[1], this.points[3].values[2]);
            vertex(this.points[1].values[0], this.points[1].values[1], this.points[1].values[2]);

            vertex(this.points[2].values[0], this.points[2].values[1], this.points[2].values[2]);
            vertex(this.points[3].values[0], this.points[3].values[1], this.points[3].values[2]);
            vertex(this.points[0].values[0], this.points[0].values[1], this.points[0].values[2]);

            this.translate(-this.x-(this.w/2),-this.y-(this.h/2),-this.z-(this.l/2))
            this.rotation(1)
            this.translate(this.x+(this.w/2),this.y+(this.h/2),this.z+(this.l/2))

        endShape(CLOSE);
    }
}


class Pyramid {
    constructor(x, y, z, w, h, l,hp) {
        //Outros contructors
        this.x = x
        this.y = y
        this.z = z
        this.w = w
        this.h = h
        this.l = l
        this.hp = hp
        //
        this.points = [];
        this.points.push(new Vector(3, [x,y,z]));
        this.points.push(new Vector(3, [x+w,y,z]));
        this.points.push(new Vector(3, [x,y+h,z]));
        this.points.push(new Vector(3, [x+w,y+h,z])); 
        this.points.push(new Vector(3, [x+(w/2),y+(h/2),z+l])); 
        this.newColor = "#0000000"
        this.tr = new Transformations()
    }

    setColor(newColor){
        this.newColor = newColor
    }

    translate(dx,dy,dz){
        let translate
       
        for(let a=0;a<this.points.length;a++){
            translate = this.tr.translate3D(this.points[a],dx,dy,dz)
            this.points[a].values[0] = translate.values[0]
            this.points[a].values[1] = translate.values[1]
            this.points[a].values[2] = translate.values[2]
        }
       
    }

    rotation(angle){
        for(let i= 0;i<this.points.length;i++){
            this.points[i] = this.tr.rotation3D(this.points[i],angle)
        }
    }



    draw() {

        beginShape(TRIANGLES);
            strokeWeight(1);
            fill(this.newColor)
            stroke(0,0,0,0);
            
            vertex(this.points[0].values[0], this.points[0].values[1], this.points[0].values[2]);
            vertex(this.points[3].values[0], this.points[3].values[1], this.points[3].values[2]);
            vertex(this.points[1].values[0], this.points[1].values[1], this.points[1].values[2]);

            vertex(this.points[2].values[0], this.points[2].values[1], this.points[2].values[2]);
            vertex(this.points[3].values[0], this.points[3].values[1], this.points[3].values[2]);
            vertex(this.points[0].values[0], this.points[0].values[1], this.points[0].values[2]);

            vertex(this.points[0].values[0], this.points[0].values[1], this.points[0].values[2]);
            vertex(this.points[1].values[0], this.points[1].values[1], this.points[1].values[2]);
            vertex(this.points[4].values[0], this.points[4].values[1], this.points[4].values[2]);

            vertex(this.points[1].values[0], this.points[1].values[1], this.points[1].values[2]);
            vertex(this.points[3].values[0], this.points[3].values[1], this.points[3].values[2]);
            vertex(this.points[4].values[0], this.points[4].values[1], this.points[4].values[2]);

            vertex(this.points[3].values[0], this.points[3].values[1], this.points[3].values[2]);
            vertex(this.points[2].values[0], this.points[2].values[1], this.points[2].values[2]);
            vertex(this.points[4].values[0], this.points[4].values[1], this.points[4].values[2]);

            vertex(this.points[2].values[0], this.points[2].values[1], this.points[2].values[2]);
            vertex(this.points[0].values[0], this.points[0].values[1], this.points[0].values[2]);
            vertex(this.points[4].values[0], this.points[4].values[1], this.points[4].values[2]);

            this.translate(-this.x-(this.w/2),-this.y-(this.h/2),-this.z-(this.l/2))
            this.rotation(1)
            this.translate(this.x+(this.w/2),this.y+(this.h/2),this.z+(this.l/2))

        endShape(CLOSE);
    }
}

class sphere{
    constructor(x, y, z, r, st, se) {
        //Outros contructors
        this.x = x
        this.y = y
        this.z = z
        this.r = r
        this.st = st //quantidade de stacks
        this.se = se//quantidade de sectors
        //
        this.points = [];

        /*Aqui*/
        let xy;
        var sectorStep = 2 * Math.PI / se;
        var stackStep = Math.PI / st;
        var sectorAngle, stackAngle;

        for (let i = 0; i <= st; ++i)
        {
            stackAngle = Math.PI / 2 - i * stackStep;        // starting from pi/2 to -pi/2
            xy = r * Math.cos(stackAngle);             // r * cos(u)
            z = r * Math.sin(stackAngle);              // r * sin(u)

            // add (sectorCount+1) vertices per stack
            // the first and last vertices have same position and normal, but different tex coords
            for (let j = 0; j <= se; ++j)
            {
                sectorAngle = j * sectorStep;           // starting from 0 to 2pi

                // vertex position (x, y, z)
                x = xy * Math.cos(sectorAngle);             // r * cos(u) * cos(v)
                y = xy * Math.sin(sectorAngle);             // r * cos(u) * sin(v)
                this.points.push(new Vector(3,[x,y,z])) //vertices.push_back(x);
                                                      //vertices.push_back(y);
                                                        //vertices.push_back(z);

            }
        }

        this.indice = []
        let k1, k2;
       
        for (let i = 0; i < st; ++i)
        {
            k1 = i * (se + 1);     // beginning of current stack
            k2 = k1 + se + 1;      // beginning of next stack

            for (let j = 0; j < se; ++j, ++k1, ++k2)
            {
                // 2 triangles per sector excluding first and last stacks
                // k1 => k2 => k1+1
                if (i != 0) {
                    
                    this.indice.push(new Vector(3,[k1,k2,k1+1]))
                }

                // k1+1 => k2 => k2+1
                if (i != (st - 1)) {
                    this.indice.push(new Vector(3,[k1+1,k2,k2+1]))
                }
            }
        }
        /**Aqui 2 */
        this.newColor = "#0000000"
        this.tr = new Transformations()
    }

    setColor(newColor){
        this.newColor = newColor
    }

    translate(dx,dy,dz){
        let translate
        let retornoDaFuncao = []
        for(let a=0;a<this.indice.length;a++){
            
            for(let b=0;b<this.indice[a].values.length;b++){
                translate = this.tr.translate3D(this.points[this.indice[a].values[b]],dx,dy,dz)
                retornoDaFuncao.push(new Vector(3,[translate.values[0],translate.values[1],translate.values[2]]))
            }
        }
       return retornoDaFuncao
    }

    rotation(angle){
        for(let i= 0;i<this.points.length;i++){
            this.points[i] = this.tr.rotation3D(this.points[i],angle)
        }
    }

    orbita(){

    }


    draw() {

        beginShape(TRIANGLES);
            strokeWeight(1);
            fill(this.newColor)
            stroke(this.newColor);
            var qualquercoisa = this.translate(this.x,this.y,this.z)
            for(let i = 0; i <qualquercoisa.length; i++) {
            
                vertex(qualquercoisa[i].values[0], qualquercoisa[i].values[1], qualquercoisa[i].values[2]);
                
            }


            
            this.translate(-this.x-(this.w/2),-this.y-(this.h/2),-this.z-(this.l/2))
            this.rotation(1)
            this.translate(this.x+(this.w/2),this.y+(this.h/2),this.z+(this.l/2))
            
           debugger
        endShape(CLOSE);
    }
}

