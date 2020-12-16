class Matrix{

    //criando o contrutor...
    constructor(rows,cols,values){

        this.cols = cols;
        this.rows = rows;
        this.values = values;

        //comecando a fazer as verificacoes...
        if(values == undefined){
           this.values = []
           for(let i =0;i < this.rows * this.cols;i++){
               this.values.push(0)
           }  
        }
        else{

           //this.values = values
            
            //verificando se o tamanho é compativel...
            if(values.length == this.cols*this.rows){
                this.values = values
            }else{
                throw "Valor incopativel com o tamanho da matriz..."
            }

            

        }

    }



    get(i,j){
        return this.values[this.getIndex(i,j)]
    }
    set(i,j,values){
        this.values[this.getIndex(i,j)] = values
    }
    getIndex(i,j){
        /*
        if(i< 1 || i > this.rows){throw "A linha: "+i+" não conta nessa matriz, por favor verifique a operacao novamente..."}
        if(j< 1 || j > this.rows){throw "A coluna: "+j+" não conta nessa matriz, por favor verifique a operacao novamente..."}
        */
        return (j-1) + (i-1) * this.cols
    }


}
