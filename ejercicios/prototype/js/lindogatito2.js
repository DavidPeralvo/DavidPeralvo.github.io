
gatoDEP=false;
function Gato(nombre, raza, fecha, peso){
    this.nombre = nombre;
    this.raza = raza;
    this.fecha = fecha;
    this.peso = peso;
}

Gato.prototype.gatoMuerto=function(){
    gatoDEP=true;
    document.getElementById('fotoestado').innerHTML="<img src='../img/muerto.jpg'>";
    document.getElementById('comentario').innerHTML="El gato "+this.nombre+" ha muerto.";
    document.getElementById('pesoGato').innerHTML="El peso del gato ya no importa.";
}

Gato.prototype.dormir=function(){
    if(gatoDEP){
        document.getElementById('comentario').innerHTML="El gato "+this.nombre+" murio.";
    }
    else{
        document.getElementById('comentario').innerHTML="El gato esta durmiendo, shhhhhh.";
        document.getElementById('fotoestado').innerHTML="<img src='../img/durmiendo.jpg'>";
    }
}
Gato.prototype.comer=function(){
    if(gatoDEP){
        document.getElementById('comentario').innerHTML="El gato "+this.nombre+" murio. ";
    }
    else{
        document.getElementById('comentario').innerHTML="El gato esta zampando, cuidado con comer tanto.";
        document.getElementById('fotoestado').innerHTML="<img src='../img/comiendo.jpg'>";
        this.peso +=1;
        if(this.peso>=15){
            this.gatoMuerto();
            return;
        }
        document.getElementById("pesoGato").innerHTML="El peso del gato es:"+this.peso+" kg";
    }

}

Gato.prototype.jugar=function(){
    if(gatoDEP){
        document.getElementById('comentario').innerHTML="El gato "+this.nombre+" murio.";

    }
    else{
        document.getElementById('comentario').innerHTML="El gato esta jugando.";
        document.getElementById('fotoestado').innerHTML="<img src='../img/jugando.jpg'>";
        this.peso -= 1;
        if(this.peso<=0){
            this.gatoMuerto();
            return;
        }

        document.getElementById("pesoGato").innerHTML="El peso del gato es:"+this.peso+" kg";
    }
}

function nuevoGato(){
    var nombre= String(window.opener.document.getElementById('nombre').value.trim());
    var raza= window.opener.document.getElementById('raza').value;
    var peso= Number(window.opener.document.getElementById('peso').value.trim());
    var ano=Number(window.opener.document.getElementById('ano').value.trim());
    var mes= window.opener.window.document.getElementById('mes').value;
    var dia= window.opener.window.document.getElementById('dia').value;

    if(comprobarDatos(nombre,dia,mes,ano,peso)){
       var fecha=dia+"/"+mes+"/"+ano;

        var gato=new Gato(nombre,raza,fecha,peso);
        document.getElementById('dormir').addEventListener('click', function(){
            gato.dormir();
        } );
        document.getElementById('jugar').addEventListener('click', function(){
            gato.jugar();
        } );
        document.getElementById('comer').addEventListener('click', function(){
            gato.comer();
        } );

    }
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

window.addEventListener("load",function(){
        nuevoGato();

});