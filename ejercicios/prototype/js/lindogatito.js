/**
 * Created by DavidPeralvoGomez on 30/11/15.
 */
function Gato(nombre,fecha,peso,raza){
    this.nombre=nombre;
    this.fecha=fecha;
    this.peso=peso;
    this.raza=raza;

}



function iniciar(){
    error=document.getElementById('error');
    error.innerHTML="";
    nombre=document.getElementById('nombre').value;
    dia=document.getElementById('dia').value;
    mes=document.getElementById('mes').value;
    ano=document.getElementById('ano').value;
    peso=document.getElementById('peso').value;
    raza=document.getElementById('raza').value
    if(comprobarDatos(nombre,dia,mes,ano,peso)){
        fecha=dia+"/"+mes+"/"+ano;
        console.log(fecha);
        gato=new Gato(nombre,fecha,peso,raza);
        var ventanaGato=window.open("","");
        ventanaGato.document.open();
        ventanaGato.document.write("<html><head><meta charset='utf-8'> <title>"+ gato.nombre+"</title>" +
            "<script  type='text/javascript' src='../js/lindogatito2.js'></script><link rel='stylesheet' href='../css/lindogatito.css'> </head>"+
        "<header><h1>Información</h1></header><br> <main><div id='imagen'><img src='../img/gato.jpg' alt=''></div><div id='datos'>Hola mi nombre es "+gato.nombre+", mi raza es "+gato.raza+" y nací el "+gato.fecha+
            "</div><span id='pesoGato'></span></div> <div id='gatoInteraccion'><div id='fotoestado' width='300px' height='300px'></div>"+
            "<div id='comentario'></div></div> <div id='botonera'>"+
            " <input type='button' id='jugar' value='jugar'><input type='button' id='comer' value='comer'>"+
            "<input type='button' id='dormir' value='dormir'><input type='button' id='edad' value='Calcular edad'>  </div> </main></body></html>");
        ventanaGato.document.close();

    }
    else{
        error.innerHTML="Error en los datos";
    }
    console.log(comprobarDatos());
}

function comprobarDatos(nombre,dia,mes,ano,peso){
    datosNombre=comprobarNombre(nombre);
    datosFecha=comprobarFecha(dia,mes,ano);
    datosPeso=comprobarPeso(peso);

    if(datosFecha && datosNombre && datosPeso){
        return true;
    }
    else{
        return false;
    }



}
function comprobarFecha(dia,mes,ano){
    var date=new Date(ano,mes,'0');
    if((dia-0)>(date.getDate()-0)){
        return false
    }
    else{
        return true
    }
}
function comprobarNombre(nombre){
    if(nombre==""){
        return false;
    }
    else{
        return true;
    }

}
function comprobarPeso(peso){
    if(peso=="" || peso>15 || peso<1){
        return false;
    }
    else{
        return true;
    }
}
window.addEventListener('load',function(){

    enviar=document.getElementById('enviar');
    enviar.addEventListener('click',iniciar);
});






