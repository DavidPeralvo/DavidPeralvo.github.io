/**
 * Created by DavidPeralvoGomez on 17/11/15.
 */
function funcion(){
    arr=["HOLA",1,"PEPE",2,"FEDERICO",3];

    filterNumericInPlace(arr);
    console.log(arr);
}

function filterNumericInPlace(arr){

    for (var i=0;i<=arr.length-1;i++){
        var valor= arr[i];

        if(typeof valor!= "number"){

            arr.splice(i,1);

        }
    }


}


window.addEventListener("load",funcion);