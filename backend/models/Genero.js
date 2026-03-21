const { Schema, model } = require('mongoose');

const GeneroSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true,
        trim: true
    },
    estado: {
        type: Boolean, // Mejor como Boolean para lógica de programación
        default: true
    },
    descripcion: {
        type: String,
        trim: true
    }
}, { 
    timestamps: true // Esto crea automáticamente createdAt y updatedAt
});

module.exports = model('Genero', GeneroSchema);