
$(document).ready(function(){
    var casa=$('#casarural');
    casa.delay(1000);
    casa.animate({top:'100%'},2000);


    var tractor=$('#tractor');
    tractor.delay(2000);
    tractor.animate({left:'100%'},2000);

    var  intro=$(".contenido");
    intro.delay(1500);
    intro.hide();
    intro.delay(2000);
    intro.fadeIn(1500);

    if(navigator.cookieEnabled==0){

        $( "#cookie" ).dialog();
    }

});