const Productora = require('../models/Productora');
const { request, response } = require('express');

const getProductoras = async (req = request, res = response) => {
    try {
        const productoras = await Productora.find();
        res.json(productoras);
    } catch (error) {
        res.status(500).json({ msg: 'Error al listar' });
    }
};

const createProductora = async (req = request, res = response) => {
    try {
        const { nombre, slogan, descripcion } = req.body;
        const productora = new Productora({ nombre, slogan, descripcion });
        await productora.save();
        res.status(201).json(productora);
    } catch (error) {
        res.status(500).json({ msg: 'Error al crear' });
    }
};

const updateProductora = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const { nombre, estado, slogan, descripcion } = req.body;
        const productora = await Productora.findByIdAndUpdate(
            id, 
            { nombre, estado, slogan, descripcion }, 
            { new: true }
        );
        res.json(productora);
    } catch (error) {
        res.status(500).json({ msg: 'Error al actualizar' });
    }
};

module.exports = { getProductoras, createProductora, updateProductora };