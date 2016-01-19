/**
 * Created by DavidPeralvoGomez on 19/1/16.
 */

    window.addEventListener("load",function(){
    document.getElementById("reserva").onclick=function(){
        document.getElementById('filtro').style.display="block";
        document.getElementsByTagName("main").style.overflow="hidden";
    }
        document.getElementById('reservaok').onclick=function(){
            document.getElementById('filtro').style.display='none';
        }
    });



