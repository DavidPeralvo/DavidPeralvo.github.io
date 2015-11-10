window.onload=function (){
  document.getElementById('boton').onclick=primos;
}

function primos(){
  var cantidadPrimos=0;
  numero=parseInt(document.getElementById('numero').value.trim());
  if(validar(numero)){

        for(var j=2; j<=numero; j++){
          if(comprobarPrimo(j)){
            cantidadPrimos++;
          }

        }

        document.getElementById('resultado').innerHTML="Entre 1 y "+numero+" hay "+cantidadPrimos+" numeros primos .";




  }
else{
    document.getElementById('resultado').innerHTML="Error de datos, vuelva a introducir un valor";
  }
}




function comprobarPrimo(num){
  respuesta=true;
  for (var i = 2; i <= (num/2); i++) {
        if (num%i == 0) {
            respuesta = false;
                  }
                  return respuesta;}

}
function validar(n){
if(n==""){
  return false}
else{
  return true;}
}
