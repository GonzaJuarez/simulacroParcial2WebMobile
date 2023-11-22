import { postPersona, getPersonas, getPersonaByCi, getPersonaByNombreYApellido, deletePersona } from '../controllers/personas.controller';
import {validateToken} from "../utils";
const express = require('express');
const route = express.Router();


route.get('/personas', validateToken, getPersonas);

route.get('/personas/:ci', validateToken, getPersonaByCi);

route.post('/personas/buscar', validateToken, getPersonaByNombreYApellido);

route.post('/personas', validateToken, postPersona);

route.delete('/personas/:ci', validateToken, deletePersona);

export default route;