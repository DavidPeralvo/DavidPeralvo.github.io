
window.addEventListener("load",function (){
    var nombre=document.getElementById('nombre');
    var apellido1=document.getElementById('apellido1');
    var apellido2=document.getElementById('apellido2');
    var dni=document.getElementById('dni');
    var sexo=document.getElementById('sexo');
    var condicion=document.getElementById('condicion');
    var nuevo=document.getElementById('nuevo');
    var limpiar=document.getElementById('limpiar');
    var errorcondicion=document.getElementById('errcondicion');
    var nuevousuario=document.getElementById('nuevousuario');
    var errornombre=document.getElementById('errornombre');
    var errorapellido1=document.getElementById('errorapellido1');
    var errorapellido2=document.getElementById('errorapellido2');
    var errordni=document.getElementById('errordni');
    var errorsexo=document.getElementById('errorsexo');
    var lista=document.getElementById('lista');
    var errortotal=document.getElementById('errorfinal');
    var mensajeErrorNombre="*Error en Nombre";
    var mensajeErrorApellidos="*Error apellido vacio";
    var mensajeErrorDni="*Error DNI vacio";
    var mensajeErrorSexo="*Elige sexo porfavor";
    var regExpNombre=/[\wáéíóúÁÉÍÓÚñÑ-]{4}/;
    var regExpApellidos=/^(\w)+$/;
    var regExpDni=/^(\d){8}[A-Za-z]{1}$/;

    nombre.addEventListener("blur",function(){ validar(nombre,errornombre,regExpNombre,mensajeErrorNombre);});

    apellido1.addEventListener("blur",function() { validar(apellido1,errorapellido1,regExpApellidos,mensajeErrorApellidos);});

    apellido2.addEventListener("blur",function(){validar(apellido2,errorapellido2,regExpApellidos,mensajeErrorApellidos);});

    dni.addEventListener("blur",function(){ validar(dni,errordni,regExpDni,mensajeErrorDni); });

    sexo.addEventListener("blur",function(){validarSexo(sexo)});

    condicion.addEventListener("blur", function(){validarcondicion(condicion);});



    limpiar.addEventListener("click",function(){

        setCookie("nombre",nombre.value,-1);
        setCookie("apellido1",apellido1.value,-1);
        setCookie("apellido2",apellido2.value,-1);
        setCookie("dni",dni.value,-1);
        setCookie("sexo",sexo.value,-1);
        errorcondicion.innerHTML="";
        errorapellido1.innerHTML="";
        errorapellido2.innerHTML="";
        errornombre.innerHTML="";
        errordni.innerHTML="";
        errorsexo.innerHTML="";
        errortotal.innerHTML="";
        nuevousuario.innerHTML="Nombre:<br>Apellidos:<br>Sexo:";


    });

    nuevo.addEventListener('click',function (event){
        event.preventDefault();
            errortotal.innerHTML="";
            if(validarCampos()){
                var usuario=new Usuario(nombre.value,apellido1.value,apellido2.value,dni.value,sexo.value);
                usuario.mostrar();
                usuario.listItem();
                cargarCookies(nombre,apellido1,apellido2,dni,sexo);
            }
            else{
                errortotal.innerHTML="* Compruebe los datos introducidos";
            }


    });

    function Usuario(nombre,apellido1,apellido2,dni,sexo){
        this.nombre=nombre;
        this.apellido1=apellido1;
        this.apellido2=apellido2;
        this.dni=dni;
        this.sexo=sexo;
    }

    Usuario.prototype.mostrar=function(){
        nuevousuario.innerHTML="Nombre: "+this.nombre+"<br>Apellidos:"+this.apellido1+" "+this.apellido2+"<br>Sexo:"+this.sexo+"";
    }

    Usuario.prototype.listItem=function(){
        var li=document.createElement("li");
        var texto=document.createTextNode(""+this.nombre+" | "+this.apellido1+" | "+this.apellido2+" | "+this.dni+" |  "+this.sexo+".");
        li.appendChild(texto);
        lista.appendChild(li);
    }



    function validarCampos(){
        var validaciónfinal=true;
        if(validar(nombre,errornombre,regExpNombre,mensajeErrorNombre)==false){
            validaciónfinal=false;
        }
        if(validar(apellido1,errorapellido1,regExpApellidos,mensajeErrorApellidos)==false){

        }
        if(validar(apellido2,errorapellido2,regExpApellidos,mensajeErrorApellidos)==false){
            validaciónfinal=false;
        }
        if(validar(dni,errordni,regExpDni,mensajeErrorDni)==false){
            validaciónfinal=false
        }
        if(validarSexo(sexo)==false){
            validaciónfinal=false;
        }
        if(validarcondicion(condicion)==false){
            validaciónfinal=false;
        }
        return validaciónfinal;
    }
    function validar(campo,error,patron,mensajeError){
        var valor=campo.value.trim();
        error.innerHTML="";
        if(valor.length==0){
            error.innerHTML="*Campo vacio";
            return false;
        }

        if((patron.test(valor))==false){
            error.innerHTML=mensajeError;
            return false;
        }
        return true;
    }
    function validarcondicion(condicion){
        errorcondicion.innerHTML="";
        if(condicion.checked==false){
            errorcondicion.innerHTML="*Por favor acepte las condiciones";
            return false;
        }
        return true;
    }
    function validarSexo(campo){
        var valor= campo.value.trim();
        if(valor.length==0){
            errorsexo.innerHTML=mensajeErrorSexo;
            return false
        }
        return true;
    }

    function cargarCookies(nombre,apellido1,apellido2,dni,sexo){
        setCookie("nombre",nombre.value,365);
        setCookie("apellido1",apellido1.value,365);
        setCookie("apellido2",apellido2.value,365);
        setCookie("dni",dni.value,365);
        setCookie("sexo",sexo.value,365);
    }

    function setCookie(nombre, valor, tiempo) {
        var fecha = new Date();
        fecha.setTime(fecha.getTime() + (tiempo*24*60*60*1000));
        var expira = "expires="+fecha.toUTCString();
        document.cookie = nombre + "=" + valor + "; " + expira;

    }
});