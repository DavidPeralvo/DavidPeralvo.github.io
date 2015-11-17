/**
 * Created by DavidPeralvoGomez on 17/11/15.
 */

function mostrar(valor,indice){
    document.write(valor+" indice: "+indice);
    document.write("<br>");
    document.close();

}

function funcion(){
    var cadena=["hola","adios","Padre","madre"];


    cadena.forEach(mostrar)

}
window.addEventListener("load",funcion);
