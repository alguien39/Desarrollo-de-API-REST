export function obtenerAlumnos(req, res){
    res.send('Obteniendo Alumnos');
}

export function obtenerAlumnoporCarrera(req, res){
    const carrera = req.params.Carrera;
    res.send('Obteniendo Alumnos de la carrera de ' + carrera);
}

export function crearAlumno(req, res){
    res.send('Creando Alumno');
}