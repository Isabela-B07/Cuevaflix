const { Router } = require('express');

const { getGeneros, createGenero, updateGenero } = require('../controllers/generoController');

const router = Router();

router.get('/', getGeneros);
router.post('/', createGenero);
router.put('/:id', updateGenero); //Nueva ruta que es la de editar.

module.exports = router;