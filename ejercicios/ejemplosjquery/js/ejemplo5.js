/**
 * Created by DavidPeralvoGomez on 3/2/16.
 */
$(document).ready(function(){
    $('a').mouseover(function(){
        $('#capa').addClass("classcss");
    });
    $('a').mouseout(function(){
        $("#capa").removeClass("classcss");
    });


});