const { Schema, model } = require('mongoose');

const ProductoraSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        trim: true
    },
    estado: {
        type: Boolean,
        default: true
    },
    slogan: {
        type: String,
        trim: true
    },
    descripcion: {
        type: String,
        trim: true
    }
}, { 
    timestamps: true 
});

module.exports = model('Productora', ProductoraSchema);