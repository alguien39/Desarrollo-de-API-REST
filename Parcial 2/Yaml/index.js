import {parse,stringify} from 'yaml';
import fs from 'fs';

const archivo = fs.readFileSync('./Parcial 2/Yaml/Ejercicio.yml','utf-8');
const datos = stringify(archivo);

console.log(datos);