/**
 * Created by DavidPeralvoGomez on 22/2/16.
 */

$(document).ready(function(){
    var nombre=$('#nombre');
    var apellido1=$('#apellido1');
    var apellido2=$('#apellido2');
    var email=$('#email');
    var telefono=$('#telefono');
    var fechaentrada=$('#fechaentrada');
    var fechasalida=$('#fechasalida');
    var personas=$('#personas');
    var errornombre=$('#errornombre');
    var errorapellido1=$('#errorapellido1');
    var errorapellido2=$('#errorapellido2');
    var erroremail=$('#erroremail');
    var errorTelefono=$('#errortelefono');
    var errorpersonas=$('#errorpersonas');
    var errorfechaentrada=$('#errorfechaentrada');
    var errorfechasalida=$('#errorfechasalida');
    var mensajeErrortexto="*Minimo 3 caracteres";
    var mensajeErrorEmail="*Error formato email";
    var mensajeErrorTelefono="*Formato telefónico erroneo";
    var mensajeErrorPersonas="*El dato debe ser numerico";
    var mensajeErrorFechas="*Formato erroneo";
    var regExpTexto=/[\w]{3,}/;
    var regExpEmail=/^\w+([\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    var regExpTelefono=/[\d]{9}/;
    var regExpPersonas=/[\d]{1,}/;

    nombre.on("blur",function(){validar(nombre,errornombre,regExpTexto,mensajeErrortexto);});
    apellido1.on("blur",function(){validar(apellido1,errorapellido1,regExpTexto,mensajeErrortexto)});
    apellido2.on("blur",function(){validar(apellido2,errorapellido2,regExpTexto,mensajeErrortexto)});
    email.on("blur",function(){validar(email,erroremail,regExpEmail,mensajeErrorEmail)});
    telefono.on("blur",function(){validar(telefono,errorTelefono,regExpTelefono,mensajeErrorTelefono)});
    personas.on("blur",function(){ validar(personas,errorpersonas,regExpPersonas,mensajeErrorPersonas)});

   fechaentrada.datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1,
        dateFormat: 'dd-mm-yy',
        onClose: function( selectedDate ) {
            fechasalida.datepicker( "option", "minDate", selectedDate );}});
    fechasalida.datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1,
        dateFormat: 'dd-mm-yy',
        onClose: function( selectedDate ) {
            fechaentrada.datepicker( "option", "maxDate", selectedDate );
        }
    });

    fechaentrada.on("click",calendario(fechaentrada));
    fechasalida.on("click",calendario(fechasalida));
    function validar(campo,error,patron,mensaje){
        var valor=campo.val();
        var campovacio="*Campo vacio";
        campo.css("border-color","#4CAF50");
        error.text("");
        if(campo.val().length==0){
            campo.css("border-color","red");
            error.text(campovacio);
            return false;
        }
        if((patron.test(valor))==false){
           error.text(mensaje);
            return false;
        }
        return true;
    }
    function validarFecha(fecha,error,mensaje){
       var valor=fecha.val().trim();
        var reg=/^(\d{1,2})-(\d{1,2})-(\d{4})$/;
        error.text("");
        var campoVacio="*Campo vacio"
        if(fecha.val().length==0){
            error.text(campoVacio);
            return false;
        }

        if(reg.test(valor)==false){
            error.text(mensaje);
            return false;

        }

        return true;


    }





});