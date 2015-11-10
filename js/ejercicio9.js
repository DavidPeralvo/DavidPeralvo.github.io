//Implementa ComprobacionHora que solicite los segundos, minutos y hora e indique si es correcta. Si lo fuera, ha de mostrar la hora un segundo después.
window.onload=function(){
  document.getElementById('boton').onclick=calculahora;

}

function calculahora() {
      var hora=parseInt(document.getElementById('horas').value);
      var minutos=parseInt(document.getElementById('minutos').value);
      var segundos=parseInt(document.getElementById('segundos').value);
      if(validarFecha(hora,minutos,segundos)){
        if(segundos>=59){
          minutos++;
          segundos=1;
        }
        else{
          segundos++;
        }
        if(minutos> 59 ){
          hora++;
          minutos=0;
        }

        document.getElementById('comprobacion').innerHTML="La hora un segundo despues : "+hora+":"+minutos+":"+segundos;

      }
      else {
        document.getElementById('comprobacion').innerHTML="Datos erroneos, vuelva a intentarlo."
      }


}

function validarFecha(hora,minutos,segundos){

  if(minutos>60||minutos<0 || hora>60 || hora<0 ||segundos>60 ||segundos<0){
    return false;
  }
  else{
    return true;
  }
}
