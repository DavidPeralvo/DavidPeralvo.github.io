//Implementa MediaPositivos que calcule la media de una serie de números positivos, introducidos por teclado. Dejará de leer cuando el usuario introduzca el 0.
var contador=0;
 var suma=0;
window.onload=function (){
  document.getElementById('boton').onclick=calcularmedia;
}

function calcularmedia(){
   numero=(document.getElementById('numeros').value.trim());

  console.log(contador);
  console.log(suma);
  console.log(validarValores(numero));
  if(validarValores(numero)){
    document.getElementById('media').innerHTML="";
    valor=parseFloat(numero);
    suma= suma + valor;
    contador++;
    console.log(contador);
    console.log(suma);
    if(numero==0){
      var media=suma/contador;
      document.getElementById('media').innerHTML="La media es: "+media;
      suma=0;
      contador=0;
    }
  }
  else{
    document.getElementById('media').innerHTML="Valor erroneo vuelva a intentarlo";
  }

}

function validarValores(numero){
  if(numero=="" || numero=="e"){
    return false;
  }
  else{
    return true;
  }
}
