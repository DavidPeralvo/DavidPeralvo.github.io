/**
 * Created by DavidPeralvoGomez on 16/11/15.
 */

function funcion(){
    var obj={className:'JS PHP'}
    console.log(obj.className);
    addClass(obj,"HTML");
    console.log(obj.className);
    addClass(obj,"CCS");
    console.log(obj.className);

}

function  addClass(obj,string){
    array = obj.className.split(" ");
    for (var i = 0; i < array.length; i++) {
        if(string == array[i]){
            return ;
        }
    }
    obj.className += " " + string;


}

window.addEventListener("load",funcion);