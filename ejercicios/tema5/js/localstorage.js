/**
 * Created by DavidPeralvoGomez on 21/1/16.
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
        localStorage.setItem("usuario", usuario.value);
        localStorage.setItem("clave", clave.value);




    });

    mostrar.addEventListener("click",function(){
        caja.innerHTML="";
        if(localStorage.usuario==undefined){
            usuario.value="";
            clave.value="";
        }else{
        usuario.value=localStorage.usuario;
        clave.value=localStorage.clave;}


    });

    borrar.addEventListener("click", function(){
            localStorage.removeItem("usuario");
            localStorage.removeItem("clave");
            caja.innerHTML="Local Storage Borrada";
        }
    );






});
