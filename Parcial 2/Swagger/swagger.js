import swaggerJSDoc from "swagger-jsdoc";
import path from 'path';
import { fileURLToPath } from "url";
import { dirname } from "path";
import { SwaggerTheme } from 'swagger-themes';

const theme = new SwaggerTheme()
const __dirname = dirname(fileURLToPath(import.meta.url));
const swaggerYamlPath = path.join(__dirname, 'swagger', 'swagger.yml');

const options = {
    explorer: true,
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
    apis: [swaggerYamlPath],
};

export const customCss = theme.getBuffer('dracula').toString();
const specs = swaggerJSDoc(options);
export default specs;