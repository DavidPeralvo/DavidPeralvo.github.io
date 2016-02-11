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
        var posicion = $("#contacto").offset().top;
        $("html, body").animate({
            scrollTop: posicion
        }, 1500);
    });
    $("#flecha4").on("click", function() {
        var posicion = $("#quiensoy").offset().top;
        $("html, body").animate({
            scrollTop: posicion
        }, 1500);
    });

    $("#twitter").on("click",function(){
        window.location="https://www.twitter.com/peralvo_93";
    });
    $("#facebook").on("click",function(){
        window.location="https://www.facebook.com/davidperalvo";
    });
    $("#google").on("click",function(){
        window.location="https://plus.google.com/101977406332373158070";
    });
    $("#email").on("click",function(){
        window.location.href = "mailto:davidperalvo@gmail.com";
    });
    $("#github").on("click",function(){
        window.location.href = "https://github.com/DavidPeralvo/";
    });
    $("#linkedin").on("click",function(){
        window.location.href = "https://es.linkedin.com/in/david-peralvo-1962b8a4";
    });


});