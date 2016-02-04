/**
 * Created by DavidPeralvoGomez on 3/2/16.
 */
$(document).ready(function(){

    $('#mayoria_edad').on("click",function(){
       if($('#mayoria_edad').attr("checked")){
           $('#formulariomayores').css("display","none");
       }
        else{
           $('#formulariomayores').css("display","block");
       }
    });

});