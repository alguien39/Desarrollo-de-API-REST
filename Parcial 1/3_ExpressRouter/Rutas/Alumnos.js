import express from 'express';
import { obtenerAlumnos, crearAlumno, obtenerAlumnoporCarrera } from '../Controlador/alumnosControlador';
const router = express.Router();

router.get('/', (req, res) => {
    obtenerAlumnos(req, res);
});

router.get('/:Carrera',(req,res) =>{
    obtenerAlumnoporCarrera(req,res);
});

export const routerAlumnos = router;