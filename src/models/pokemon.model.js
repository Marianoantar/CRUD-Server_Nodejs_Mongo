const mongoose = require('mongoose');
const{ Schema } = mongoose;

const PokeSchema = new Schema({
    name: String
}, { versionKey: false });

const PokeModel = mongoose.model('pokemons', PokeSchema);

module.exports = PokeModel;