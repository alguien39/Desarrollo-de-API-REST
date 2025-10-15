import express from 'express';
import basicAuth from 'express-basic-auth';

const app = express();
const PORT = 3012;
app.use(express.json());
app.use(express.text());

app.use(basicAuth({
    users: { 'admin': 'admin123' },
}))

app.get('/Alumno', (req, res) => {
    res.send('GET Hola '+ req.auth.user);
});

app.listen(PORT, () => {
    console.log(`Servidor Funcionando http://localhost:${PORT}`);
});