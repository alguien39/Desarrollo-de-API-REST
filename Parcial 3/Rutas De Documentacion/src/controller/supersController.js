import * as SupersService from "../service/supersService.js";

function obtenerSupers(req, res){
    if(SupersService.obtenerTodoslosSupers().length === 0){
        return res.status(404).json({mensaje: "No hay supers disponibles"});
    }
    else{
        const listaSupers = SupersService.obtenerTodoslosSupers();
        return res.status(200).json(listaSupers);
    }
};

function obtenerSupPorId(req, res){
    const id = parseInt(req.params.id);
    const superheroe = SupersService.obtenerSuperPorId(id);
    if(!superheroe){
        return res.status(404).json({mensaje: `No se encontró un super con el id ${id}`});
    }
    else{
        return res.status(200).json(superheroe);
    }
};

function altaSuper(req, res){
    const nuevoSuper = req.body;
    try{
        const creado = SupersService.crearSuper(nuevoSuper);
        return res.status(201).json(creado);
    }
    catch(error){
        return res.status(400).json({mensaje: error.message});
    }
};

export { obtenerSupers, obtenerSupPorId, altaSuper };