const { Schema, model } = require('mongoose');

const MediaSchema = Schema({
    serial: { type: String, required: true, unique: true, trim: true },
    titulo: { type: String, required: true, trim: true },
    sinopsis: { type: String, trim: true },
    url: { type: String, required: true, unique: true },
    imagen: { type: String },
    anioEstreno: { type: Number, required: true },
    genero: { type: Schema.Types.ObjectId, ref: 'Genero', required: true },
    director: { type: Schema.Types.ObjectId, ref: 'Director', required: true },
    productora: { type: Schema.Types.ObjectId, ref: 'Productora', required: true },
    tipo: { type: Schema.Types.ObjectId, ref: 'Tipo', required: true }
}, { 
    timestamps: true // Esto crea automáticamente createdAt y updatedAt
});

module.exports = model('Media', MediaSchema);