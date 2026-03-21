const { Schema, model } = require('mongoose');

const TipoSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre del tipo es obligatorio'],
        trim: true
    },
    descripcion: {
        type: String,
        trim: true
    }
}, { 
    timestamps: true // Gestiona automáticamente createdAt y updatedAt
});

module.exports = model('Tipo', TipoSchema);