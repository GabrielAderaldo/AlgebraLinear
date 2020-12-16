let input = document.querySelector('input');
let textarea = document.querySelector('textarea');
let la = new LinearAlgebra()
input.addEventListener('change', () => {
    let files = input.files;
 
    if(files.length == 0) return;
 
    const file = files[0];
 
    let reader = new FileReader();
 
    reader.onload = (e) => {
        const file = e.target.result;
        const lines = file.split(/\r\n|\n/);
        var Valores = lines[21].split(" ");
        let a = new Matrix(Valores[0],Valores[1]);
        
        //Começando a ler a matriz....
        
        for(let i=22;i<lines.length;i++){  
            Valores = lines[i].split(" ");
            
            if(lines[i] === ""){
                console.log("Linha vazia: "+i);
                break
            }else{
                a.set(parseInt(Valores[0]),parseInt(Valores[1]),parseInt(Valores[2]));
            }
        }
       resultado =  la.solve(a)
       console.log(resultado)
    };
 
    reader.onerror = (e) => alert(e.target.error.name);
 
    reader.readAsText(file); 
    
});