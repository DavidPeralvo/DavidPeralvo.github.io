/**
 * Created by DavidPeralvoGomez on 3/2/16.
 */

$(document).ready(function(){
    $('a').on("click",function(evento){
        evento.preventDefault();
        valorAlmacenado=$(this).data("midato");
        $("#mensaje").html("En el enlace <b>" + $(this).attr("id") + "</b> tiene el dato 'midato' como " + valorAlmacenado);

    });

    $('#guardar').on("click",function(evento){
        $("a").data("midato","mivalor");
        $("#mensaje").html('He guardado en todos los enlaces un dato llamado "midato" con el valor "mivalor"');
    });
    $("#guardarenlace1").on("click",function(evento) {
        $("#enlace1").data("midato", "otro valor");
        $("#mensaje").html('He guardado en el enlace1 un dato llamado "midato" con el valor "otro valor"');
    });
});