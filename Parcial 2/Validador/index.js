import express from 'express';
import {check, validationResult} from 'express-validator';

const app = express();
const PORT = 3012;

app.use(express.json());

//Funcion Validadora
const ValidarSuper = [
    check('nombre').isString().withMessage('El nombre debe ser una cadena de texto').notEmpty().withMessage('El nombre no debe estar vacio'),
    check('alias').isString().withMessage('El alias debe ser una cadena de texto').notEmpty().withMessage('El alias no debe estar vacio'),
    check('poder').isString().withMessage('El poder debe ser una cadena de texto').notEmpty().withMessage('El poder no debe estar vacio'),
    check('edad').isInt({min: 5}).withMessage('La edad debe ser un numero entero positivo').notEmpty().withMessage('La edad no debe estar vacio'),
];

//Rutas
app.post('/Supers', ValidarSuper, (req, res) => {
    if(!validationResult(req).isEmpty()){
        err = validationResult(req).array();
        next(err);
    }
    else{
        res.send('Super valido');
    }
});

//Manejador de errores
app.use((err, req, res, next)=>{
    res.status(500).json({message: err.message});
})

app.listen(PORT, () => {
    console.log(`Servidor Funcionando http://localhost:${PORT}`);
});