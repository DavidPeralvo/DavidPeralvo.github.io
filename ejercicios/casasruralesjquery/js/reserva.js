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
    var errornombre=$('#errornombre');
    var errorapellido1=$('#errorapellido1');
    var errorapellido2=$('#errorapellido2');
    var erroremail=$('#erroremail');
    var errorpersonas=$('#errorpersonas');
    var errorfechaentrada=$('#errorfechaentrada');
    var errorfechasalida=$('#errorfechasalida');
    var mensajeErrortexto="*Minimo 3 caracteres";
    var mensajeErrorEmail="*Error formato email";
    var mensajeErrorTelefono="*Formato telefónico erroneo";
    var mensajeErrorPersonas="*El dato debe ser numerico";
    var mensajeErrorFechas="*Formato erroneo";
    var regExpTexto=/^ (\w) $/;
    var regExpEmail=/^\w+([\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    var regExpTelefono=/^\d{9}$/;
    var regExpPersonas=/^ (\d)+$/;

    nombre.on("blur",function(){
        validar(nombre,errornombre,regExpTexto,mensajeErrortexto);
        console.log(validar(nombre,errornombre,regExpTexto,mensajeErrortexto));
    });

    function validar(campo,error,patron,mensaje){
        var valor=campo.val();
        var longitud=valor.length;
        console.log(longitud);
        error.html="";
        if(longitud.length==0){
            error.html="*Campo vacio";
            return true;
        }
        //if((patron.test(valor))==false){
        //    error.html=mensaje;
        //    return false;
        //}
        return true;
    }


});