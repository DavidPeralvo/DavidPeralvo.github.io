window.addEventListener("load", function(){
    //Accede al elemento html
    var html=document.documentElement;
    //Accede al body mediante lastChild
    var body=html.lastChild;
    //Accede al head mediante la lista childNodes
    var head=html.childNodes[0];
    //Averigua el número de hijos de body
    var hijosb=document.getElementsByTagName("body")[0].childNodes.length;
    console.log(hijosb);
    //Añádele un párrafo con el texto "Hola a todos"
    var parrafo=document.createElement("p");
    var rellenarparrafo=document.createTextNode("Hola a todos");
    parrafo.appendChild(rellenarparrafo);
    body.appendChild(parrafo);
    //Añádele al principio del body una lista (<ol>) con los nombres de la pareja a la que perteneces.
    var lista=document.createElement("ol");
    var item1=document.createElement("li");
    var textoitem1=document.createTextNode("perro");
    item1.appendChild(textoitem1);
    var item2=document.createElement("li");
    var textoitem2=document.createTextNode("gato");
    item2.appendChild(textoitem2);
    lista.appendChild(item1);
    lista.appendChild(item2);
    body.insertBefore(lista,body.childNodes[0]);
    // Elimina el último párrafo del documento original ("párrafo DOM 3");
    body.removeChild(body.childNodes[body.childNodes.length - 3]);

});