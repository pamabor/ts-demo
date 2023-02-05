class Singleton {

    // Se crea una INSTANCIA, del mismo tipo de la clase
    private static instance: Singleton;

    private constructor() { }


    // Metodo que permitirá ingresar desde afuera a la instancia
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton(); //se crea la única instancia compartida a nivel de aplicación
        }

        return Singleton.instance;
    }

    public mostrarPorConsola() {
        console.log("Método de Singleton");
    }
}






