/**
 * Created by DavidPeralvoGomez on 7/2/16.
 */

function Universitario(nombre,apellido1,apellido2,fecha){
    this.nombre=nombre;
    this.apellido1=apellido1;
    this.apellido2=apellido2;
    this.fecha=fecha;

}


function comprobarFecha(fecha){
    fecha.style.border="1px solid gray";
    var valoresfecha=fecha.value;

    var reg=/^(\d{1,2})-(\d{1,2})-(\d{4})$/;
    if(reg.test(valoresfecha)) {
        var fechatroceada=valoresfecha.split("-");
        var dia=fechatroceada[0];
        var mes=fechatroceada[1];
        var anno=fechatroceada[2];
        var date= new Date(anno,mes,0);
        if(mes>12) {
            fecha.style.border = "1px solid red";
            return false;
        }
        else {
            if ((dia - 0) > (date.getDate() - 0)) {
                fecha.style.border = "1px solid red";
                return false;

            }
            else {
                fecha.style.border="1px solid gray";
                return true;}}}
    else{
        fecha.style.border = "1px solid red";
        return false;

    }

}
function validartexto(cadena){
    var reg = /\D[A-Za-zÁÉÍÓÚáéíóú]{3}/;
    cadena.style.border="1px solid gray";
    if(reg.test(cadena.value.trim())){
        fecha.style.border="1px solid gray";
        return true;
    }
    else{
        cadena.style.border="1px solid red";
        return false;

    }
}
function setCookie(nombre, valor, tiempo) {
    var d = new Date();
    d.setTime(d.getTime() + (tiempo*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = nombre + "=" + valor + "; " + expires;
}
function getCookie(nombre) {
    var valor = nombre + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(valor) == 0) return c.substring(valor.length,c.length);
    }
    return "";
}
function mostrarCookie(nombre,apellido1,apellido2,fecha){

    var cookienombre=getCookie('nombre');
    var cookieapellido1=getCookie('apellido1');
    var cookieapellido2=getCookie('apellido2');
    var cookiefecha=getCookie('fecha');
    nombre.value=cookienombre;
    apellido1.value=cookieapellido1;
    apellido2.value=cookieapellido2;
    fecha.value=cookiefecha;

}

function mostrar(universitario){
    var ventana=window.open("","");
    ventana.document.open();
    ventana.document.write("<html><head><tittle>Nueva alta</tittle></head> <body> <p> Nombre: "+universitario.nombre+" <br> Apellidos:" +
        ""+universitario.apellido1+" "+ universitario.apellido2+" <br> Fecha: "+universitario.fecha+"</p></body></html>");

}

function comprobarCondiciones(condiciones){
    return(condiciones.checked);
}

window.addEventListener("load",function(){
    var nombre,apellido1,apellido2,fecha,enviar,condiciones,condicioneserror,borrar;
    nombre=document.getElementById('nombre');
    apellido1=document.getElementById('apellido1');
    apellido2=document.getElementById('apellido2');
    fecha=document.getElementById('fecha');
    enviar=document.getElementById('enviar');
    borrar=document.getElementById('borrar');
    condiciones=document.getElementById('condiciones');
    condicioneserror=document.getElementById('errcondiciones');

    mostrarCookie(nombre,apellido1,apellido2,fecha);

    borrar.addEventListener('click', function(){
       nombre.style.border="1px solid gray";
        apellido1.style.border="1px solid gray";
        apellido2.style.border="1px solid gray";
        fecha.style.border="1px solid gray";
        setCookie("nombre",nombre.value,-1);
        setCookie("apellido1",apellido1.value,-1);
        setCookie("apellido2",apellido2.value,-1);
        setCookie("fecha",fecha.value,-1);

    });
    enviar.addEventListener('click' ,function (evento){
        evento.preventDefault();

        if(comprobarCondiciones(condiciones)){
            condicioneserror.innerHTML="";
            if(validartexto(nombre) && validartexto(apellido1) && validartexto(apellido2) &&comprobarFecha(fecha)){
                 universitario = new Universitario(nombre.value,apellido1.value,apellido2.value,fecha.value);

                setCookie("nombre",universitario.nombre,365);
                setCookie("apellido1",universitario.apellido1,365);
                setCookie("apellido2",universitario.apellido2,365);
                setCookie("fecha",universitario.fecha,365);

                mostrar(universitario);

            }

        }
        else{
            condicioneserror.innerHTML="* Debes aceptar las condiciones";

        }


    });


});