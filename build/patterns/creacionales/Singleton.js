"use strict";
class Singleton {
    constructor() { }
    // Metodo que permitirá ingresar desde afuera a la instancia
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton(); //se crea la única instancia compartida a nivel de aplicación
        }
        return Singleton.instance;
    }
    mostrarPorConsola() {
        console.log("Método de Singleton");
    }
}
//# sourceMappingURL=Singleton.js.map