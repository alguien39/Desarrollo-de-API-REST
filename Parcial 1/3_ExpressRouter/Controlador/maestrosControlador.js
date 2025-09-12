export function obtenerMaestros(req, res){
    res.send('Obteniendo Maestros');
}

export function obtenerMaestroporDepartamento(req, res){
    const departamento = req.params.Departamento;
    res.send('Obteniendo Maestros del departamento de ' + departamento);
}

export function crearMaestro(req, res){
    res.send('Creando Maestro');
}