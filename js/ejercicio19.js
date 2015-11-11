//Implementa PorLineasDos que visualice los números del 0 al 100 separados por comas. Cada múltiplo de 7 o finalizado en 7 ha de comenzar en una línea nueva.
window.onload=function(){
  document.getElementById('mostrar').onclick=PorLineasDos;
  document.getElementById('limpiar').onclick=limpiar;
}

function PorLineasDos() {
  var cadena="";
  for (var i = 0; i <=100; i++) {
    if(multiplo(i) || contiene(i)){
      cadena+=("<br>"+i+",");
    }
    else{
      cadena+=(i+",");
    }

  }
  document.getElementById('resultado').innerHTML="Resulado: <br>"+cadena;

}
function multiplo(numero){
  if(numero%7==0){
    return true;
  }
  else{
    return false;
  }

}
function contiene(numero){
  if(numero%10==7){
    return true;
  }
  else {
    return false;
  }
}

function limpiar() {
  document.getElementById('resultado').innerHTML="";
}
