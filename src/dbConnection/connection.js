const mongoose = require('mongoose');

const user = 'marianoantar';
const password = 'HGWqBgPQJFLMVu5d';
const dbname = 'pokedex';
const uri = `mongodb+srv://${user}:${password}@cluster0.rwlha0q.mongodb.net/${dbname}?retryWrites=true&w=majority&appName=Cluster0` ;

module.exports = () => mongoose.connect(uri).then(() => {
    console.log('MongoDB connected');
  }).catch(err => {
    console.error('MongoDB connection error:', err);
  });
//* Esto sería lo mismo
// const connection = () => mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// module.exports = connection;