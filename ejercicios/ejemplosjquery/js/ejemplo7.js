/**
 * Created by DavidPeralvoGomez on 3/2/16.
 */

$(document).ready(function(){
   $('#ocultar').on("click",function(event){
       event.preventDefault();
       $('#capaefectos').hide("slow");

   });
    $("#mostrar").on("click",function(event){
        event.preventDefault();
        $("#capaefectos").show(3000);
    });

});
