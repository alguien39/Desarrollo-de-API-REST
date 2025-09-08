import express from 'express';
import cors from 'cors'
import {routerAlumnos} from './Rutas/Alumnos.js';
import {routerMaestros} from './Rutas/Maestros.js';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
    
const __dirname = dirname(fileURLToPath(import.meta.url));

//Wire Stream
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'logs','access.log'), {flags: 'a'})

const app = express();
const PORT = 3012;

//Logger
app.use(morgan('combined', {stream: accessLogStream}));

//Middleware
app.use(cors());

//Rutas
app.use('/Alumno', routerAlumnos);
app.use('/Maestro', routerMaestros);

//Peticiones CORS
function PeticionesCors(res, req){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'GET, POST, PUT, DELETE');

}

app.listen(PORT, () => {
    console.log(`Servidor Funcionando http://localhost:${PORT}`);
});