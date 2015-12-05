/**
 * Created by DavidPeralvoGomez on 3/12/15.
 */
function carga() {
    setTimeout("document.getElementById('cargando').style. display = 'none'", 3000);



}

document.getElementById("boton").onclick=function(){
    document.getElementById("formulario").style.display='block';
    document.getElementById("boton").style.display='none';

};

document.getElementById("enviar").onclick=function(){

    document.getElementById("formulario").style.display='none';
    document.getElementById("boton").style.display='block';

     var titulo=document.getElementById("nombreTarea").value;
     var modulo=document.getElementById("modulo").value;
     var descripcion=document.getElementById("contenido").value;
     var horario=document.getElementById("hora").value;
    var fecha=document.getElementById("fecha").value;
    if(comprobarFecha(fecha) && comprobarHora(horario)) {
        var fechaEntrega=fecha+" - "+horario;
        document.getElementById("actividad").innerHTML += "<br><article>" + titulo + "<hr><h3>Modulo:</h3>"+modulo+"<h3>Tarea:</h3>" + descripcion + "<br><h3>Fecha Entega:</h3>" + fechaEntrega + "</article>";

        titulo=document.getElementById("nombreTarea").value="";
        modulo=document.getElementById("modulo").value="";
        descripcion=document.getElementById("contenido").value="";
        horario=document.getElementById("hora").value="";
        fecha=document.getElementById("fecha").value="";
    }

    else{
        var error=document.getElementById("formatoIncorrecto");
        document.getElementById("boton").style.display='none';
        error.style.display="block";
        error.innerHTML="";
        var tipoError="";
        if(comprobarFecha(fecha)){
          tipoError="Formato de hora o hora introducida incorrecta";
        }
        else{
            tipoError="Formato de fecha o fecha introducida incorrecta";
        }
        error.innerHTML="<div id='error'>"+tipoError+"<br><br> <input type='button' value='Aceptar'id='aceptar'></div>";
        document.getElementById("aceptar").onclick=function(){
            error.style.display="none";
            document.getElementById("boton").style.display='block';
        }
    }

    console.log(comprobarFecha(fecha));
    console.log(comprobarHora(hora));

}
document.getElementById("cancelar").onclick=function(){
    document.getElementById("formulario").style.display='none';
    document.getElementById("boton").style.display='block';
}
function comprobarFecha(fecha){
    var ExpReg=/(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
    return ExpReg.test(fecha);
}

function  comprobarHora(hora){
    var ExpReg=/^[0-2][0-9]:[0-5][0-9]$/;
    return ExpReg.test(hora);
}



window.onload = carga;
