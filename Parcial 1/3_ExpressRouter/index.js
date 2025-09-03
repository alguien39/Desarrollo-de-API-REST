const express = require('express');
const routerAlumnos = require('./Rutas/Alumnos.js');
const routerMaestros = require('./Rutas/Maestros.js');
// const router = express.Router();

const app = express();
const PORT = 3012;

app.use('/Alumno', routerAlumnos.router);
app.use('/Maestro', routerMaestros.router);

app.listen(PORT, () => {
    console.log(`Servidor Funcionando http://localhost:${PORT}`);
});