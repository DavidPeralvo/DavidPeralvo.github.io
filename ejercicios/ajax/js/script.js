/**
 * Created by DavidPeralvoGomez on 7/3/16.
 */

window.onload = function() {
    var estadosHttp = ['No inicializado', 'Abierta', 'Cargado', 'Interactivo', 'Completado'];
    var tiempoInicial = 0;
    var cabeceras = document.getElementById('cabeceras');
    var codigo = document.getElementById('codigo');
    var estados = document.getElementById('estados');
    var contenido=document.getElementById('contenidos');
    var recurso = document.getElementById('recurso');
    recurso.value = location.href;
    document.getElementById('enviar').onclick = cargaContenido;

    function cargaContenido() {

        contenido.innerHTML = "";
        estados.innerHTML = "";
        peticion = new XMLHttpRequest();


        peticion.onreadystatechange = muestraContenido;

        tiempoInicial = new Date();
        var recurso = document.getElementById('recurso').value;
        peticion.open('GET', recurso + '?nocache=' + Math.random(), true);
        peticion.send(null);
    }


    function muestraContenido() {
        var tiempoFinal = new Date();
        var tiempoms = tiempoFinal - tiempoInicial;

        estados.innerHTML +=estadosHttp[peticion.readyState] + "<br/>";

        if (peticion.readyState == 4) {
            if (peticion.status == 200) {
                contenido.innerHTML = peticion.responseText.transformaCaracteres();
            }
            muestraEstado();
            muestraCabecera();
        }
    }

    function muestraCabecera() {
        cabeceras.innerHTML = peticion.getAllResponseHeaders().transformaCaracteres();
    }

    function muestraEstado() {
        codigo.innerHTML = peticion.status+"-"+peticion.statusText;
    }
}

String.prototype.transformaCaracteres = function() {
    return unescape(escape(this).
    replace(/%0A/g, '<br/>').
    replace(/%3C/g, '&lt;').
    replace(/%3E/g, '&gt;'));
}