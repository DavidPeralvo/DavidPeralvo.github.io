/**
 * Created by DavidPeralvoGomez on 3/2/16.
 */

$(document).ready(function(){

    $('#guardar').on("click",function(evento){
        var valor=document.formul.valor.value;
        $('#division').data("midato",valor);
        $('#division').html('He guardado en este elemento (id="division") un dato llamado "midato" con el valor "' + valor + '"');

    });

    $('#leer').on("click",function(evento){
        valor=$('#division').data("midato");
        $('#division').html('En este elemento(id="division") leo un dato llamado mi dato con el valor :"'+valor+ '"')
    });

    $("#eliminar").on("click",function(evento){
        $("#division").removeData("midato");
        $("#division").html('Acabo de eliminar del elemento (id="division") el dato llamado "midato"');
    });

});