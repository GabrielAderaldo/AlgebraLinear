class LinearAlgebra{
    

    //funções úteis
    gaus = (a) =>{
        let c = new Matrix(a.rows,a.cols,a.values)
        for(let j=1; j <= c.cols;j++){
            for(let i = j+1 ;i <= c.rows;i++){    
                
                if(c.get(j,j) == 0){
                    let x = j+1
                    while(c.get(x,j) == 0){
                        x++
                    }
                    this.changeRows(c,j,x)
                }
                
                //console.log("K: "+k+" i: "+i+" J: "+j)
                if(c.get(j,j) != 0){
                    let k = c.get(i,j)*-1/c.get(j,j)
                    this.multiplicaLinhaporEscalarESoma(c,j,k,i);
                }
                
                
            }
        }
        return c
    }

    changeRows = (a,ri,rj) =>{
        for(let j =1;j<= a.cols;j++){
            let aux = a.get(ri,j)
            a.set(ri,j,a.get(rj,j))
            a.set(rj,j,aux)
            
        }
        return a
    }

    multiplicaLinhaporEscalar = (a,ri,k) => { 
        for(let j =1; j <= a.cols;j++){
            a.set(ri,j,k * a.get(ri,j))
        }
        
       return a
    }
    //esse!
    multiplicaLinhaporEscalarESoma = (a,ri,k,rj) =>{
        for(let j =1; j<= a.cols;j++){
           a.set(rj,j,k * a.get(ri,j) + a.get(rj,j))
        }
        return a
    }


    transpose(a){
        //falta a verificação se é uma matriz que tá entrando...
        let c = new Matrix(a.cols,a.rows);
        for(let i = 1;i<=c.rows;i++){
            for(let j=1;j<=c.cols;j++){
                c.set(i,j,a.get(j,i));
            }
        }
        return c;
    }

    plus(a,b){
        //falta a verificação se é uma matriz que tá entrando...

        if(a.rows != b.rows || a.cols != b.cols){
            if(a.rows != b.rows){
                throw "As linhas da primeira matriz não bate com a segunda..."+
                       "Verifique e tente novamente." 
            }
            if(a.cols != b.cols){
                throw "As colunas da primeria matriz não bate com a segunda"+
                      "Verifique e tente novamente."
            }
        }

        let c = new Matrix(a.rows,a.cols);

        for(let i = 1;i<=c.rows;i++){
            for(let j=1;j<=c.cols;j++){
            c.set(i,j,a.get(i,j) + b.get(i,j));
            }
        }

        return c;

    //fim do metodo
    }

    menos(a,b){
        //falta a verificação se é uma matriz que tá entrando...

        if(a.rows != b.rows || a.cols != b.cols){
            if(a.rows != b.rows){
                throw "As linhas da primeira matriz não bate com a segunda..."+
                       "Verifique e tente novamente." 
            }
            if(a.cols != b.cols){
                throw "As colunas da primeria matriz não bate com a segunda"+
                      "Verifique e tente novamente."
            }
        }

        let c = new Matrix(a.rows,a.cols);

        for(let i = 1;i<=c.rows;i++){
            for(let j=1;j<=c.cols;j++){
            c.set(i,j,a.get(i,j) - b.get(i,j));
            }
        }

        return c;

    //fim do metodo
    }

    multVec(a,b){
        //primeiro tratar as matrizes e os vetores...
        var vetorUltilizado = new Vector(b.size)
        var arrayAUX = []
        var teste =0
        for(let i =1;i <=a.rows;i++){
            for(let j=1;j <=a.cols;j++){
                var valor = a.get(i,j)*b.get(i)

                arrayAUX.push(valor)

            }
            for(let z=0;z<arrayAUX.length;z++){
                teste = arrayAUX[z]+teste
               
            }
            vetorUltilizado.set(i,teste)
            arrayAUX = []
            teste = 0
        }
        return vetorUltilizado
    }

    times(a,b){


        if(typeof b!= "object" || !(b instanceof Matrix)){
            throw "O parametro b deve ser uma matriz";
        }

         

        let c = new Matrix(a.rows,a.cols);

        if(typeof a == "number"){

            for(let i = 1;i<=c.rows;i++){
                for(let j=1;j<=c.cols;j++){
                c.set(i,j,k * a.get(i,j));
                }
            }
    
        }else if(typeof a == "object" && a instanceof Matrix){
            if(a.rows != b.rows || a.cols != b.cols){
                if(a.rows != b.rows){
                    throw "As linhas da primeira matriz não bate com a segunda..."+
                           "Verifique e tente novamente." 
                }
                if(a.cols != b.cols){
                    throw "As colunas da primeria matriz não bate com a segunda"+
                          "Verifique e tente novamente."
                }
            }
    
                for(let i = 1;i<=c.rows;i++){
                    for(let j=1;j<=c.cols;j++){
                    c.set(i,j,a.get(i,j) * b.get(i,j));
                    }
                }
    
        }else{
            throw "O parametro ultilzado deve ser um carater numerico ou uma matriz..."
        }

        return c;

    //fim do metodo
    }

    div(a,b){

        if(typeof a!= "object" || !(a instanceof Matrix) || typeof b!= "object" || !(b instanceof Matrix)  ){
            throw "Os parametros devem ser uma matriz";
        }

        if(a.rows != b.rows || a.cols != b.cols){
            if(a.rows != b.rows){
                throw "As linhas da primeira matriz não bate com a segunda..."+
                       "Verifique e tente novamente." 
            }
            if(a.cols != b.cols){
                throw "As colunas da primeria matriz não bate com a segunda"+
                      "Verifique e tente novamente."
            }
        }

        for(let i=0;i< b.values.length;i++){
            if(b.values[i] == 0){
                throw "A matriz B contem pelo menos um elemento nulo."
            }
        }

        let c = new Matrix(a.rows,a.cols);

        for(let i = 1;i<=c.rows;i++){
            for(let j=1;j<=c.cols;j++){
            c.set(i,j,a.get(i,j) / b.get(i,j));
            }
        }   
        
        return c

    }


    dot(a, b) {
        let c = new Matrix(a.rows, b.cols);
        for(let i = 1; i <= a.rows; i++) {
            for(let j = 1; j <= b.cols; j++) {
                for(let k = 1; k <= a.cols;k++) {
                    c.set(i, j, a.get(i, k) * b.get(k, j) + c.get(i, j));
                }
            }
        }
        return c;
    }

    solve(a){
       const start = performance.now()
        //Horario começo
        let c = new Matrix(a.rows,a.cols,a.values)
      
        //Baixo
        for(let j=1; j <= c.cols;j++){
            for(let i = j+1 ;i <= c.rows;i++){    
                
                if(c.get(j,j) == 0){
                    let x = j+1
                    while(c.get(x,j) == 0){
                        x++
                    }
                    this.changeRows(c,j,x)
                }
                
                //console.log("K: "+k+" i: "+i+" J: "+j)
                if(c.get(j,j) != 0){
                    let k = c.get(i,j) * -1/ c.get(j,j)
                    this.multiplicaLinhaporEscalarESoma(c,j,k,i);
                }
                
            }
        }

        //Cima
        for(let j=Math.min(c.rows,c.cols);j>=1;j--){
            for(let i =j-1;i>=1;i--){

                if(c.get(j,j) != 0){
                    let k = c.get(i,j) * -1/ c.get(j,j)
                    //console.log("K: "+k+" i: "+i+" J: "+j)
                    this.multiplicaLinhaporEscalarESoma(c,j,k,i);
                }
                
            }
        }


        for(let i=1; i <=Math.min(c.rows,c.cols);i++){
            
            
            if(c.get(i,i) != 0){this.multiplicaLinhaporEscalar(c,i,1/c.get(i,i))}
        }
        


        
        let vector = new Vector(c.rows);
        for(let i =1; i<= vector.size;i++){
            vector.set(i,c.get(i,c.cols))
        }
        const end = performance.now();
        let time = end-start;
        console.log("Time: "+ time);
        
       return vector 
      // return c
    }


    solveAux(a){
        const start = performance.now()
         //Horario começo
         let c = new Matrix(a.rows,a.cols,a.values)
       
         //Baixo
         for(let j=1; j <= c.cols;j++){
             for(let i = j+1 ;i <= c.rows;i++){    
                 
                 if(c.get(j,j) == 0){
                     let x = j+1
                     while(c.get(x,j) == 0){
                         x++
                     }
                     this.changeRows(c,j,x)
                 }
                 
                 //console.log("K: "+k+" i: "+i+" J: "+j)
                 if(c.get(j,j) != 0){
                     let k = c.get(i,j) * -1/ c.get(j,j)
                     this.multiplicaLinhaporEscalarESoma(c,j,k,i);
                 }
                 
             }
         }
 
         //Cima
         for(let j=Math.min(c.rows,c.cols);j>=1;j--){
             for(let i =j-1;i>=1;i--){
 
                 if(c.get(j,j) != 0){
                     let k = c.get(i,j) * -1/ c.get(j,j)
                     //console.log("K: "+k+" i: "+i+" J: "+j)
                     this.multiplicaLinhaporEscalarESoma(c,j,k,i);
                 }
                 
             }
         }
 
 
         for(let i=1; i <=Math.min(c.rows,c.cols);i++){
             
             
             if(c.get(i,i) != 0){this.multiplicaLinhaporEscalar(c,i,1/c.get(i,i))}
         }
         
 
 
         
         let vector = new Vector(c.rows);
         for(let i =1; i<= vector.size;i++){
             vector.set(i,c.get(i,c.cols))
         }
         const end = performance.now();
         let time = end-start;
         console.log("Time: "+ time);
        //return vector 
        return c
     }

     
     
    //calcular o determinate da matriz...(Metodo feito e certo...)
    det(a){
        //verificação se é quadrada...
        if(a.rows != a.cols){
            return "Para fazer essa funcionalidade, precisa ser uma MATRIZ QUADRADA(mesmo numero de linhas e colunas: EX: 2X2,3X3,4X4...)"
        } else if(a instanceof Matrix){
            var resultadoGaus = this.gaus(a)
            
            var vector = new Vector(a.rows)
            for(let i=1;i <= vector.size;i++){
                vector.set(i,resultadoGaus.get(i,i))
            }
           //Calcular o determinante...
           var determinante = 1
           for(let i=1;i<=vector.size;i++){
               determinante = determinante*vector.get(i)
           }
           return determinante
            
        }else{
            throw "O paramentro do metodo tem que ser uma matriz..."
        }


    }

    
   
    //Essa função ta funcionando...
    inverse(a){
        
        let matrizAux = new Matrix(a.rows,2*a.cols);
        //setando os valores para a matriz
        for(let i=1;i<= a.rows;i++){
            for(let j=1;j<=a.cols;j++){
               
                matrizAux.set(i,j,a.get(i,j));
                if(i == j){
                    matrizAux.set(i,j+a.cols,1)
                }else{
                    matrizAux.set(i,j+a.cols,0)
                }
                

            }
        }


        let teste = this.solveAux(matrizAux)
        return teste;


    }
    
 //fim da classe 
}