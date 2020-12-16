class Transformations{
    
    
    translate2D(v,dx,dy){
        /*V1*/
        /* 
        var translacao = new Vector(v.size,v.value)
        translacao = translacao.set(3,1)
        
        var matrizProj = new Matrix(3,3,[1,0,dx,0,1,dy,0,0,1])
        var la = new LinearAlgebra()

        translacao = la.dot(matrizProj,v)

        return translacao
        */
       /**V2 */
       var vetorTrans = new Vector(3,[v.values[0],v.values[1],1])
       var matrixProjetada = new Matrix(3,3,[1,0,dx,0,1,dy,0,0,1])
       var la = new LinearAlgebra()
       vetorTrans = la.dot(matrixProjetada,vetorTrans)
       return vetorTrans
    }
    
    translate3D(v,dx,dy,dz){
        /*
        var translacao = new Vector(v.size,v.value)
        var matrizProj = new Matrix(4,4,[1,0,0,dx,0,1,0,dy,0,0,1,dz,0,0,0,1])
        var la = new LinearAlgebra()
        translacao = la.dot(matrizProj,v)
        return translacao
        /*VERSAO 2*/
        //FUNCIONANDO!
        var vetorTrans = new Vector(4,[v.values[0],v.values[1],v.values[2],1])
 
        var matrixProjetada = new Matrix(4,4,[1,0,0,dx,0,1,0,dy,0,0,1,dz,0,0,0,1])
        var la = new LinearAlgebra()
        vetorTrans = la.dot(matrixProjetada,vetorTrans)
        return vetorTrans
    }

    rotation2D(v,angle){
        //var rad = Math.PI*angle/180
        var rad = angle * (Math.PI/180)
        var rotacao = new Vector(v.size,v.value)
        var matrizRot = new Matrix(2,2,[Math.cos(rad),-Math.sin(rad),Math.sin(rad),Math.cos(rad)])
        var la = new LinearAlgebra()
        rotacao = la.dot(matrizRot,v)
        return rotacao
        
       
    }

    rotation3D(v,angle){
        var rad = Math.PI*angle/180
        var rotacao = new Vector(4,[v.values[0],v.values[1],v.values[2],1])
        var matrizRot = new Matrix(4,4,[Math.cos(rad),-Math.sin(rad),0,0,Math.sin(rad),Math.cos(rad),0,0,0,0,1,0,0,0,0,1])
        var la = new LinearAlgebra()
        rotacao = la.dot(matrizRot,rotacao)
        return rotacao
    }
    
    projection2D(v){
        //ideia basica, multiplicar as diagonais por -1
        var progecao = new Vector(v.size,v.value)
        var matrizProj = new Matrix(2,2,[1,0,0,1])
        var la = new LinearAlgebra()

        progecao = la.multVec(matrizProj,v)

        return progecao
    }


    scale2D(v,value){
        //TODO:
    }
    scale3D(v,value){
        //TODO:
    }

    reflection2D(v){
        //ideia basica, multiplicar as diagonais por -1
        var reflexao = new Vector(v.size,v.value)
        var matrizRef = new Matrix(2,2,[-1,0,0,-1])
        var la = new LinearAlgebra()

        reflexao = la.multVec(matrizRef,v)

        return reflexao
    }

    reflection3D(v){
        //ideia basica, multiplicar as diagonais por -1
        var reflexao = new Vector(v.size,v.value)
        var matrizRef = new Matrix(4,4,[1,0,0,0,0,1,0,0,0,0,-1,0,0,0,0,1])
        var la = new LinearAlgebra()

        reflexao = la.multVec(matrizRef,v)

        return reflexao
    }

    shearing(v){
        //Basicamente para Cisalhamento, nós alteramos os zeros na matriz indentidade...
        var cisalhamento = new Vector(v.size,v.value)
        var matrizCilha = new Matrix(2,2,[1,0.5,0,1])
        var la = new LinearAlgebra()
        cisalhamento = la.multVec(matrizCilha,v)
        return cisalhamento
    }


}