/**
 * Created by DavidPeralvoGomez on 20/1/16.
 */

window.addEventListener("load",function(){
   var usuario=document.getElementById('usuario');
    var clave=document.getElementById('clave');
    var enviar=document.getElementById('enviar');
    var borrar=document.getElementById('borrar');
    var mostrar=document.getElementById('ver');
    var caja=document.getElementById("caja");


enviar.addEventListener("click",function(){
        caja.innerHTML="";
        setCookie("usuario", usuario.value, 365);
        setCookie("clave", clave.value, 365);




});

mostrar.addEventListener("click",function(){
   mostrarCookie();

});

    borrar.addEventListener("click", function(){
        setCookie("usuario", usuario.value, -1);
        setCookie("clave", clave.value, -1);
        caja.innerHTML="Cookie Borrada";
    }
    );




});

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
function mostrarCookie(){
    caja.innerHTML="";
    var cookieusuario=getCookie('usuario');
    var cookieclave=getCookie('clave');
    usuario.value=cookieusuario;
    clave.value=cookieclave ;}