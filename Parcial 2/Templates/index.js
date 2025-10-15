import express from 'express';
import path from 'path';
import {dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3013;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/hola', (req, res) => {
    let Opciones = {
        title: 'Prueba de Pug',
        message: 'Hola Mundo con Pug'
    };
    res.render('index.pug', Opciones);
});

app.listen(PORT, () => {
    console.log(`Servidor Funcionando http://localhost:${PORT}`);
});