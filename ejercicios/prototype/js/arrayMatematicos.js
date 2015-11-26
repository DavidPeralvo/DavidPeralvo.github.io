/**
 * Created by DavidPeralvoGomez on 24/11/15.
 */
function arrayMatematicos(filas,columnas){
    this.filas=filas;
    this.columnas=columnas;
    this.contenido=new Array();
}

arrayMatematicos.prototype.sumar=function (array2){
    var suma;
    if(this.coincideMatriz(array2)) {
        suma=new arrayMatematicos(this.filas,this.columnas);
        for (var i = 0; i < this.filas; i++) {
            for (var j = 0; j < this.columnas; j++) {
                suma.contenido[i][j]= this.contenido[i][j] + array2.contenido[i][j];
            }
        }
        return suma;
    }
    else{
        //mostrar mensaje
    }

}

arrayMatematicos.prototype.restar=function(array2){
    var resta;
    if(this.coincideMatriz(array2)){
       resta=new arrayMatematicos(this.filas,this.columnas);
        for(var i=0;i<this.filas;i++){
            for(var j=0;j<this.columnas;j++){
                resta.contenido[i][j]=this.contenido[i][j] - array2.contenido[i][j];
            }
        }
        return resta;
    }
    else{
        //mensaje de error
    }



}

arrayMatematicos.prototype.coincideMatriz=function(array2){
    if(this.filas===array2.filas && this.columnas===array2.columnas){
        return true;
    }
    else{
        return false;
    }

}

function inicio(){

    var botonmatriz=document.getElementById("boton");
    botonmatriz.onclick=crearMatriz;



}
function crearMatriz(){

    var filas=document.getElementById("filas").value;
    var columnas=document.getElementById("columnas").value;
    var contenedor=document.getElementById("contenido");


    for(var i=0;i<filas;i++){
        for(var j=0;j<columnas;j++){
            contenedor.innerHTML+="n"+(i+1)+(j+1)+":<input type='text' name='valor' id='"+(i+1)+(j+1)+"+'/>";

        }
        contenedor.innerHTML+="<br>";

    }

    contenedor.innerHTML+="<br><br><input type='button' name='calculo' value='Calcular' id='calcular'>";



}


window.addEventListener("load",inicio);