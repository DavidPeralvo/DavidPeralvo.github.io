/**
 * Created by DavidPeralvoGomez on 8/3/16.
 */

$(document).ready(function() {
    var recurso = $('#recurso');
    var contenido = $('#contenidos');
    var cabeceras = $('#cabeceras');
    var estados = $('#estados');
    var codigo = $('#codigo');
    var enviar = $('#enviar');
    var estadosHttp = ['UNINITIALIZED', 'LOADING', 'LOADED', 'INTERACTIVE', 'COMPLETE'];

    recurso.val(location.href);
    enviar.on("click",function(evento){
        recurso.val();
        cargaContenido();

    });
    function limpiar(){
        contenido.innerHTML = "";
        estados.innerHTML = "";
        }

    function cargaContenido() {
        limpiar();
        peticion = $.ajax({
            url: recurso.val(),
            cache: false,
            dataType: "html",
            complete: muestraContenido,
            success: completo,
            error: error
        });

    }


    function muestraContenido() {

        estados.html(""+estadosHttp[peticion.readyState]+"<br/>");
        cabeceras.html(replace((peticion.getAllResponseHeaders())));
        codigo.html(peticion.status);

    }

        function completo(){
            contenido.html(replace(peticion.responseText));
        }

        function error(){
            contenido.html("Error, la petición ha fallado");
        }
    function replace(str) {
        return decodeURI(encodeURI(str)
            .replace(/%0A/g, '<br/>')
            .replace(/%3C/g, '&lt;')
            .replace(/%3E/g, '&gt;'));
    }

});