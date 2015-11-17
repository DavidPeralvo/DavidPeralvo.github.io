//Implementa PorLineas que visualice los números del 0 al 100 separados por comas. Cada múltiplo de 7 ha de comenzar en una línea nueva.
window.onload=function(){
  document.getElementById('mostrar').onclick=PorLineas;
  document.getElementById('limpiar').onclick=limpiar;
}

function PorLineas() {
  var cadena="";
  for (var i = 0; i <=100; i++) {
    if(i%7==0){
      cadena+=("<br>"+i+",");
    }
    else{
      cadena+=(i+",");
    }

  }
  document.getElementById('resultado').innerHTML="Resulado: <br>"+cadena;

}

function limpiar() {
  document.getElementById('resultado').innerHTML="";
}
