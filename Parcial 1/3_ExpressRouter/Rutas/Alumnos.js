import express from 'express';
import multer from 'multer';
import path from 'path';
import {dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import { obtenerAlumnos, crearAlumno,  obtenerAlumnoporCarrera, obtenerPaises } from '../Controlador/alumnosControlador.js';

const router = express.Router();
const __dirname = dirname(fileURLToPath(import.meta.url));

// Carpeta de destino
const folder = path.join(__dirname, '..Archivos/Alumnos');
const upload = multer({ dest: folder });

router.get('/', (req, res) => {
    obtenerAlumnos(req, res);
    upload.none();
});

router.get('/:Carrera', (req, res) => {
    obtenerAlumnoporCarrera(req, res);
    upload.none();
});

router.post('/Crear', upload.single('archivo'), (req, res) => {
    crearAlumno(req, res);
    upload.none();
});

router.get('/ObtenerPaises', (req, res) => {
    console.log
    obtenerPaises(req, res);
    upload.none();
});

export const routerAlumnos = router;
