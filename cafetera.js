var Cafetera = /** @class */ (function () {
    function Cafetera(_capacidadMaxima, _cantidadActual) {
        this._capacidadMaxima = 1000;
        this._cantidadActual = 0;
    }
    Cafetera.prototype.completarCafetera = function () {
        this._cantidadActual = this._capacidadMaxima;
    };
    Cafetera.prototype.servirTaza = function (cantidad) {
        if (this._cantidadActual >= cantidad) {
            this._cantidadActual -= cantidad;
            console.log("Se ha servido una taza de ".concat(cantidad, " c.c. de caf\u00E9."));
        }
        else {
            console.log("No queda suficiente caf\u00E9 para llenar la taza.");
            this._cantidadActual = 0;
        }
    };
    Cafetera.prototype.vaciarCafetera = function () {
        this._cantidadActual = 0;
        console.log("La cafetera se ha vaciado.");
    };
    Cafetera.prototype.agregarCafe = function (cantidad) {
        if (this._cantidadActual + cantidad <= this._capacidadMaxima) {
            this._cantidadActual += cantidad;
            console.log("Se han agregado ".concat(cantidad, " c.c. de caf\u00E9 a la cafetera."));
        }
        else {
            console.log("No se puede agregar m\u00E1s caf\u00E9, la cafetera est\u00E1 llena.");
            this._cantidadActual = this._capacidadMaxima;
        }
    };
    return Cafetera;
}());
// Ejemplo de uso:
var miCafetera = new Cafetera(1500); // Crear una cafetera con capacidad máxima de 1500 c.c.
miCafetera.servirTaza(300); // Servir una taza de 300 c.c. de café
miCafetera.agregarCafe(500); // Agregar 500 c.c. de café a la cafetera
miCafetera.vaciarCafetera(); // Vaciar la cafetera
miCafetera.completarCafetera(); // Llenar la cafetera al máximo
