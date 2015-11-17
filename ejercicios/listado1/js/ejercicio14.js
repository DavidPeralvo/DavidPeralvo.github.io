//Implementa CalculaMedia que pida números hasta que se introduzca uno negativo. Entonces, que muestre la media.
var contador=0;
var suma=0;
window.onload=function(){
  document.getElementById('boton').onclick=calculaMedia;
}

function calculaMedia(){
  var numero=document.getElementById('valores').value.trim();
  if(validarNumero(numero)){
    var valor=parseFloat(numero);
    if(valor<0){
      var resultado=suma/contador;
      document.getElementById('resultado').innerHTML="La media es : "+resultado;
      contador=0;
      suma=0;
    }
    else{
      suma =suma +valor;
      contador++;
      document.getElementById('resultado').innerHTML="Numero de valores introducidos: "+contador+", suma total de valores: "+suma;
    }
  }
  else {
    document.getElementById('resultado').innerHTML="Valor no valido."
  }

}

function validarNumero(numero) {
   if(numero==""){
     return false;
   }
   else {
     return true;
   }
}
