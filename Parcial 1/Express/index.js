const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hola Mundo!');
});

app.post('/', (req, res) => {
    res.send('POST Hola Mundo!');
});

app.listen(PORT, () => {
    console.log(`Servidor funcionando http://localhost:${PORT}`);
});