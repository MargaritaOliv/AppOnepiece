const Pirata = require('../models/piratas-model');
const Connection = require('../config/db'); // importa tu conexión a MySQL

const getAllPiratas = async (req, res) => {
    try {
        const [rows] = await Connection.query('SELECT * FROM piratas');
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener piratas', error });
    }
};

const getPirataById = async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await Connection.query('SELECT * FROM piratas WHERE id = ?', [id]);
        if (rows.length > 0) {
            res.status(200).json(rows[0]);
        } else {
            res.status(404).json({ message: 'Pirata no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el pirata', error });
    }
};

const createPirata = async (req, res) => {
    const { nombre, apodo, fruta_del_diablo, tripulacion, edad, recompesa } = req.body;

    try {
        const newPirata = new Pirata(nombre, apodo, fruta_del_diablo, tripulacion, edad, recompesa);

        const [result] = await Connection.query(
            `INSERT INTO piratas (nombre, apodo, fruta_del_diablo, tripulacion, edad, recompesa) 
             VALUES (?, ?, ?, ?, ?, ?)`,
            [newPirata.nombre, newPirata.apodo, newPirata.fruta_del_diablo, newPirata.tripulacion, newPirata.edad, newPirata.recompesa]
        );

        res.status(201).json({ message: 'Pirata creado con éxito', id: result.insertId, ...newPirata });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el pirata', error });
    }
};

const deletePirata = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await Connection.query('DELETE FROM piratas WHERE id = ?', [id]);
        if (result.affectedRows > 0) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Pirata no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el pirata', error });
    }
};

module.exports = {
    getAllPiratas,
    getPirataById,
    createPirata,
    deletePirata
};
