import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('GET Hola ' + req.query.Nombre);
    console.log("Prueba de router");
});

router.get('/:Carrera',(req,res) =>{
    res.send('GET Alumno ' + req.query.Nombre + ' de la carrera de ' + req.params.Carrera);
    console.log("Prueba de router");
});

export const routerAlumnos = router;