/**
 * Created by DavidPeralvoGomez on 4/2/16.
 */

$(document).ready(function(){
    $("#flecha").on("click", function(){
        var posicion = $("#quiensoy").offset().top;
        $("html, body").animate({
            scrollTop: posicion
        }, 1500);



    });
    $("#flecha2").on("click", function() {
        var posicion = $("#intro").offset().top;
        $("html, body").animate({
            scrollTop: posicion
        }, 1500);
    })
    $("#flecha3").on("click", function() {
        var posicion = $("#conocimientos").offset().top;
        $("html, body").animate({
            scrollTop: posicion
        }, 1500);
    });
});