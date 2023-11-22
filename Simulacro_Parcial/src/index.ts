import { port } from './enviorment';
import { crearToken } from "./utils";
import personasRoute from "./routes/personas.route"
import empresaRoute from './routes/empresas.route';
const express = require('express');
const app = express();

app.use(express.json());
app.use('/api', personasRoute)
app.use('/api', empresaRoute);

const token = crearToken();
console.log(token);

app.get('/', (req: any, res: any) => {
    res.send('Api del simulacro del parcial -- Simulacro');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});