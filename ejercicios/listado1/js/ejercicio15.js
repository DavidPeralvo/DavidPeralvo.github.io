//Implementa MuestraDelUnoAlN que pida un número entero y que muestre la secuencia del 1 al número indicado. En caso de no poder generarse la secuencia (menor que 1), que lo indique.
window.onload=function  (){
  document.getElementById('boton').onclick=muestraDelUnoAIn;
  document.getElementById('limpiar').onclick=limpieza;
}
var contador=0;
function muestraDelUnoAIn() {
  var cadena=""
  var numero=document.getElementById('valor').value.trim();
  if(validarNumero(numero)){
    valor=parseInt(numero);
    for(var i=1;i<=valor;i++){
      if(contador==50){
      cadena+= ("<br>"+i+",");
      contador=0;}
      else{
        cadena+= (i+",");
        contador++;
      }

    }
    document.getElementById('resultado').innerHTML="Secuencia: <br>"+cadena;
  }
  else {
    document.getElementById('resultado').innerHTML="Valor introducido no valido."
  }

}
function validarNumero(numero) {
    if(numero==""||numero<1){
      return false;
    }
    else {
      return true;
    }
}
function limpieza() {
  document.getElementById('resultado').innerHTML="";
}
