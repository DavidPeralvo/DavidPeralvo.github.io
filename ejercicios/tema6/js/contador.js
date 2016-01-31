
window.addEventListener("load",function(){
    var contador=document.getElementById("nnodos");
    cuentanodos=1;

    function contadornodos(raiz){
        var nodoshijos=raiz.childNodes;
        for(var i=0;i<nodoshijos.length;i++){
            if(nodoshijos[i].childNodes.length>0){
                contadornodos(nodoshijos[i]);
            }
            if(nodoshijos[i].attributes != undefined){
                cuentanodos+=nodoshijos[i].attributes.length;
            }
            cuentanodos+=1;
        }

    }
    contadornodos(document);
    cuentanodos-=13;

    contador.innerHTML="Este documento tiene "+cuentanodos+" nodos";

});
