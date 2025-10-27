import swaggerJSDoc from "swagger-jsdoc";

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
    apis: ["./swagger/*.yml"],
};

const specs = swaggerJSDoc(options);
console.log(specs);
export default specs;