let Supers = [
    { id: 1, name: 'Superman', power: 'Vuelo, Super Fuerza, Aliento Gelido, Rayos Laser' },
    { id: 2, name: 'Batman', power: 'Inteligencia Superior, Millonario, Capacidades Humanas al limite' },
    { id: 3, name: 'Wonder Woman', power: 'Super Fuerza, Larga vida' },
    { id: 4, name: 'Flash', power: 'Super Velocidad' },
    { id: 5, name: 'Aquaman', power: 'Respiracion bajo el agua, Habla con los peces, Super Fuerza' }
];

function obtenerTodoslosSupers() {
    return Object.values(Supers);
};

function obtenerSuperPorId(id) {
    const numericId = Number(id);
    if(Number.isNaN(numericId)) return null;
    return Supers.find(superheroe => superheroe.id === id);
}

function crearSuper(superheroe) {
    if(!superheroe || typeof superheroe.name !== 'string' || typeof superheroe.power !== 'string') {
        throw new Error('Objeto Superheroe inválido');
    }
    const nuevoId = Supers.length + 1;
    const nuevoSuper = { id: nuevoId, name: superheroe.name, power: superheroe.power };
    Supers.push(nuevoSuper);
    return nuevoSuper;
};

export { obtenerTodoslosSupers, obtenerSuperPorId, crearSuper };

