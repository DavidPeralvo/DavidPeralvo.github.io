/**
 * Created by DavidPeralvoGomez on 2/2/16.
 */

$(document).ready(function(){
    $('#botona').on("click", function(){$('#capa').html('Has echo click en el boton A')});
    $('#botonb').on("click",function(){$('#capa').html('Has echo click en el boton B')});

});
