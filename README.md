# Bliblioteca de Algebra Linear

## Olá, seja bem vindo, este repositorio se refere a todos os trabalhos, de minha cadeira da faculdade de algebra linear: <p> Onde a ideia consite em ser uma biblioteca que contenha a maioria das ferramentas para Algebra Linear básica em javascript.<p>No repositorio contem uma Pagina demo, para demostrar as funcionalidades.


* <a href="#matrix">Classe Matrix - Como usar</a> 
* <a href="#vector">Classe Vector - Como usar</a>  
* <a href="#LinearAlgebra">Classe Linear Algebra - Como usar</a> 
* <a href="#tranformation">Classe Transformations - Como usar</a> ,
* <a href="#autor">Autor</a>

<div id="matrix">
<h1>Classe matrix</h1>
<p> 
    Essa é a classe mais básica para poder usar a biblioteca, todas as operações que forem realizar terão que ultilizar um objeto dessa classe. 
</p>
<p>
    A classe matrix, contem 3 contrutores: Rows(Linhas),Cols(Colunas),Values(Valores da matrix): Onde, irá criar o objeto, para ele poder ser manipulado depois:
    <h2>EXEMPLO: </h2>
    <img alt="Como criar uma matriz" title="#Matriz" src="./readMe/gifMatriz.gif"/>
</p>
<P>
    <h2>Metodos da classe:</h2>
    Essa classe contem três metodos nela: get,set e getIndex: 
    <ul>
        <li><a href="#get">Get</a></li>
        <li><a href="#set">Set</a></li>
        <li><a href="#getIndex">GetIndex</a></li>
    </ul>
</P>

<p id="get">
<h2>GET</h2>
 O metodo get é para pegar uma informção de dentro da classe. Basicamente utilizamos ela para pegar um valor especifico que queremos
 OBS: o valor na matriz começa no 1
 <h1>EXEMPLO: </h1>
    <img alt="Como criar uma matriz" title="#Matriz" src="./readMe/get.gif"/>
</p>

<p id="set">
<h2>SET</h2>
 O metodo set é para jogar uma informção de dentro da classe. Basicamente utilizamos ela para jogar um valor especifico que queremos
 OBS: o valor na matriz começa no 1
 <h1>EXEMPLO: </h1>
    <img alt="Como criar uma matriz" title="#Matriz" src="./readMe/set.gif"/>
</p>

<p id="getIndex">
<h2>GET-INDEX</h2>
 O metodo getIndex é para pegar a informação especifica de onde estaria a posição especifica no vetor. Basicamente utilizamos ela para pegar um valor especifico que fica no vetor(Basicamente seria o mesmo que get - 1)
 <h2>EXEMPLO: </h2>
    <img alt="Como criar uma matriz" title="#Matriz" src="./readMe/getIndex.gif"/>
</p>

</div>
<div id="vector">
<h1>Classe Vetor</h1>
<p> 
    Uma extenção da classe matrix, onde é basicamente um vetor(Tipo de estrutura de dados), que vai ser importante para especificações na hora de transições Lineares. 
</p>
<p>
    A classe Vector, contem 2 contrutores:Dim(),Values(Valores da matrix): Onde irá criar o objeto para ele poder ser manipulado depois:
    <h2>EXEMPLO: </h2>
    <img alt="Como criar uma matriz" title="#Matriz" src="./readMe/gifVector.gif"/>
</p>

<P>
    <h2>Metodos da classe:</h2>
    Essa classe contem dois metodos nela: get e set: 
    <ul>
        <li><a href="#get">Get</a></li>
        <li><a href="#set">Set</a></li>
    </ul>
</P>

<p id="get">
<h2>GET</h2>
 O metodo get é para pegar uma informção de dentro da classe. Basicamente utilizamos ela para pegar um valor especifico que queremos
 OBS: o valor no vetor começa no 1
 <h2>EXEMPLO: </h2>
    <img alt="Como criar uma matriz" title="#Matriz" src="./readMe/getVector.gif"/>
</p>

<p id="set">
<h2>SET</h2>
 O metodo set é para jogar uma informção de dentro da classe. Basicamente utilizamos ela para jogar um valor especifico que queremos
 OBS: o valor no vetor começa no 1
 <h2>EXEMPLO: </h2>
    <img alt="Como criar uma matriz" title="#Matriz" src="./readMe/setVector.gif"/>
</p>
</div>

<div id="LinearAlgebra">
<h1>Classe LinearAlgebra</h1>
<p>Uma classe onde conste vários metodos de operações entre matrizes.</p>
<p>
Para usar essa classe basta instanciar no seu codigo. Lembrando que ela só aceita as estruturas de dados já mencionadas anteriomente!
<h2>Exemplo: </h2>
<img alt="Como criar uma matriz" title="#Matriz" src="./readMe/intanciaLinearAlgebra.gif"/>
</p>
<P>
    <h2>Metodos da classe:</h2> 
    <ul>
        <li><a href="#tr">Transpose</a></li>
        <li><a href="#pl">Plus</a></li>
        <li><a href="#menos">Menos</a></li>
        <li><a href="#times">Times</a></li>
        <li><a href="#div">Div</a></li>
        <li><a href="#dot">Dot</a></li>
        <li><a href="#solve">Solve</a></li>
        <li><a href="#solveAux">SolveAux</a></li>
        <li><a href="#det">Det</a></li>
        <li><a href="#inverse">Inverse</a></li>
    </ul>
</P>
</div>