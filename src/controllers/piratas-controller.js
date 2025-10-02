const piratas = require('../models/piratas-model');

const getAllPiratas = (req, res) => {
    res.status(200).json(piratas);
};


const getPirataById = (req, res) => {
    const { id } = req.params;
    const pirata = piratas.find(p => p.id === parseInt(id));
    if (pirata) {
        res.status(200).json(pirata);
    } else {
        res.status(404).json({ message: 'Pirata no encontrado' });
    }
};

const createPirata = (req, res) => {
    const { nombre, apodo, tripulacion, fruta_del_diablo, edad, recompesa } = req.body;
    const newPirata = new piratas(nombre, apodo, tripulacion, fruta_del_diablo, edad, recompesa);
    piratas.push(newPirata);
    res.status(201).json(newPirata);
};

const deletePirata = (req, res) => {
    const { id } = req.params;
    const index = piratas.findIndex(p => p.id === parseInt(id));
    if (index !== -1) {
        piratas.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Pirata no encontrado' });
    }
};

module.exports = {
    getAllPiratas,
    getPirataById,
    createPirata,
    deletePirata
};