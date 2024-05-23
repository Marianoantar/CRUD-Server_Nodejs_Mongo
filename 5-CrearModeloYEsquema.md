# CREAR MODELO Y ESQUEMA

- Crear CARPETA y ARCHIVO: src/models/model.js .

- Instanciar mongoose

	const mongoose = require('mongoose');

	const{ Schema } = mongoose;
- Crear esquema:
	const  PokeSchema  =  new  Schema({
	name:  string
	})

- Crear modelo:
	const  PokeModel  =  mongoose.model('pokemons', PokeSchema);

- Exportar modelo:
	module.exports  =  PokeModel;