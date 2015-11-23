/**
 * Created by DavidPeralvoGomez on 16/11/15.
 */


function funcion(){
    array=["a",1,"b",2];

    array=filtro(array);
    console.log(array);
}

function filtro(arr){
    arr2=[];
    for (var i=0;i<=arr.length-1    ;i++){
        var valor= arr[i];

        if(typeof valor== "number"){

            arr2.push(valor);

        }
    }
    return arr2;
}
window.addEventListener("load",funcion);