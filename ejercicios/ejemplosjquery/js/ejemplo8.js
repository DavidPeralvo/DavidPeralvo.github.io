/**
 * Created by DavidPeralvoGomez on 3/2/16.
 */
$(document).ready(function(){
    $('#enlaceajax').on('click',function(evento){
       evento.preventDefault();
        $('#destino').load("ejemplo8prueba.html");
    });

});