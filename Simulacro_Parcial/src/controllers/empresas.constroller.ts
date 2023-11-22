import { crearEmpresa, eliminarEmpresa, listarEmpresas, verEmpresa } from '../services/empresas.service';

const postEmpresa = (req: any, res: any) => {
    const { nombre, sitioWeb, notas, empleados } = req.body;
    const nuevaEmpresa = crearEmpresa(nombre, sitioWeb, notas, empleados);
    if (nuevaEmpresa) {
        res.send("Empresa creada");
    } else {
        res.status(500).send("Error al crear empresa");

    }
}
const deleteEmpresa = (req: any, res: any) => {
    try {
        const { id } = req.params;
        const empresaEliminada = eliminarEmpresa(id);
        if (empresaEliminada) {
            res.send("Empresa eliminada");
        } else {
            res.status(500).send("Error al eliminar empresa");
        }
    } catch (error) {
        res.status(500).send("Error");
    }
}

const getEmpresas = (req: any, res: any) => {
    const empresas = listarEmpresas();
    res.json({empresas});
}

const getEmpresa = (req: any, res: any) => {
    let id = req.params.id;
    let empresa = verEmpresa(id);
    res.json({empresa});
}


export { postEmpresa, deleteEmpresa, getEmpresas, getEmpresa };