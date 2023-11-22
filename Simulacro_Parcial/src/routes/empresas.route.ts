import { getEmpresas, getEmpresa, postEmpresa, deleteEmpresa } from '../controllers/empresas.constroller';
import { validateToken } from "../utils";

const express = require('express');
const route = express.Router();

route.post('/empresa', validateToken, postEmpresa);

route.get('/empresa', validateToken, getEmpresas);

route.get('/empresa/:id', validateToken, getEmpresa);

route.delete('/empresa/:id', validateToken, deleteEmpresa);


export default route;