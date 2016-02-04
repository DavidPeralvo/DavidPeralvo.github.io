/**
 * Created by DavidPeralvoGomez on 3/2/16.
 */
$(document).ready(function(){
    $("a").on("click",function(evento){
        alert("Has pulsado el enlace, pero vamos a cancelar el evento...Por tanto, no vamos llevarte a DesarrolloWeb.com");
        evento.preventDefault();
    })
});
