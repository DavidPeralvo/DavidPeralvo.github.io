//Implementa Pirámide que mediante un bucle for visualice una pirámide del siguiente tipo:
//1
//22
//333
//4444
//55555
//666666
//7777777
//88888888
//999999999
//0000000000

window.onload=function() {
  document.getElementById('boton').onclick=piramide;
  document.getElementById('limpiar').onclick=limpiar;
}

function piramide() {
  var cadena="";
  for (var i = 0; i <= 9; i++) {
    for (var j = 0; j < i ; j++) {
      cadena+=i;

    }
    cadena+="<br>";
  }
  cadena+="0000000000";
  document.getElementById('resultado').innerHTML=cadena;

}

function limpiar() {
  document.getElementById('resultado').innerHTML="";
}
