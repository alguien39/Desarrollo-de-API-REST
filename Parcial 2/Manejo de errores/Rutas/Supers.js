import express from 'express';
import {ObtenerSupers} from '../Controladores/SupersControlador.js';

const router = express.Router();

router.get('/ObtenerSupers', (req, res, next) => {
    ObtenerSupers(req, res, next);
});

export const routerSupers = router;

