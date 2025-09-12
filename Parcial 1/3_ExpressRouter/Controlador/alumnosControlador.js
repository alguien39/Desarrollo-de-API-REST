import mysql from 'mysql2/promise';

// Create the connection to database
const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'World',
  password: '22100166',
});

export function obtenerAlumnos(req, res){
    res.send('Obteniendo Alumnos');
    console.log(req.body);
}

export function obtenerAlumnoporCarrera(req, res){
    const carrera = req.params.Carrera;
    res.send('Obteniendo Alumnos de la carrera de ' + carrera);
}

export function crearAlumno(req, res){
    console.log("Campos del formulario:", req.body);
    console.log("Archivo recibido:", req.file);

    res.json({
        mensaje: 'Alumno creado correctamente',
        datos: req.body,
        archivo: req.file
    });
}

export async function obtenerPaises(req, res){
    // A simple SELECT query
    try {
    const [results, fields] = await connection.query(
        'SELECT Name FROM `city`'
    );

    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
    res.json(results);
    } catch (err) {
    console.log(err);
    }
}