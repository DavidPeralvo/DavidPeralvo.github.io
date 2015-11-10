//Implementa el juego “Adivínalo”. Consiste en que el usuario ha de adivinar un número entre el 1 y el 100. Mostrará un mensaje:
  //a. Para indicar si has acertado (en una nueva ventana)
  //b. Para indicar si la solución es mayor o es menor.
//Al finalizar, se le preguntará al usuario si quiere repetir el juego.
function obtener(){
  valor = parseInt(document.getElementById("numero").value.trim());
  return valor;
}



window.onload=function (){
    document.getElementById('boton').onclick=partida;
   numeroadivinar=Math.ceil(Math.random()*100);
  console.log(numeroadivinar);
  document.getElementById('ayuda').innerHtml="";
}
function partida(){
    var numero= obtener();
    var respuesta="";

    if(numero < 0 || numero > 100){
      respuesta="Por favor numeros entre 1 y 100."
    }
    else{
    if(numero<numeroadivinar){
      respuesta="El número es pequeño, vuelve a intentarlo";
    }
    else{
      if(numero>numeroadivinar){
        respuesta="El número es muy grande, vuelve a intentarlo";
      }
      else {
        abrirventana();
      }
    }


}
document.getElementById('ayuda').innerHTML = respuesta;
}

function abrirventana(){

    nuevaVentana=window.open("","hola","toolbar=yes,location=no , menubar=yes resizable=yes, width='300px',height'300px' ");
    nuevaVentana.document.write("<html><head><meta charset='utf-8'><title>Enhorabuena</title></head><body><h1>¡Has acertado!</h1><br><br> <p>¿Quieres seguir jugando?<br><br><input type='Button' name='si' value='Reiniciar juego'id='respuesta'></p></body></html>");
    nuevaVentana.document.close();
    nuevaVentana.document.getElementById('respuesta').onclick=nuevaPartida;


}

function nuevaPartida(){
  nuevaVentana.window.close();
  window.location.reload();
}
