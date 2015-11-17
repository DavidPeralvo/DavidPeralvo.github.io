//Realizar una aplicación en JavaScript que realice lo siguiente:
//Abra una nueva ventana.
//Hacer una función y dentro de esa función:
//Escribir en la nueva ventana <h1>Ventana Nueva</h1>
//URL Completa: XXXXX
//Protocolo utilizado: XXXXX
//Nombre en código del navegador: XXXXX
//Que detecte si está JAVA disponible en esa ventana del navegador y si es así que escriba:
//Java SI disponible en esta ventana, o bien.
//Java NO disponible en esta ventana.
//Que abra una ventana con el contenido de http://www.iesgrancapitan.org/portal/ de 800x600.
//Y ahora fuera del código de la función que siga haciendo lo siguiente:
//Que escriba en la ventana principal <h1>Tarea del tema 3</h1>
//Que solicite: introduzca su nombre y apellidos.
//Que solicite: introduzca DIA de nacimiento.
//Que solicite: introduzca MES de nacimiento.
//Que solicite: introduzca AÑO de nacimiento.
//Una vez solicitados esos datos imprimirá en la ventana principal:
//Buenos dias XXXXX
//Tu nombre tiene XX caracteres, incluidos espacios.
//La primera letra E de tu nombre está en la posición: X
//La última letra E de tu nombre está en la posición: X
//Tu nombre menos las 3 primeras letras es: XXXXXXXX
//Tu nombre todo en mayúsculas es: XXXXXXXX
//Tu edad es: XX años.
//Naciste un feliz XXXXXX del año XXXX. No te acuerdas, pero era (LUNES/MARTES/MIÉRCOLES...) y [NO|SI] bisiesto
//El coseno de 90 es: XXXXXXXXXX
//El número mayor de (65, 22, 69, 99, 12) es: XX
//Ejemplo de número al azar entre 1 y 10: XXXXXXXXXX
//Donde aparecen las XXXX tendrá que aparecer el cálculo o texto que corresponda.
//Criterios de puntuación.
//Cumplimiento de los requisitos anteriores
//Usabilidad
//Estética (sin librerías)
//Presentación del código (comentarios, identación...)
//enlazar con otro js
window.onload=function(){
  document.getElementById('empezar').onclick=nuevaVentana;
}

function nuevaVentana(){
  nuevaVentana=window.open("","hola","toolbar=yes,location=no , menubar=yes resizable=yes, width='300px',height'300px' ");
  nuevaVentana.document.write("<html><head><meta charset='utf-8'><title>Enhorabuena</title></head><body><h1>¡Has acertado!</h1><br><br> <p>¿Quieres seguir jugando?<br><br><input type='Button' name='si' value='Reiniciar juego'id='respuesta'></p></body></html>");
  nuevaVentana.document.close();
  otraventana=window.open("http://www.iesgrancapitan.org/portal/","adios","toolbar=yes,location=no,menubar=yes,resizable=yes, width='800',height='600'");
}
