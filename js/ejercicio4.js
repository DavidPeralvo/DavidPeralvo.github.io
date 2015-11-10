//Implenta NumeroPrimo que pida un número e indique si es primo o no.
window.onload=function(){
  document.getElementById('boton').onclick=calcular;
}

function calcular(){
  respuesta=true;
  var numero=document.getElementById('numero').value.trim();
    if(validar(numero)){
      for (var i = 2; i <= (numero/2); i++) {
            if (numero%i == 0) {
                respuesta = false;
                      }
                }
      if(respuesta){
        document.getElementById('resultado').innerHTML="El numero es Primo";
      }
      else{
        document.getElementById('resultado').innerHTML="El numero no es Primo";
      }
    }
    else{
      document.getElementById('resultado').innerHTML="Error de datos, vuelva a introducir un valor";
    }



}
function validar(numero){
  if(numero==""){
    return false
  }
  else{
    return true;
  }
}
