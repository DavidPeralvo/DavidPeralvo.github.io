/**
 * Created by DavidPeralvoGomez on 16/11/15.
 */
function funcion(){
console.log("hola");
var cadena="hola-mundo";
console.log(cadena);
console.log(camelize(cadena));


}
function camelize(string){
    str="";
    for(var i= 0; i<string.length; i++) {
        if (string.charAt(i) == "-") {
            str += "";
            str += string[i + 1].toUpperCase();
            i++;
        }
        else {
            str += string[i];
        }

    }
    return str;
}
window.addEventListener("load",funcion);