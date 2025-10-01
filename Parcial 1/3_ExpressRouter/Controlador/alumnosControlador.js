import mysql from 'mysql2/promise';

// Create the connection to database
const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'World',
  password: '22100166',
});

export function obtenerAlumnos(req, res){
    console.log(req.body.NumControl);
    res.send('Obteniendo Alumnos');
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
    let consultasql = '';
    if (!req.query.Id) {
        consultasql = 'SELECT Name FROM `city`';
    }
    else {
        consultasql = `SELECT Name FROM city WHERE ID=${req.query.Id}`;
    }
    try {
    const [results, fields] = await connection.query(consultasql);
    if (!results.length) {
        res.status(404);
        return res.json({error: 'No se encontraron países con el ID proporcionado'});
    }
    else{
        res.json(results);
    }
    } catch (err) {
    res.json({error: 'Error al obtener los países'});
    }
}

export async function actualizarPais(req, res){
    const id = req.params.Id;
    const nuevoNombre = req.params.Nombre;
    try{
        const [results, fields] = await connection.query(`Update city Set Name='${nuevoNombre}' where Id=${id}`);
        if (results.affectedRows === 0) {
            res.status(404);
            return res.json({error: 'No se encontró ningún país con el ID proporcionado'});
        }
        res.json({mensaje: 'País actualizado correctamente'});
    }
    catch(err){
        res.json({error: 'Error al actualizar el país'});
        res.status(500);
    }
}