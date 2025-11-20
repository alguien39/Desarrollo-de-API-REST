import express from 'express';
import * as controladorSupers from '../controller/supersController.js';

const router = express.Router();

router.get('/', (req, res) => {
    controladorSupers.obtenerSupers(req, res);
});

router.get('/:id', (req, res)=>{
    controladorSupers.obtenerSupPorId(req, res);
});

router.post('/alta', (req, res) => {
    controladorSupers.altaSuper(req, res);
});

export const routerSupers = router;