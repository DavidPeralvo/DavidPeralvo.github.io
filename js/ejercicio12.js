//Implementa CerosYUnos que lea una secuencia de ceros y unos. Mostrará el número de ceros de la secuencia. Dejará de leer cuando el usuario introduzca el número 2.
ceros=0;
window.onload=function(){
  document.getElementById('boton').onclick=calcular;
}
function calcular(){
  var numero=parseInt(document.getElementById('numeros').value);
  if(validarValor(numero)){
    if(numero==2){
      document.getElementById('contenido').innerHTML="Hay "+ceros+" ceros.";
    }
    if(numero==0){
      ceros++;
  }
}
  else{
    document.getElementById('contenido').innerHTML="Valor erroneo, solo 1 y 0."
  }
  
}
function validarValor(numero){
  if(numero==1||numero==2||numero==0){
    return true;
  }
  else{
    return false;
  }

}
