const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
    res.send('Hola Mundo!');
});

app.put('/', (req, res) => {
    res.send('PUT Hola Mundo!');
});

app.listen(PORT, () => {
    console.log(`Servidor Funcionando http://localhost:${PORT}`);
});