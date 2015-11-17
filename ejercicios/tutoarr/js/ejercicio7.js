/**
 * Created by DavidPeralvoGomez on 16/11/15.
 */
function  funcion(){
    var obj= {className:"Php Android"}
    removeClass(obj,"js");
    console.log(obj.className);
    removeClass(obj,"Android");
    console.log(obj.className);

}
function  removeClass(obj,str){
    cadena=obj.className.split(" ");
    for(var i=0;i<cadena.length;i++){
        if(cadena[i]==str){
            cadena.splice(i,1);
        }
    }
    obj.className=cadena.join(" ");


}

window.addEventListener("load",funcion);

