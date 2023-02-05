// Esto es un comentario

import { deleteAllCookies, deleteCookie, getCookieValue, setCookie } from "cookies-utils";
import { LISTA_CURSOS } from "./mock/cursos.mock";
import { Curso } from "./models/Curso";
import { Estudiante } from "./models/Estudiante";
import { ITarea, Nivel } from "./models/interfaces/ITarea";
import { Trabajador, Jefe } from "./models/Persona";
import { Programar } from "./models/Programar";

/**
 * Esto es un comentario
 * Multilinea
 */

console.log("Hola Pablo");
console.log("Adios Pablo");


//Declaracion de variables:
var nombre: string = 'Pablo';

console.log("Hola, " + nombre);
console.log("Que tal", nombre, "?");
console.log(`Como han ido las vacaciones, ${nombre} ? `);

let email = 'pamabor@gmail.com'; //Variable de ámbito local
console.log(`El Email de ${nombre} es ${email}`);

const PI: number = 3.1416; //Variable inmodificable

var apellido: any = "Martinez"; //Tipo any, hace que la variable pueda cambiar de tipo
apellido = 3;

var error: boolean;
error = false;

console.log(`Hay error?: ${error}`);


//Instanciación multiple de variables

let a:string,b:boolean,c:number; //Instancia 3 variables sin valor inicial
a = "string";
b = true;
c = 8.9; //aunque sea flotante, lo toma como numero

//Tipos primitivos(definidos por el lenguaje)= BuiltIn Types:number, string, boolean, void, null, undefined

//Tipos mas complejos

//Lista de cadenas de texto
let listaTareas: string[] = ["Tarea 1", "Tarea 2"];

//Combinación de tipos en listas
let valores: (string | number | boolean)[] = [false, "Hola", true, 56]; //let valores = [false, "Hola", true, 56];

//Enumerados

enum Estados {
    "Completado" = "C",
    "Incompleto" = "I",
    "Pendiente" = "P"
}

enum PuestoCarrera {
    "Primero" = 1,
    "Segundo",
    "Tercero"
}

let estadoTarea: Estados = Estados.Completado;
let puestoMaraton: PuestoCarrera = PuestoCarrera.Segundo;




//Interfaces
interface Tarea {
    nombre: string,
    estado: Estados,
    urgencia: number
}

//Podemos crear variables que sigan la interface Tarea

let tarea1: Tarea = {
    nombre: "Tarea 1",
    estado: Estados.Pendiente,
    urgencia: 10
}

console.log(`Tarea: ${tarea1.nombre}`);


// Asignación múltiple de variables

let miTarea = {
    titulo: 'Mi tarea',
    estado: Estados.Completado,
    urgencia: 1
}

//Declaración 1 a 1
let miTitulo = miTarea.titulo;
let miEstado = miTarea.estado;
let miUrgencia = miTarea.urgencia;

// ** Factor Spread (Propagación)

//En asignación de variables
let {titulo, estado, urgencia} = miTarea;

//En listas
let listaCompraLunes: string[] = ["Leche", "Patatas"]
let listaCompraMartes: string[] =[...listaCompraLunes, "Pan", "Huevos"];
let listaCompraMiercoles: string[] = ["Carne", "Pescado"]
let listaCompraSemana = [...listaCompraLunes, ...listaCompraMiercoles]

// En Objetos

let estadoApp = {
    usuario: "admin",
    session: 3,
    jwt: "Bearer1283612783"
}

//Cambiar un valor por propagación
let nuevoEstado = {
    ...estadoApp,
    session: 4
}



//Types de TypeScript
type Producto = {
    precio: number,
    nombre: string,
    anio: number
}

let coche: Producto = {
    nombre: "Audi",
    precio: 45000,
    anio: 2010
}


// ** Condicionales

//Operadores Ternariuos: Transformo en "operador ternario, con ? y :"
console.log(coche.anio < 2010 ? `Coche: ${coche.nombre} es viejo` : `Coche: ${coche.nombre} es nuevo`); //console.log(`Coche: ${coche.nombre}`);


//If - else
if(error){
    console.log("Hay un error");
}else {
    console.log("No hay un error");
}

//If - else if - else
if(coche.anio < 2010){
    console.log(`Coche: ${coche.nombre} es viejo`);
}else if(coche.anio === 2010) {
    console.log(`Coche: ${coche.nombre} es del 2010`);
}else {
    console.log(`Coche: ${coche.nombre} es nuevo`);
}


//Switch
switch (tarea1.estado) {
    case Estados.Completado:
        console.log("La tarea está completada");
        break;
    case Estados.Incompleto:
        console.log("La tarea no está completada");
        break;
    case Estados.Pendiente:
        console.log("La tarea está pendiente de comprobarse");
        break;

    default:
        break;
}

// ** Bucles

let listaTareasNueva: Tarea[] = [
    {
        nombre: "Tarea 1",
        estado: Estados.Completado,
        urgencia: 2
    },
    {
        nombre: "Tarea 2",
        estado: Estados.Pendiente,
        urgencia: 0
    },
    {
        nombre: "Tarea 3",
        estado: Estados.Completado,
        urgencia: 15
    }
]

//For clásico (para la estructura, elijo 'for loop', en el menú)
for (let index = 0; index < listaTareasNueva.length; index++) {
    const tarea = listaTareasNueva[index];
    console.log(`${index} - ${tarea.nombre}`);
}

//Foreach (lo que espera, es un callback)
listaTareasNueva.forEach(
    (tarea: Tarea, index: number) => {
        console.log(`${index} - ${tarea.nombre}`);
    }
);


//Bucles
while (tarea1.estado !== Estados.Completado) {
    if(tarea1.urgencia == 20){
        tarea1.estado = Estados.Completado
        break;
    }else{
        tarea1.urgencia ++;
    }
}

// DO While (se ejecuta al menos una vez, pongo do y en el menú, elijo dowhile statement)
do {
    tarea1.urgencia ++;
    tarea1.estado = Estados.Completado;
} while (tarea1.estado !== Estados.Completado);


//Funciones

/**
 * Función que muestra un saludo por consola
 */
function saludar() {
    let nombre = "Pablo"
    console.log(`Hola, ${nombre}!`);
}

//Invocación de la funcion
saludar();


/**
 * Función que muestra un saludo por consola a una persona
 * @param nombre Nombre de la persona a saludar
 */
function saludarPersona(nombre: string){
    console.log(`Hola, ${nombre}!`);
}

saludarPersona("Pablo");

/**
 * Función que muestra un adios por consola a una persona
 * @param nombre Nombre de la persona a despedir, por defecto, será "Pepe"
 */
function despedirPersona(nombre: string = "Pepe"){
    console.log(`Adios, ${nombre}!`);
}

despedirPersona(); //Adios, Pepe
despedirPersona("Alba"); //Adios, Alba

/**
 * Función que muestra un adios por consola a una persona
 * @param nombre (Opcional) Nombre de la persona a despedir
 */
function despedidaOpcional(nombre?: string){
    if(nombre){
        console.log(`Adios, ${nombre}!`);
    }else{
        console.log(`Adios`);
    }
}

despedidaOpcional(); //Adios
despedidaOpcional("Juanjo"); //Adios Juanjo!


function variosParams(nombre: string, apellidos?: string, edad: number = 18){
    if(apellidos){
        console.log(`${nombre} ${apellidos} tiene ${edad} años`);
    }else{
        console.log(`${nombre} tiene ${edad} años`);
    }
}

variosParams("Pablo") // Pablo tiene 18 años
variosParams("Pablo", "Martinez") // Pablo Martinez tiene 18 años
variosParams("Pablo", undefined, 30) //Pablo tiene 30 años
variosParams("Pablo", "Martinez", 30) //Pablo Martinez tiene 30 años

function ejemploVariosTipos(a: string | number){

    if(typeof(a) === 'string'){
        console.log("A: es un string")
    }else if(typeof(a) === 'number'){
        console.log("A: es un number")
    }else{
        console.log("A: no es un string ni tampoco un number");
        throw Error("A: no es un string ni tampoco un number") //Para capturar algun error
    }
}

ejemploVariosTipos("Hola");
ejemploVariosTipos(3);
//ejemploVariosTipos(true); //Dará error, porque no está establecido como parámetro


/**
 * 
 * @param nombre Nombre de la persona
 * @param apellidos Apellidos de la persona
 * @returns Nombre completo
 */
function ejemploReturn(nombre: string, apellidos: string): string{
    return `${nombre} ${apellidos}`;
}

const nombreCompleto = ejemploReturn("Pablo", "Martinez");

console.log(nombreCompleto); //Pablo Martinez
console.log(ejemploReturn("Pablo", "Martinez")) //Pablo Martinez


//Factor de Propagación
/**
 * 
 * @param nombres es una lista de nombres de string
 */
function ejemploMultipleParams(...nombres: string[]){
    nombres.forEach((nombre) => {
        console.log(nombre)
    });
}

ejemploMultipleParams("Pablo");
ejemploMultipleParams("Pablo", "Pepe", "Juan", "Alba");


const lista = ["Alberto", "Sandra"]
ejemploMultipleParams(...lista);

function ejemploParamLista(nombres: string[]){
    nombres.forEach((nombre) => {
        console.log(nombre)
    });
}

ejemploParamLista(lista);


//ARROW Functions

type Empleado = {
    nombre: string
    apellidos: string
    edad: number
}
let empleadoPablo: Empleado = {
    nombre: "Pablo",
    apellidos: "Martinez",
    edad: 40
}

const mostrarEmpleado = (empleado: Empleado) => `${empleado.nombre} tiene ${empleado.edad} años`

//Llamamos a la funcion
mostrarEmpleado(empleadoPablo);


const datosEmpleado = (empleado: Empleado): string => {

    if(empleado.edad > 70){
        return `Empleado ${empleado.nombre} está en edad de jubilación`
    }else {
        return `Empleado ${empleado.nombre} está en edad laboral`

    }
}
datosEmpleado(empleadoPablo) //Empleado Pablo está en edad laboral


const obtenerSalario = (empleado: Empleado, cobrar: () => string) => {
    if(empleado.edad > 70) {
        return
    }else {
        cobrar() // callback a ejecutar
    }    
}
const cobrarEmpleado = (empleado: Empleado) => {
    console.log(`${empleado.nombre} cobra su salario`);
}

obtenerSalario(empleadoPablo, () => 'Cobrar Pablo');



// Async Function

async function ejemploAsync(): Promise<string>{

    await console.log("Tarea a completar antes de seguir con la secuencia de instrucciones")
    console.log("Tarea completada")
    return "Completado"
}

ejemploAsync() 
.then((respuesta) => {
    console.log("Respuesta", respuesta);
}).catch((error) => {
    console.log("Ha habido un error", error)
}).finally(() => "Todo ha terminado");


//Generators

function* ejemploGenerator() {

    //yield --> para emitir valores

    let index = 0;

    while(index < 5){
        //Emitimos un valor incrementado
        yield index++;
    }
}

// Guardamos la funcion generadora en una variable

let generadora = ejemploGenerator();

// Accedemos a los valores emitidos

console.log(generadora.next().value) // 0
console.log(generadora.next().value) // 1
console.log(generadora.next().value) // 2
console.log(generadora.next().value) // 2



// Worker

function* watcher(valor: number){

    yield valor; //emitimos el valor inicial
    yield* worker(valor); //llamamos a las emisiones del worker para que emita otros valores
    yield valor + 4; //emitimos el valor final + 4
}

function* worker(valor: number) {
    yield valor + 1;
    yield valor + 2;
    yield valor + 3;

}

let generatorSaga = watcher(0);

console.log(generatorSaga.next().value); // 0 (lo ha hecho el watcher)
console.log(generatorSaga.next().value); // 1 (lo ha hecho el worker)
console.log(generatorSaga.next().value); // 2 (lo ha hecho el worker)
console.log(generatorSaga.next().value); // 3 (lo ha hecho el worker)
console.log(generatorSaga.next().value); // 4 (lo ha hecho el watcher)


//Sobrecarga de Funciones
//Es cuando queremos, que una funcion tenga los mismos parametros que otras,
//haga una cosa u otra

function mostrarError(error: string | number):void {
    console.log("Ha habido un error:", error);
}






//EVENTOS Y PERSISTENCIA

//Persistencia de datos
// 1. LocalStorage --> Almacena los datos en el navegador(no se eliminan automaticamente)
// 2. SessionStorage --> La diferencia radica en la sesion de navegador. Es decir, los datos se persisten en la sesión de navegad
// 3. Cookies --> Tienen una fecha de caducidad y también tienen un ámbito de URL


//LocalStorage
/*function guardar(): void{
    localStorage.set("nombre", "Pablo");
}

function leer(): void{
    localStorage.get("nombre");
}*/



//COOKIES

const cookieOptions = {
    name: "usuario", // string,
    value: "Pablo", // string,
    maxAge: 10 * 60, // optional number (value in seconds),
    expires: new Date(2099, 10, 1), // optional Date,
    path: "/", // optional string,
};

// Seteamos la Cookie
setCookie(cookieOptions);

// Leer una Cookie
let cookieLeida = getCookieValue("usuario");

// Eliminar Cookie
deleteCookie("usuario");

// Eliminar todas las cookies
deleteAllCookies();



//Eventos
// Clase Temporizador

class Temporizador {

    public terminar?: (tiempo:number) => void;

    public empezar(): void {
        setTimeout(() => {
            // Comprobamos que exista la función terminar como callback
            if(!this.terminar) return;
            // Cuando haya pasado el tiempo, se ejecutará la función terminar
            this.terminar(Date.now());
        }, 10000)
    }

}

const miTemporizador: Temporizador = new Temporizador();

// Definimos la función del callback a ejecutar, cuando termine el tiempo
miTemporizador.terminar = (tiempo: number) => {
    console.log("Evento terminado en:", tiempo)
}

// Lanzamos el remporizador
miTemporizador.empezar(); // Se inicia el timeout y cuando termine, se ejecuta la función terminar()


setInterval(() => console.log("Tic"), 1000) // Se imprime "Tic" cada 1 segundo, por consola

// Eliminar la ejecución de la función
delete miTemporizador.terminar;



// **CLASES

// Creamos un curso
/*const cursoTS: Curso = new Curso("TypeScript",15);
const cursoJS: Curso = new Curso("JavaScript",20);

const listaCursos: Curso[] = [];

//Añadimos cursos a la lista, con push*
listaCursos.push(cursoTS, cursoJS); //[Lista de cursos]*/

//Usamos el MOCK
const listaCursos: Curso[] = LISTA_CURSOS;


// Creamos un estudiante

const pablo: Estudiante = new Estudiante("Pablo", listaCursos, "Martinez");


console.log(`${pablo.nombre} estudia:`);
// Iteramos por cada uno de ellos
pablo.cursos.forEach((curso) => {
    console.log(`- ${curso.nombre} (${curso.horas} horas)`); // -TypeScript (15 horas)
})

// Podemos añadir, por ejemplo, cursos
const cursoAngular: Curso = new Curso("Angular", 40);

pablo.cursos.push(cursoAngular); //Añadimos


// Saber la instancia de un objeto/variable
// typeOf
// instanceOf

let fechaNacimiento = new Date(1982, 08, 30);

if(fechaNacimiento instanceof Date){
    console.log("Es una instancia de Date")
}

if(pablo instanceof Estudiante){
    console.log("Pablo es un Estudiante")
}


// Herencia y Polimorfismo

let trabajador1 = new Trabajador("Pablo", "Martinez", 40, 2000);
let trabajador2 = new Trabajador("Pepe", "Garcia", 21, 1000);
let trabajador3 = new Trabajador("Juan", "Gonzalez", 30, 3000);



let jefe = new Jefe("Pablo", "Garcia", 50);

jefe.trabajadores.push(trabajador1, trabajador2, trabajador3);

jefe.saludar(); // herencia de Persona

jefe.trabajadores.forEach((trabajador: Trabajador) => {
    trabajador.saludar(); // especificado en Trabajador
});


// Uso de Interfaces

let programar: ITarea = {
    titulo: "Programar en TypeScript",
    descripcion: "Practicar con katas para aprender a desarrollar con TS",
    completada: false,
    urgencia: Nivel.Urgente,
    resumen: function (): string {
        return `${this.titulo} - ${this.completada} - Nivel: ${this.urgencia}`
    }
}

console.log(programar.resumen());


// Tarea de Programación (implementa ITarea)

let programarTS = new Programar("TypeScript", "Tarea de programación en TS", false, Nivel.Bloqueante);
console.log(programarTS.resumen());



// Decoradores experimentales --> @ 
// -Clases
// -Parámetros
// -Métodos
// -Propiedades


/*function Override(label: string) {
    return function (target: any, key:string){
        Object.defineProperty(target, key, {
            configurable: false,
            get: () => label
        })
    }
}*/

/*class PruebaDecorador {
    @Override('Prueba') // llamar a la funcion Override
    nombre: string = "Pablo"
}*/


/*let prueba = new PruebaDecorador();

console.log(prueba.nombre) // Imprimirá "Prueba", siempre va a ser devuelto a traves del get()*/



// Otra funcioin para usarla como decorador

/*function SoloLectura(target: any, key: string){
    Object.defineProperty(target, key, {
        writable: false
    })
}

class PruebaSoloLectura{
    @SoloLectura
    nombre: string = '';
}

let pruebaLectura = new PruebaSoloLectura();
pruebaLectura.nombre = "Pablo";*/


// Decorador para parámetros de un método
/*function mostrarPosicion(target:any, propertyKey: string, parameterIndex: number){
    console.log("Posicion", parameterIndex);
}

class PruebaMetodoDecorador {
    prueba(a: string, @mostrarPosicion b: boolean){
        console.log(b);
    }
}


// Usamos el método con el parámetro y su decorador
new PruebaMetodoDecorador().prueba('hola', false);*/



// * PATRONES CREACIONALES


/*const miPrimerSingleton = Singleton.getInstance();
const miSegundoSingleton = Singleton.getInstance();

// Comprueba si ambos son iguales
if (miPrimerSingleton === miSegundoSingleton) {
    console.log('Singleton funciona correctamente, ambas variables contienen la misma instancia.');
    miPrimerSingleton.mostrarPorConsola();
    miSegundoSingleton.mostrarPorConsola();
} else {
    console.log('Error, las variables contienen distintas instancias.');
}*/











