import swaggerJSDoc from "swagger-jsdoc";
import path from 'path';
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const swaggerYamlPath = path.join(__dirname, 'swagger', 'swagger.yml');

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API de Superhéroes",
            version: "1.0.0",
            description: "API para gestionar una lista de superhéroes",
        },
        contact: {
            name: "Joham Barberena",
            email: "JohamBarberena@hotmail.com"
        },
        servers: [
            {
                url: "http://localhost:3000",
                description: "Servidor local",
            },
        ],
    },
    apis: [swaggerYamlPath]
};

const specs = swaggerJSDoc(options);
console.log(specs);
export default specs;