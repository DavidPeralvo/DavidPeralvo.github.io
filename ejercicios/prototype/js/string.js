/**
 * Created by DavidPeralvoGomez on 22/11/15.
 */

function inicio() {
    String.prototype.truncar = function (tamano) {
        var nCadena = this.substring(0, tamano);
        return nCadena;
    }

    var cadena1 = "hola mundo";
    cadena2 = cadena1.truncar(6);
    console.log(cadena2);

    var cadena3 = "Cuando cuentes cuentos cuenta cuantos cuentos cuentas, porque si no cuentas cuantos cuentos cuentas, nunca sabrás cuantos cuentos cuentas tú.";
    console.log(cadena3.truncar(40));

    String.prototype.truncar = function (tamano, textoAdicional) {
        var nuevaCadenaModificada = this.substring(0, tamano);
        nuevaCadenaModificada += textoAdicional;
        return nuevaCadenaModificada;
    }

    cadena2 = cadena1.truncar(6, '...');
    console.log(cadena2);

    console.log(cadena3.truncar(30, '... (sigue)'));

}
window.addEventListener("load", inicio);


