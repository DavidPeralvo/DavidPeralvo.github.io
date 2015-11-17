//Implementa PiramideDos que mediante un bucle for visualice una pirámide del siguiente tipo:

//1
//12
//123
//1234
//12345
//123456
//1234567
//12345678
//123456789
//1234567890
window.onload=function() {
  document.getElementById('boton').onclick=piramidedos;
  document.getElementById('limpiar').onclick=limpiar;
}

function piramidedos() {
  var cadena="";
  for (var i = 1; i <= 10; i++) {
    for (var j = 1  ; j <=i ; j++) {
      cadena+= j%10 ;

    }
    cadena+="<br>";
  }

  document.getElementById('resultado').innerHTML=cadena;

}

function limpiar() {
  document.getElementById('resultado').innerHTML="";
}
