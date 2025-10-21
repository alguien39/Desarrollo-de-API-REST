import express from 'express';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const opciones = {
    key: fs.readFileSync(path.join(__dirname, 'key.pem'))
};

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/login', (req, res) => {
    const payload = req.body;
    var token = jwt.sign(payload, opciones.key, { algorithm: 'RS256' });
    console.log(token);
    res.json({ token: token });
});

app.get('/Supers',verificarToken, (req, res) => {
    res.json({ message: 'Acceso Concedidio' });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

function verificarToken(req, res, next) {
    console.log(req.headers.autorization);
    if(typeof(req.headers.authorization) == 'undefined') {
        res.json({Error:"Token No Proporcionado"});
    } else{
        let token = req.headers.authorization.substring(7, req.headers.authorization.length);
        jwt.verify(token, opciones.key, { algorithms: ['RS256'] }, (err, decoded) => {
            if(err) {
                res.json({Error:"Token Invalido"});
            } else {
                req.user = decoded;
                next();
            }
        });
    }
}
