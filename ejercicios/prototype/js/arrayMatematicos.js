/**
 * Created by DavidPeralvoGomez on 24/11/15.
 */
function ArrayMatematicos(){
    this.filas=document.getElementById("filas").value;
    this.columnas=document.getElementById("columnas").value;
    this.contenido=this.crearArray();
}

ArrayMatematicos.prototype.sumar=function (array2){
    var suma;
    if(this.coincideMatriz(array2)) {
        suma=new ArrayMatematicos();
        for (var i = 0; i < this.filas; i++) {
            for (var j = 0; j < this.columnas; j++) {
                suma.contenido[i][j]= this.contenido[i][j] + array2.contenido[i][j];
            }
        }
        return suma;
    }
    else{
        contendor.innerHTML="Las matrices no son iguales";
    }

}

ArrayMatematicos.prototype.restar=function(array2) {
    var resta;
    if (this.coincideMatriz(array2)) {
        resta = new ArrayMatematicos();
        for (var i = 0; i < this.filas; i++) {
            for (var j = 0; j < this.columnas; j++) {
                resta.contenido[i][j] = this.contenido[i][j] - array2.contenido[i][j];
            }
        }
        return resta;
    }
    else {
        contendor.innerHTML = "Las matrices no son iguales";
    }
}
ArrayMatematicos.prototype.multiplicar=function(array2){
    var multiplicar;
    if(this.coincideMatriz(array2)){
        multiplicar=new ArrayMatematicos();

    }
    else{
        contendor.innerHTML = "Las matrices no son iguales";
    }
}




ArrayMatematicos.prototype.coincideMatriz=function(array2){
    if(this.filas === array2.filas && this.columnas === array2.columnas){
        return true;
    }
    else{
        return false;
    }

}

ArrayMatematicos.prototype.mostrarMatriz= function() {
    var matriz = "";
    for (var i = 0; i < this.filas; i++) {
        for (var j = 0; j < this.columnas; j++) {
            matriz += this.contenido[i][j] + "	";
        }
        matriz += "<br/>";
    }
    return matriz;
}




ArrayMatematicos.prototype.crearArray = function() {
    var matriz = new Array();
    for (var i = 0; i < this.filas; i++) {
        matriz[i] = new Array();
        for (var j = 0; j < this.columnas; j++)
            matriz[i][j] = Math.round(Math.random()*10);
    }
    return matriz;
}

ArrayMatematicos.prototype.transpuesta=function(){
    var matriz =new ArrayMatematicos(this.filas,this.columnas);
    for (var i = 0; i < matriz.filas; i++) {
        for (var j = 0; j < matriz.columnas; j++) {
            matriz.contenido[i][j] = this.contenido[j][i];
        }
    }
    return matriz;

}

function suma(){
    var contenedor=document.getElementById("contenido");
    var sumando1,sumando2,resultado;

    sumando1=new ArrayMatematicos(filas,columnas);
    sumando2=new ArrayMatematicos(filas,columnas);
    resultado=sumando1.sumar(sumando2);
    contenedor.innerHTML="";
    contenedor.innerHTML+="Matriz 1 <br>"+sumando1.mostrarMatriz();
    contenedor.innerHTML+="Matriz 2 <br>"+sumando2.mostrarMatriz();
    contenedor.innerHTML+="Resultado <br>"+resultado.mostrarMatriz();




}
function resta(){
    var contenedor=document.getElementById("contenido");
    var resta1,resta2,resultado;

    resta1=new ArrayMatematicos();
    resta2=new ArrayMatematicos();
    resultado=resta1.restar(resta2);
    contenedor.innerHTML="";
    contenedor.innerHTML+="Matriz 1 <br>"+resta1.mostrarMatriz();
    contenedor.innerHTML+="Matriz 2 <br>"+resta2.mostrarMatriz();
    contenedor.innerHTML+="Resultado <br>"+resultado.mostrarMatriz();




}
function transpuesta(){
    var contenedor=document.getElementById("contenido");
    var trans,resultado;
    trans=new ArrayMatematicos();
    resultado=trans.transpuesta();

    contenedor.innerHTML="";
    contenedor.innerHTML+="Matriz  <br>"+trans.mostrarMatriz();
    contenedor.innerHTML+="Resultado <br>"+resultado.mostrarMatriz();



}



window.addEventListener('load', function(){
    document.getElementById('sumar').addEventListener("click", suma);
    document.getElementById('restar').addEventListener("click", resta);
    document.getElementById('transpuesta').addEventListener("click", transpuesta);
});
