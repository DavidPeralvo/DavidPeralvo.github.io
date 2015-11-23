/**
 * Created by DavidPeralvoGomez on 22/11/15.
 */

function inicio() {
    Array.prototype.annadir = function (elemento) {
        this.push(elemento);
    }

    var array1 = [0, 1, 2];
    var elemento = 2;
    console.log("Array original");
    console.log(array1);
    array1.annadir(elemento);
    console.log("Array con un elemento introducido");
    console.log(array1);

    Array.prototype.annadir = function (elemento, repetido) {
        if (repetido == true) {
            this.push(elemento);
        }

    }
    function comprobarRepetido(elemento, array) {
        var resultado = false;
        for (var i = 0; i < array.length; i++) {
            if (array[i] == elemento) {
                resultado = false;

            }
            else {
                resultado = true;
            }
        }

        return resultado;
    }

    var array2 = [0, 1, 2];
    var elemento = 2;
    array2.annadir(elemento, comprobarRepetido(elemento, array2));
    console.log("El elemento introducido no es valido, valor introducido:" + elemento);
    console.log(array2);
}
window.addEventListener("load", inicio);

