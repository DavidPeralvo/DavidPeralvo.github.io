//Implementa Decena que solicite un número entre 0 y 10 (9,76876) e indique:
//a.cuentas cifras tiene
//b.lo muestre del reves
window.onload=function(){
  document.getElementById('boton').onclick=contador;
}

function contador() {
  valores=document.getElementById('numero').value;
  var longitud = valores.length-1;
  var cadena="";
  for(var i = longitud; i >= 0; i--){
        cadena += valores[i];}
  document.getElementById('longitud').innerHTML="El numero tiene "+longitud+" cifras";
  document.getElementById('reves').innerHTML="El numero del reves: "+cadena;
}
