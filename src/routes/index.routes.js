
const express = require('express'); // * CARGA EXPRESS
const router = express.Router(); //* En vez de inicial toda la aplicacion de express cargamos solo Router que es lo que necesitamos

const controller = require('../controlllers/routes.controller');// * CARGA DE CONTROLADOR

// * ENRUTAR
router.get('/', controller.index);

router.get('/api/', controller.getAll);

router.get('/api/getbyname/:name', controller.getPokemonByName);

router.get('/api/getbyid/:id', controller.getPokemonById)

router.post('/api/post', controller.createPokemon);

router.delete('/api/delete/:id', controller.deletePokemon);

router.put('/api/update', controller.putPokemon);

router.patch('/api/update/:id', controller.patchPokemon);

module.exports = router;