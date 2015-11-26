/**
 * Created by DavidPeralvoGomez on 26/11/15.
 */

var micolor = "White";
var miotrocolor = "Grey";
var mitercercolor = "Black";
var escala = 0.5;
var c=document.getElementById("icono-contacto");
var cxt=c.getContext("2d");

cxt.fillStyle=(miotrocolor);
cxt.beginPath();
cxt.arc(escala*50-10,escala*25,escala*20,0,Math.PI*2,true);
cxt.closePath;
cxt.fill();

cxt.fillStyle=(miotrocolor);
cxt.beginPath();
cxt.arc(escala*50-10,escala*90,escala*40,Math.PI,Math.PI*2,false);
cxt.closePath;
cxt.fill();

cxt.fillStyle=(micolor);
cxt.beginPath();
cxt.arc(escala*50+10,escala*25,escala*20,0,Math.PI*2,true);
cxt.closePath;
cxt.fill();

cxt.fillStyle=(micolor);
cxt.beginPath();
cxt.arc(escala*50+10,escala*90,escala*40,Math.PI,Math.PI*2,false);
cxt.closePath;
cxt.fill();
