//Implementa MultiplosDeCinco que pida 7 números e indique si alguno es múltiplo de 5.
window.onload=function(){
  document.getElementById('boton').onclick=recogerDatos;
}
function recogerDatos(){
  estado=true;
  var formulario=document.forms.formulario;
   var valores=new Array();

  for (var i = 0; i < (formulario.length-1); i++) {
    if(formulario.elements[i].value ==""){

      estado=false;

    }
    else{
      estado=true;
    }
		if(formulario.elements[i].value%5 == 0){
			valores.push(formulario.elements[i].value);
}
}
if(estado){
document.getElementById('resultado').innerHTML=valores;}
else{
  document.getElementById('resultado').innerHTML="Error de datos, compruebelos y vuelva a enviarlos";
}
}
