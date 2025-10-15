export function ObtenerSupers (req, res, next){
    const err = new Error("Error de ejemplo");
    next(err);
};