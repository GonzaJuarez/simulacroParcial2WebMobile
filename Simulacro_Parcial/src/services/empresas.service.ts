import { Empresa } from '../interface/empresa.interface';
import { Persona } from '../interface/persona.interface';

const empresas: Empresa[] = [];

const listarEmpresas = () => {
    return empresas;
}

const verEmpresa = (id: number) => {
    return empresas[id];
}

const crearEmpresa = (nombre: string, sitioWeb: string, notas: string, empleados: string[]) => {
    const nuevaEmpresa: Empresa = {
        id: empresas.length,
        nombre: nombre,
        sitioWeb: sitioWeb,
        notas: notas,
        empleados: empleados
    }
    empresas.push(nuevaEmpresa);
    return nuevaEmpresa;
}

const eliminarEmpresa = (id:number): boolean => {
    const idElim = empresas[id];
    if (idElim.empleados?.length === 0) {
        empresas.splice(id, 1);
        return true;
    }
    return false;
}


export { crearEmpresa, eliminarEmpresa, listarEmpresas, verEmpresa, empresas };