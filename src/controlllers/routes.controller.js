const express = require('express');
const app = express();
app.use(express.json());

const PokeModel = require('../models/pokemon.model'); // 

const connection = require('../dbConnection/connection');

const { default: mongoose } = require('mongoose');

// Establecer la conexión
  connection().then(() => {
    return
  })
  .catch(err => {
    console.error('Error de conexión a MongoDB:', err);
  });


const controller = {};

// Pantalla Principal INDEX
controller.index = async (req, res) => {
    try {
        const title = 'INDEX DESDE EL SERVIDOR (pug)'

        const allPokemons = await PokeModel.find();
        console.log("allPokemos: " + allPokemons);

        res.render('index', { title, allPokemons }); //*En resumen, esta línea de código renderiza la plantilla 'index' utilizando el motor de plantillas configurado en tu aplicación Express y envía el resultado como respuesta al cliente que realizó la solicitud.

    } catch (error) {
        console.error(error);     
    }
    
}

// GET ALL
controller.getAll = async (req, res) => {
    try {
        const allPokemons = await PokeModel.find();
        console.log("GETALL de allPokemos: " + allPokemons);

        res.json(allPokemons); //

    } catch (error) {
        console.error(error);     
    }
    
}

// GET POKEMON BY NAME
controller.getPokemonByName = async (req, res) => {
    try {
      const { name } = req.params;
      console.log(req.params);
      const pokemon = await PokeModel.findOne({ name });
      if (pokemon) {
        res.status(200).json(pokemon);
      } else {
        res.status(404).json({ message: 'Pokémon not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving Pokémon', error });
    }
  };

// GET POKEMON By ID
controller.getPokemonById = async(req,res) => {
  try {
    const { id } = req.params;

    // Verificar el formato del ID
    if(!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ message: "Invalid ID" });
      return;
    }
    // Verificar si existe el ID
    const pokemon = await PokeModel.findById(id);

    if (pokemon) {
      res.status(200).json(pokemon);
    } else {
      res.status(404).json({ message: 'Pokemon not found' });
    }
  } catch (error) {
if (error.name === "CastError") {
      res.status(400).json({ message: "Invalid Pokemon ID" }); // Manejar formato de ID inválido
    } else {
      res.status(500).json({ error: error.message }); // Error genérico para otros problemas
    }
  }  
}


//   POST POKEMON
controller.createPokemon = async (req, res) => {
    try {
        const pokemon = new PokeModel(req.body);

        // Verificar si existe el NOMBRE
        const exists = await PokeModel.exists({name: pokemon.name});
        if (exists) {
          res.status(400).json({ message: "Pokemon already exists"});
          return;
        }

        await pokemon.save(); // Guarda el Pokemon en base de datos
        res.status(201).json(pokemon); //responde con el nuevo documento y el codigo 201 (CREADO)
        } catch (error) {
        res.status(400).json({error: error.message}); // Maneja cualquier error y responde con un codigo de estado 400 (Solicitud incorrecta)
    }
}

//   DELETE POKEMON
controller.deletePokemon = async(req, res) => {
    try {
        const { id } = req.params;

        // Verificar si existe "
        const exists = await PokeModel.exists({ _id: id });
        if (exists) {
            await PokeModel.deleteOne({ _id: id });
            res.status(200).json({ message: 'Pokemon deleted' });
        } else {
        res.status(404).json({ message: 'Pokemon not found' });
        }
    } catch (error) {
      if (error.name === "CastError") {
        res.status(400).json({ message: "Invalid ID" });
      } else {
        res.status(500).json({ error: error.message });
    }
  }
}
// PUT Pokemon
controller.putPokemon = async (req, res) => {
    try {
    // Verifica si existe _id en el cuerpo de la solicitud
    let id;
      if (req.body._id) {
        id = req.body._id;
      } else {
        return res.status(400).json({ message: "Missing _id in request body" });
      }
    console.log("id del pokemon: ", req.body._id);
    console.log("cuerpo: ", req.body);

    // verificar si existe
    const exists = await PokeModel.exists({ _id: id});
    if (!exists) {
      res.status(404).json({message: 'Pokemon not found'});
      return;
    }; 
  
    // Reemplazar Pokemon
    const pokemon = req.body;
    const updatedPokemon = await PokeModel.findOneAndUpdate({ _id: id}, pokemon, { new: true });
    res.json(updatedPokemon);

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}

// UPDATE Pokemon - PATCH

controller.patchPokemon = async (req, res) => {
  try {
    // verificar si existe ID
    const { id } = req.params;
    const exists = await PokeModel.exists({ _id: id });
    if (!exists) {
      res.status(404).json({ message: "Pokemon not found" });
      return;
    }
    // Verificar si id es Valida
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ message: "Invalid ID" });
      return;
    }
    // Actualizar Pokemon
    const pokemon = req.body;
    const updatedPokemon = await PokeModel.findOneAndUpdate({ _id: id }, pokemon, { new: true });
    res.json(updatedPokemon);

    console.log("pokemon Actializado");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}



module.exports = controller;

