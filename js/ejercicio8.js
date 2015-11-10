//Implementa ComprobacionFecha que solicite el día, el mes y el año e indique si la fecha es correcta. Si lo fuera, ha de mostrar el día después.

window.onload=function(){
  document.getElementById('boton').onclick=ComprobacionFecha;

}


function ComprobacionFecha() {
  var dia;
  var mes;
  var anno;
  var fecha=document.getElementById('fecha').value;
    if(validarFecha(fecha)){
      document.getElementById('contenido').innerHTML="Fecha Correcta";
       var valores=fecha.split("/");
       dia=parseInt(valores[0]);
       mes=parseInt(valores[1]);
       anno=parseInt(valores[2]);
       switch (mes) {
         case   1:
          if(dia==31){   mes++; dia=1;}
          else{ dia++;}
        break;
         case 2:
             if(dia==28||dia==29){mes++; dia=1;}
           else {dia++;}
        break;
        case 3:
           if(dia==31){mes++;dia=1;   }
           else{dia++;}
        break;
        case 4:
           if(dia==30){mes++;dia=1;}
           else{dia++;}
        break;
        case 5:
           if(dia==31){mes++;dia=1;}
           else{dia++;}
        break;
        case 6:
           if(dia==30){mes++;dia=1;}
           else{dia++;}
        break;
        case 7:
           if(dia==31){mes++;dia=1;}
           else{dia++;}
        break;
        case 8:
           if(dia==31){mes++;dia=1;}
           else{dia++;}
        break;
        case 9:
           if(dia==30){mes++;dia=1;}
           else{dia++;}
        break;
        case 10:
            if(dia==31){mes++;dia=1;}
             else{dia++;}
        break;
        case 11:
           if(dia==30){mes++;dia=1;}
           else{dia++;}
        break;
        case 12:
           if(dia==31){mes=1;dia=1;anno++;}
           else{dia++;}
        break;

       }

       document.getElementById('dias').innerHTML="El dia siguiente es: "+dia+"/"+mes+"/"+anno;

      }
    else {
    document.getElementById('contenido').innerHTML="La fecha introducida no es correcta";
  }
}


function validarFecha(n){
var reg = /^([1-9]|[12][0-9]|3[01])(\/|-)([1-9]|[1][0-2])\2(\d{4})$/
var resultado=reg.test(n);

  return resultado;
}
