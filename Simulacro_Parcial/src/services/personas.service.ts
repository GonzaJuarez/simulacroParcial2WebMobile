import { Empresa } from '../interface/empresa.interface';
import { Persona } from '../interface/persona.interface';
import { empresas } from './empresas.service';

const personas: Persona[] = [];

const listarPrsonas = () => {
    return personas;
}

const verPersona = (ci: number) => {
    for (const persona of personas) {
        if (persona.ci === ci) {
            return persona;
        }
    }
    return "No se encontro la persona";
}

const verPersonaByNombreYApellido = (nombre: string, apellido: string) => {
    for (const persona of personas) {
        if (persona.nombre === nombre && persona.apellido === apellido) {
            return persona;
        }
    }
    return "No se encontro la persona";
}

const crearPersona = (ci: number, nombre: string, apellido: string, email: string, telefono: number, empresa: string, notas: string) => {
    const nuevaPersona: Persona = {
        ci: ci,
        nombre: nombre,
        apellido: apellido,
        email: email,
        telefono: telefono,
        empresa: empresa,
        notas: notas
    }
    personas.push(nuevaPersona);

    for (const emp of empresas) {
        if (emp.nombre === nuevaPersona.empresa) {
            emp.empleados.push(nuevaPersona.nombre);
        }
    }

    return nuevaPersona
}

const eliminarPersona = (ci: number): boolean => {
    for (const persona of personas) {
        if (persona.ci === ci) {
            const index = personas.indexOf(persona);
            personas.splice(index, 1);
            return true;
        }
    }
    return false;
}


export { listarPrsonas, verPersona, verPersonaByNombreYApellido, crearPersona, eliminarPersona };