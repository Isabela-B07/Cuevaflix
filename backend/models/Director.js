const { Schema, model } = require('mongoose');

const DirectorSchema = Schema({
    nombres: {
        type: String,
        required: [true, 'El nombre del director es obligatorio'],
        trim: true
    },
    estado: {
        type: Boolean, // Manejamos la lógica con true/false
        default: true
    }
}, { 
    timestamps: true // Esto genera createdAt y updatedAt automáticamente
});

module.exports = model('Director', DirectorSchema);