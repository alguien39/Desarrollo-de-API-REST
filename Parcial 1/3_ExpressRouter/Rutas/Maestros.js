import express from 'express';
import { obtenerMaestros, crearMaestro, obtenerMaestroporDepartamento } from '../Controlador/maestrosControlador';
const router = express.Router();

router.get('/', (req, res) => {
    obtenerMaestros(req, res);
});

router.get('/:Departamento',(req,res) =>{
    obtenerMaestroporDepartamento(req,res);
});

export const routerMaestros = router;