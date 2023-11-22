import {Empresa} from "./empresa.interface";

export interface Persona {
    ci: number;
    nombre: string;
    apellido: string;
    email: string;
    telefono: number;
    empresa: string;
    notas: string;
}