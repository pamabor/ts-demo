import { Curso } from "./Curso";

export class Estudiante {

    // Propiedades de clase
    nombre: string;
    apellidos?: string;
    cursos: Curso[];

    // Constructor
    constructor(nombre: string, cursos: Curso[], apellidos?: string){
        // Inicializamos las propiedades
        this.nombre = nombre;        
        if(apellidos){
            this.apellidos = apellidos
        }
        this.cursos = cursos;
    }
}