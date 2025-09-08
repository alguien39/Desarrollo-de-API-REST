import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hola Maestro ' + req.query.Nombre);
    console.log("Prueba de router");
});

router.get('/:Departamento',(req,res) =>{
    res.send('Maestro ' + req.query.Nombre + ' del departamento de ' + req.params.Departamento);
    console.log("Prueba de router");
});

export const routerMaestros = router;