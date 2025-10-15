import express from 'express';
import jwt from 'jsonwebtoken';

const app = express();
const PORT = 3000;
const Token = jwt.sign({ foo: 'bar' }, 'secretkey');

app.use(express.json());

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Aquí deberías validar el usuario y la contraseña
    jwt.sign({ username },{ password }, 'secretkey', (err, token) => {
        res.json({ token });
    });
});

app.get('/Supers', (req, res) => {
    const token = req.headers['bearer-token'];
    if (!token) {
        return res.status(401).json({ message: 'Token no proporcionado' });
    }
    jwt.verify(token, 'secretkey', (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token inválido' });
        }
        res.json({ message: 'Acceso concedido a recursos protegidos', user: decoded });
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
