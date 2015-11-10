//Implementa el juego “Adivínalo”. Consiste en que el usuario ha de adivinar un número entre el 1 y el 100. Mostrará un mensaje:
  //a. Para indicar si has acertado (en una nueva ventana)
  //b. Para indicar si la solución es mayor o es menor.
//Al finalizar, se le preguntará al usuario si quiere repetir el juego.
function obtener(){
  valor = document.getElementById("numero");
  return valor;
}
 numero= obtener();


window.onload=function (){
   numeroadivinar=Math.ceil(Math.random()*100);
  console.log(numeroadivinar);
  document.getElementById('ayuda').innerHtml="";
}
function partida(){
    var respuesta="";
    console.log(numero);
    if(numero<numeroadivinar){
      respuesta="El número es pequeño, vuelve a intentarlo";
    }
    else{
      if(numero>numeroadivinar){
        respuesta="El número es muy grande, vuelve a intentarlo";
      }
      else {
        respuesta="El número es correcto.";
      }
    }
    document.getElementById('ayuda').innerHTML = respuesta;

}
