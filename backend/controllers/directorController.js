const Director = require('../models/Director');
const { request, response } = require('express');

const getDirectores = async (req = request, res = response) => {
    try {
        const directores = await Director.find();
        res.status(200).json(directores);
    } catch (error) {
        res.status(500).json({ msg: 'Error al listar directores' });
    }
};

const createDirector = async (req = request, res = response) => {
    try {
        const { nombres } = req.body;
        const director = new Director({ nombres });
        await director.save();
        res.status(201).json(director);
    } catch (error) {
        res.status(500).json({ msg: 'Error al guardar director' });
    }
};

const updateDirector = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const { nombres, estado } = req.body;

        const director = await Director.findByIdAndUpdate(
            id,
            { nombres, estado },
            { new: true }
        );

        if (!director) return res.status(404).json({ msg: 'No encontrado' });
        res.status(200).json(director);
    } catch (error) {
        res.status(500).json({ msg: 'Error al actualizar' });
    }
};

module.exports = { getDirectores, createDirector, updateDirector };