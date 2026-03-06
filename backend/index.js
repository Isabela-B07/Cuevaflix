require('dotenv').config(); 
const express = require('express');
const cors = require('cors');

const { getConnection } = require('./db/db-connection-mongo');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors()); 
app.use(express.json()); 

/* --- Routes --- */
app.use('/api/genero', require ('./routes/genero')); // Ruta de Género
app.use('/api/director', require('./routes/director')); //Ruta de Director
app.use('/api/productora', require('./routes/productora')); //Ruta de Produtora
app.use('/api/tipo', require('./routes/tipo')); // Ruta de Tipo
app.use('/api/media', require('./routes/media')); // Ruta de Media

getConnection();

app.listen(port, () => {
    console.log(`--- 🟢 Servidor corriendo en el puerto ${port} ---`);
})