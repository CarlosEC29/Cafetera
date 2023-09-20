// Defino la clase Cafetera.
class Cafetera {
    private _capacidadMaxima: number;
    private _cantidadActual: number;

    public constructor(_capacidadMaxima: number, _cantidadActual?: number) {
        this._capacidadMaxima = 1000;
        this._cantidadActual = 0;
    }

    // Método para completar la cafetera.
    public completarCafetera() {
        this._cantidadActual = this._capacidadMaxima;
    }

    // Método para servir una taza de cafe.
    public servirTaza(cantidad: number) {
        if (this._cantidadActual >= cantidad) {
            this._cantidadActual = this._cantidadActual - cantidad;
            console.log(`Se ha servido una taza de ${cantidad} c.c. de café.`);
        } else {
            console.log(`El café no alcanza para llenar la taza.`);
            this._cantidadActual = 0;
        }
    }

    // Método para vaciar la cafetera.
    public vaciarCafetera() {
        this._cantidadActual = 0;
        console.log(`La cafetera esta vacia.`);
    }

    // Método para agregar café a la cafetera.
    public agregarCafe(cantidad: number) {
        if (this._cantidadActual + cantidad <= this._capacidadMaxima) {
            this._cantidadActual += cantidad;
            console.log(`Se han agregado ${cantidad} c.c. de café a la cafetera.`);
        } else {
            console.log(`No se puede agregar más café, la cafetera está llena.`);
            this._cantidadActual = this._capacidadMaxima;
        }
    }
}

// Ejecución del programa
// Crear una cafetera con capacidad máxima de 1500 c.c.
const miCafetera = new Cafetera(1000); 
// Servir una taza de 300 c.c. de café
miCafetera.servirTaza(250); 
// Agregar 500 c.c. de café a la cafetera
miCafetera.agregarCafe(750); 
// Vaciar la cafetera
miCafetera.vaciarCafetera();
// Llenar la cafetera al máximo
miCafetera.completarCafetera(); 