/**
 * Created by DavidPeralvoGomez on 22/11/15.
 */
function inicio(){
    function Factura(cliente, elementos){
        this.cliente = cliente;
        this.elementos = elementos;
    }

    function Cliente(nombre, direccion, telefono,informe){
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.informe=informe;
    }

    function Elemento(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    Cliente.prototype.mostrarCliente = function (){
        console.log(this.nombre);
        console.log(this.direccion);
        console.log(this.telefono);
        console.log(this.informe);
    }

    Elemento.prototype.calculaPrecio = function (){
        return this.precio;
    }

    Factura.prototype.calculaPrecioTotal = function (){
        var precio = 0;
        for(var i = 0; i<this.elementos.length; i++){
            precio += this.elementos[i].calculaPrecio();
        }
        return precio;
    }

    Factura.prototype.muestraFactura = function (){
        console.log("La factura de reparación es: "+this.calculaPrecioTotal()+" euros.");
    }

    var cliente = new Cliente("Pepe", "Avenida de America", "957322343","Problemas con en el arranque del PC");
    var elementos = [new Elemento("Reparacion", 20),
        new Elemento("Formateo", 15),
        new Elemento("Copia de seguridad", 10)];
    var factura=new Factura(cliente, elementos);

    factura.cliente.mostrarCliente();
    factura.muestraFactura();

}

window.addEventListener("load", inicio);