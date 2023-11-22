import { listarPrsonas, verPersona, verPersonaByNombreYApellido, crearPersona, eliminarPersona } from "../services/personas.service";

const personas: any[] = [];

const postPersona = async (req: any, res: any) => {
    const {ci, nombre, apellido, email, telefono, empresa, notas } = req.body;
    const nuevaPersona = crearPersona(ci, nombre, apellido, email, telefono, empresa, notas);
    res.json({nuevaPersona});
}

const getPersonas = async (req: any, res: any) => {
    res.json(listarPrsonas());
}

const getPersonaByCi = async (req: any, res: any) => {
    let ci = Number(req.params.ci);
    let persona = verPersona(ci);
    res.json({persona});
}

const getPersonaByNombreYApellido = async (req: any, res: any) => {
    const {nombre, apellido} = req.body;
    let persona = verPersonaByNombreYApellido(nombre, apellido);
    res.json({persona});
}

const deletePersona = async (req: any, res: any) => {
    let ci = Number(req.params.ci);
    let persona = eliminarPersona(ci);
    res.send(persona);
}

export { postPersona, getPersonaByCi, getPersonas, getPersonaByNombreYApellido, deletePersona };