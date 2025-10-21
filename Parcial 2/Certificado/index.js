import https from 'https';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3012;

const Opciones = {
    key: fs.readFileSync(path.join(__dirname,'Keys', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'Keys', 'cert.pem'))
};

app.get('/', (req, res) => {
  res.send('Hola Mundo (HTTPS)');
});

https.createServer(Opciones, app).listen(PORT, () => {
    console.log(`Servidor Seguro Funcionando https://localhost:${PORT}`);
});