const express = require('express');
const app = express();
const PORT = 3012;

app.get('/Alumno', (req, res) => {
    res.send('GET Hola ' + req.query.Nombre);
});

app.get('/Alumno/:Carrera',(req,res) =>{
    res.send('GET Alumno ' + req.query.Nombre + ' de la carrera de ' + req.params.Carrera);
});

app.post('/', (req, res)=>{
    res.send('POST Hola Mundo!');
});

app.put('/', (req, res) => {
    res.send('PUT Hola Mundo!');
});

app.delete('/', (req,res) =>{
    res.send('DELETE Hola Mundo!');
});

app.listen(PORT, () => {
    console.log(`Servidor Funcionando http://localhost:${PORT}`);
});