const mongoose = require('mongoose');

const getConnection = async () => {
    try {
        // Asegúrate de que en tu archivo .env tengas la variable MONGO_URI
        const url = process.env.MONGO_URI; 
        
        await mongoose.connect(url);

        console.log('--- 🟢 Conexión a MongoDB exitosa ---');
    } catch (error) {
        console.error('❌ Error de conexión a MongoDB:', error);
    }
}

module.exports = { getConnection };