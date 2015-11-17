/**
 * Created by DavidPeralvoGomez on 16/11/15.
 */


function funcion(){
    var arr=["test", 2, 1.5, false];
    for (var i=0;i<arr.length-1;i++){
        console.log(find(arr,arr[i]))}

}

function find(arr,texto){
   return arr.indexOf(texto);

}

window.addEventListener("load",funcion);