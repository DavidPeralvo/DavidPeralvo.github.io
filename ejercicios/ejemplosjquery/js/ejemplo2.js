/**
 * Created by DavidPeralvoGomez on 2/2/16.
 */

$(document).ready(function(){

    $('#capa').mouseenter(function(evento){
        $('#mensaje').css("display","block");
    });

    $('#capa').mouseleave(function(evento){
        $('#mensaje').css("display","none");
    });

});