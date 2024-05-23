const chalk = require('chalk');
const log = console.log;
log(chalk.blue('SERVIDOR ') + chalk.yellow('HTTP'));

// ! CARGA LIBRERIA HTTP
const http = require('http');

// ! CREA SERVIDOR http
const server = http.createServer((req, res) => {
	log(chalk.red('Un cliente se ha conectado'));
    res.end('Respuesta del servidor - SALIENDO');
});

// ! ABRE PUERTO 3000 y queda ESCUCHANDO
server.listen(3000, () => {
	log(chalk.green('Servidor en el puerto 3000 a la espera de conexiones'));
	log(chalk.yellow('Abre el navegador y una pestaña en "localhost:3000"'));
})



