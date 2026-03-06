const Media = require('../models/Media');
const { request, response } = require('express');

const getMedias = async (req = request, res = response) => {

    try {

        const medias = await Media.find()
            .populate('genero')
            .populate('director')
            .populate('productora')
            .populate('tipo');

        res.status(200).json(medias);

    } catch (error) {

        console.error('❌ Error al obtener medias:', error);

        res.status(500).json({
            msg: 'Error al listar las producciones'
        });

    }

};

const createMedia = async (req = request, res = response) => {

    try {

        const data = req.body;

        const media = new Media(data);

        await media.save();

        res.status(201).json(media);

    } catch (error) {

        console.error('❌ Error al crear media:', error);

        res.status(500).json({
            msg: 'Error al guardar la producción'
        });

    }

};

const updateMedia = async (req = request, res = response) => {

    try {

        const { id } = req.params;

        const data = req.body;

        data.fechaActualizacion = Date.now();

        const media = await Media.findByIdAndUpdate(id, data, { new: true });

        if (!media) {
            return res.status(404).json({
                msg: 'Producción no encontrada'
            });
        }

        res.status(200).json(media);

    } catch (error) {

        console.error('❌ Error al actualizar media:', error);

        res.status(500).json({
            msg: 'Error al actualizar la producción'
        });

    }

};

const deleteMedia = async (req = request, res = response) => {

    try {

        const { id } = req.params;

        const media = await Media.findByIdAndDelete(id);

        if (!media) {
            return res.status(404).json({
                msg: 'Producción no encontrada'
            });
        }

        res.status(200).json({
            msg: 'Producción eliminada correctamente'
        });

    } catch (error) {

        console.error('❌ Error al eliminar media:', error);

        res.status(500).json({
            msg: 'Error al eliminar la producción'
        });

    }

};

module.exports = {
    getMedias,
    createMedia,
    updateMedia,
    deleteMedia
};