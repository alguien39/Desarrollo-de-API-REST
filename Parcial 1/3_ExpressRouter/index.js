import express from 'express';
import cors from 'cors'
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
import {dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {routerAlumnos} from './Rutas/Alumnos.js';
import {routerMaestros} from './Rutas/Maestros.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3012;

//Logger
const accessLogStream = fs.createWriteStream(
    path.join(__dirname, 'logs','access.log'),
     {flags: 'a'}
);
app.use(morgan('combined', {stream: accessLogStream}));

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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