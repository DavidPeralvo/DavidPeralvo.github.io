/**
 * Created by DavidPeralvoGomez on 7/2/16.
 */
window.addEventListener("load", function(){
    var html=document.documentElement;
    var body=html.lastElementChild;
    body.removeChild(body.childNodes[body.childNodes.length - 6]);
    var nombre= document.createElement("p");
    var rellenar= document.createTextNode("David");
    nombre.appendChild(rellenar);
    body.insertBefore(nombre,body.childNodes[3]);
    var apellido=document.createElement("p");
    var rellenarapellido=document.createTextNode("Peralvo");
    apellido.appendChild(rellenarapellido);
    body.appendChild(apellido,body.childNodes[0]);

});