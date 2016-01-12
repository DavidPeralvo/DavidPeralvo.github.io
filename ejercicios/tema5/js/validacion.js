





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
    var error=document.getElementById('error');

    var expresionNombre=new RegExp(/^[\D]+$/);
    var expresionEmail=new RegExp(/[\w-]+(\.[\w-]+)*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/);
    var expresionTelefono= new RegExp(/^\d{9}$/);
    var expresionCuenta= new RegExp(/^\d{4}-\d{4}-\d{2}-\d{10}$/);
    var expresionURL=new RegExp(/^(http|https|ftp)\:\/\/[a-z0-9\.-]+\.[a-z]{2,4}/gi);


    nombre.focus();
    nombre.addEventListener("blur",function(){
        if(validar(nombre,expresionNombre)){

            nombre.style.border="1px solid green";apellido1.focus();}
        else{nombre.style.border="1px solid red"; }
    });

    apellido1.addEventListener("blur",function(){
        if(validar(apellido1,expresionNombre)){apellido1.style.border="1px solid green";apellido2.focus();
        } else{apellido1.style.border="1px solid red";}
    });

    apellido2.addEventListener("blur",function(){
        if(validar(apellido2,expresionNombre)){apellido2.style.border="1px solid green";email.focus();
        } else{apellido2.style.border="1px solid red";}
    });

    email.addEventListener("blur",function(){
        if(validar(email,expresionEmail)){email.style.border="1px solid green";dni.focus();}
        else{email.style.border="1px solid red";}
    });

    dni.addEventListener("blur",function(){
        if(validarDni(dni)){dni.style.border="1px solid green";fecha.focus();}
        else{dni.style.border="1px solid red";}
    });

    fecha.addEventListener("blur", function(){
        if(validarFecha(fecha)){fecha.style.border="1px solid green";telefono.focus();}
        else{fecha.style.border="1px solid red";}
    });

    telefono.addEventListener("blur",function(){
        if(validar(telefono,expresionTelefono)){telefono.style.border="1px solid green";banco.focus();}
        else{
            telefono.style.border="1px solid red";
        }
    });

    banco.addEventListener("blur",function(){
        if(validar(banco,expresionCuenta)){banco.style.border="1px solid green";url.focus();}
        else{banco.style.border="1px solid red";}
    });

    url.addEventListener("blur",function(){
        if(validar(url,expresionURL)){url.style.border="1px solid green";condiciones.focus();}
        else{ url.style.border="1px solid red";}
    });


    enviar.addEventListener("click",function(){
        if(validar(nombre,expresionNombre) && validar(apellido1,expresionNombre) && validar(apellido2,expresionNombre) && validar(email,expresionEmail) && validarDni(dni) && validarFecha(fecha) && validar(telefono,expresionTelefono) && validar(banco,expresionCuenta) && validar(url,expresionURL) && validarCondiciones(condiciones)){
            var nuevaVentana=window.open();
            nuevaVentana.document.open();
            nuevaVentana.document.write("Formulario enviado");
            error.innerHTML="";
        }
        else{
            error.innerHTML="Error en los campos";
        }

    });


});



function validar(valor,expresion){

    if(valor.value!="" && valor.value!=null  && (expresion.test(valor.value))){
        return true;}
    else{
        valor.focus();
        return false;
        }


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
    var expresionFecha=new RegExp(/^(\d{2})-(\d{2})-(\d{4})$/);
    if(expresionFecha.test(valor.value)){
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

function validarCondiciones(valor){
    if(!valor.checked){
        return false;

    }
    else{

        return true;
    }
}