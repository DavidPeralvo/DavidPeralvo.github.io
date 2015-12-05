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
        ventanaGato.document.write("");


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
    if(peso==""){
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






