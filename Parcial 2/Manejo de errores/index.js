import express from 'express';
//import cors from 'cors';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
import {dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {routerSupers} from './Rutas/Supers.js';
import multer from 'multer';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3012;
const upload = multer({ dest: 'uploads/' });

//Logger
const accessLogStream = fs.createWriteStream(
    path.join(__dirname, 'logs','access.log'),
     {flags: 'a'}
);

//Middleware
//app.use(cors());
app.use(morgan('combined', {stream: accessLogStream}));
app.use(upload.single('archivo'));

//Rutas
app.use('/Supers', routerSupers);

//Manejador de errores
app.use((err, req, res, next)=>{
    res.status(500).json({message: err.message});
})

//Peticiones CORS
//function PeticionesCors(res, req){
//    res.header('Access-Control-Allow-Origin', '*');
//    res.header('Access-Control-Allow-Headers', 'GET, POST, PUT, DELETE');
//}

app.listen(PORT, () => {
    console.log(`Servidor Funcionando http://localhost:${PORT}`);
});