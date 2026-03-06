const Productora = require('../models/Productora');
const { request, response } = require('express');

const getProductoras = async (req = request, res = response) => {

    try {

        const productoras = await Productora.find();

        res.status(200).json(productoras);

    } catch (error) {

        console.error('❌ Error al obtener productoras:', error);

        res.status(500).json({
            msg: 'Ocurrió un error al listar las productoras'
        });

    }

};

const createProductora = async (req = request, res = response) => {

    try {

        const { nombre, slogan, descripcion } = req.body;

        const productora = new Productora({
            nombre,
            slogan,
            descripcion
        });

        await productora.save();

        res.status(201).json(productora);

    } catch (error) {

        console.error('❌ Error al crear productora:', error);

        res.status(500).json({
            msg: 'Ocurrió un error al guardar la productora'
        });

    }

};

const updateProductora = async (req = request, res = response) => {

    try {

        const { id } = req.params;
        const { nombre, estado, slogan, descripcion } = req.body;

        const productora = await Productora.findByIdAndUpdate(
            id,
            {
                nombre,
                estado,
                slogan,
                descripcion,
                fechaActualizacion: Date.now()
            },
            { new: true }
        );

        if (!productora) {
            return res.status(404).json({
                msg: 'Productora no encontrada'
            });
        }

        res.status(200).json(productora);

    } catch (error) {

        console.error('❌ Error al actualizar productora:', error);

        res.status(500).json({
            msg: 'Ocurrió un error al actualizar la productora'
        });

    }

};

module.exports = {
    getProductoras,
    createProductora,
    updateProductora
};