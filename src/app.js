const chalk = require('chalk');
const log = console.log;
log(chalk.blue('App Servidor Express '));


const express = require('express'); //! Carga libreria express
const app = express(); //! Ejecuta express y app tiene todos los metodos de express
// Middleware para parsear el cuerpo de las peticiones
app.use(express.json());


// RUTAS
const path = require('path'); //! Este modulo se encarga de normalizar rutas
const routes = require('./routes/index.routes');
app.use(routes);

//! Setea PUG como motor de plantillas
app.set('view engine', 'pug'); 
app.set('views', path.join(__dirname, 'views')); // Indicamos donde esta la carpeta Views


// STATIC FILES
app.use(express.static(path.join(__dirname, '../public')));

//! Si no encontro la ruta dirige el flujo al index que muestra el error
app.use((req, res) => {
    res.sendFile(path.join(__dirname, '../public/404.html'));
})

//! Escucha el puerto 3000
app.listen(3000, () => {

    log(chalk.green('Servidor corriendo en el puerto 3000'));

})
