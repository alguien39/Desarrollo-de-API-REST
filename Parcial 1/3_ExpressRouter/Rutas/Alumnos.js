import express from 'express';
import { obtenerAlumnos, crearAlumno,  obtenerAlumnoporCarrera, obtenerPaises } from '../Controlador/alumnosControlador.js';

const router = express.Router();

router.get('/', (req, res) => {
    obtenerAlumnos(req, res);
});

//router.get('/:Carrera', (req, res) => {
  //  obtenerAlumnoporCarrera(req, res);
//});

router.post('/Crear', (req, res) => {
    crearAlumno(req, res);
});

router.get('/ObtenerPaises', (req, res) => {
    obtenerPaises(req, res);
});

export const routerAlumnos = router;
