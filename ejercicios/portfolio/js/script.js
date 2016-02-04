/**
 * Created by DavidPeralvoGomez on 4/2/16.
 */

$(document).ready(function(){
    $("#flecha").on("click", function(){
        var posicion = $("#cabezera").offset().top;
        $("html, body").animate({
            scrollTop: posicion
        }, 1500);
        $('header').css("display","block");



    });
    $("#flecha2").on("click", function() {
        var posicion = $("#conocimientos").offset().top;
        $("html, body").animate({
            scrollTop: posicion
        }, 1500);
    });
});