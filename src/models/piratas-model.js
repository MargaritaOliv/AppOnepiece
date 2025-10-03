// src/models/piratas-model.js
class Pirata {
    constructor(nombre, apodo, fruta_del_diablo, tripulacion, edad, recompesa) {
        this.nombre = nombre;
        this.apodo = apodo;
        this.fruta_del_diablo = fruta_del_diablo;
        this.tripulacion = tripulacion;
        this.edad = edad;
        this.recompesa = recompesa;
    }
}

module.exports = Pirata;
