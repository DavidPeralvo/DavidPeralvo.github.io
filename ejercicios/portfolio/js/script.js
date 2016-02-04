/**
 * Created by DavidPeralvoGomez on 4/2/16.
 */

$(document).ready(function(){
    $("#flecha").on("click", function(){
        var posicion = $("#cabezera").offset().top;
        $("html, body").animate({
            scrollTop: posicion
        }, 1500);
    });
});