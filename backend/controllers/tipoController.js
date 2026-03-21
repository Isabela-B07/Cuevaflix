const Tipo = require('../models/Tipo');
const { request, response } = require('express');

const getTipos = async (req = request, res = response) => {
    try {
        const tipos = await Tipo.find();
        res.status(200).json(tipos);
    } catch (error) {
        res.status(500).json({ msg: 'Error al listar los tipos' });
    }
};

const createTipo = async (req = request, res = response) => {
    try {
        const { nombre, descripcion } = req.body;
        const tipo = new Tipo({ nombre, descripcion });
        await tipo.save();
        res.status(201).json(tipo);
    } catch (error) {
        res.status(500).json({ msg: 'Error al guardar el tipo' });
    }
};

const updateTipo = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion } = req.body;
        const tipo = await Tipo.findByIdAndUpdate(
            id,
            { nombre, descripcion },
            { new: true }
        );
        if (!tipo) return res.status(404).json({ msg: 'Tipo no encontrado' });
        res.status(200).json(tipo);
    } catch (error) {
        res.status(500).json({ msg: 'Error al actualizar el tipo' });
    }
};

module.exports = { getTipos, createTipo, updateTipo };