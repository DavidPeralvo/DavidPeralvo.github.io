



function validarDatos(){



}
function limpiarDatos(){}

window.addEventListener("load",function(){
    var nombre=document.getElementById('nombre');
    var apellido1=document.getElementById('apellido1');
    var apellido2=document.getElementById('apellido2');
    var email= document.getElementById('email');
    var dni=document.getElementById('dni');
    var fecha=document.getElementById('fecha');
    var telefono=document.getElementById('telefono');
    var banco=document.getElementById('banco');
    var url=document.getElementById('url');
    var condiciones=document.getElementById('condiciones');
    var enviar=document.getElementById('enviar');
    document.formulario.enviar.disabled=true;

    nombre.focus();
    nombre.addEventListener("blur",function(){
        if(validarTexto(nombre)){
            nombre.style.border="1px solid green";}
        else{nombre.style.border="1px solid red";}
    });
    apellido1.focus();
    apellido1.addEventListener("blur",function(){
        if(validarTexto(apellido1)){apellido1.style.border="1px solid green";}
        else{apellido2.style.border="1px solid red";}
    });
    apellido2.focus();
    apellido2.addEventListener("blur",function(){
        if(validarTexto(apellido2)){apellido2.style.border="1px solid green";
        } else{apellido2.style.border="1px solid red";}
    });
    email.focus();
    email.addEventListener("blur",function(){
        if(validarEmail(email)){email.style.border="1px solid green";}
        else{email.style.border="1px solid red";}
    });
    dni.focus();
    dni.addEventListener("blur",function(){
        if(validarDni(dni)){dni.style.border="1px solid green";}
        else{dni.style.border="1px solid red";}
    });
    fecha.focus();
    fecha.addEventListener("blur", function(){
        if(validarFecha(fecha)){fecha.style.border="1px solid green";}
        else{fecha.style.border="1px solid red";}
    });
    telefono.focus();
    telefono.addEventListener("blur",function(){
        if(validarTelefono(telefono)){telefono.style.border="1px solid green";}
        else{
            telefono.style.border="1px solid red";
        }
    });
    banco.focus();
    banco.addEventListener("blur",function(){
        if(validarCuenta(banco)){banco.style.border="1px solid green";}
        else{banco.style.border="1px solid red";}
    });
    url.focus();
    url.addEventListener("blur",function(){
        if(validarUrl(url)){url.style.border="1px solid green";}
        else{ url.style.border="1px solid red";}
    });
    condiciones.focus();
    condiciones.addEventListener("blur",function(){
        if(validarCondiciones(condiciones)){
        condiciones.style.border="1px solid green";
            document.formulario.enviar.disabled=false;
        }
        else{
        condiciones.style.border="1px solid red";
            document.formulario.enviar.disabled=true;
        }
    });
    enviar.addEventListener("click",function(){
    var nuevaVentana=window.open();
    nuevaVentana.document.open();
    nuevaVentana.document.write("Formulario enviado");
    });


});




function validarTexto(valor){
    if(valor.value=="" || valor.value==null  ||(/^\d+$/.test(valor.value))){
        valor.focus();
        return false;}
    else{
        return true;}
}

function validarEmail(valor){
    if(/^[\w-]+(\.[\w-]+)*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/.test(valor.value)){
        return true;}
    else {
        valor.focus();
        return false;}
}

function validarDni(valor){
    letrasDni=['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']
    if((/^\d{8}[A-Z]$/.test(valor.value))){
        if(valor.value.charAt(8) == letrasDni[(valor.value.substring(0, 8))%23]){
            return true
        }
        else {
            valor.focus();
            return false}}
    else{
        valor.focus();return false;}
}

function validarFecha(valor){

    if(/^(\d{2})-(\d{2})-(\d{4})$/.test(valor.value)){
        var arrayfecha = valor.value.split("-");
        var dia = arrayfecha[0];
        var mes = arrayfecha[1];
        var ano = arrayfecha[2];
        var date = new Date(ano, mes, '0');
        if ((dia - 0) > (date.getDate())) {
            valor.focus();
            return false
        }
        else {return true
        }
    }
    else{valor.focus();return false}
}
function validarTelefono(valor){
    if(/\d{9}$/.test(valor.value)){
        return true;
    }
    else{valor.focus();return false;}
}
function validarCuenta(valor){
    if(/^\d{4}-\d{4}-\d{2}-\d{10}$/.test(valor.value)){
        return true;
    }
    else{valor.focus();return false;
    }
}

function validarUrl(valor){
    if(/^(http|https|ftp)\:\/\/[a-z0-9\.-]+\.[a-z]{2,4}/gi.test(valor.value)){
        return true;
    }
    else{
        valor.focus();
        return false
    }
}

function validarCondiciones(valor){
    if(valor.checked){
        return true;

    }
    else{
        valor.focus();
        return false;
    }
}