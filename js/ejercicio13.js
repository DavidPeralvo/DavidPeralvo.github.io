//Implementa ProductoPotencias que calcule y visualice el producto de las potencias de 2 entre 0 y 10.
window.onload=function(){
  document.getElementById('boton').onclick=productoPotencia;
}

function productoPotencia(){
  numero=document.getElementById('potencia').value.trim();
  if(validarNumero(numero)){
    var potencia=parseInt(numero);
    var resultado= Math.pow(2,potencia);
    document.getElementById('resultado').innerHTML="El resultado es: "+resultado;

  }
  else {
    document.getElementById('resultado').innerHTML="Valor introducido no valido";
  }



}
function validarNumero(numero) {
  if(numero==""||numero<0 || numero>10){
    return false ;
  }
  else{
    return true;
  }

}
