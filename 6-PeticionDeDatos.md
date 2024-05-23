# PETICION DE DATOS DESDE routes.controler.js

----------------------------------------------------------------

## CONCEPTOS BASICOS
Los métodos HTTP GET, PUT, POST y DELETE se utilizan para realizar diferentes acciones en recursos web.

Los parámetros se pueden enviar con las solicitudes HTTP de dos maneras principales:

- Parámetros de ruta: Se incluyen en la URL de la solicitud. Estos parámetros se almacenan en req.params en Express.
	http://localhost:3000/api/delete/6648b3f53ea532ac46c5c523
Esta sería la ruta para borrar un registro o documento con id= 6648b3f53ea532ac46c5c523 como parámetro de ruta.
para recibir este parámetro desde el servidor seria:         
	const { id } = req.params;
TAMBIEN en el RUTEO hay que agregarle la variable:
	router.delete('/api/delete/:id', controller.deletePokemon);




- Parámetros de consulta: Se incluyen en la URL después del signo de interrogación (?) y se separan por el símbolo de & (&). Estos 	parámetros se almacenan en req.query en Express.
	http://localhost:3000/api/delete?id=6648b3f53ea532ac46c5c523
  Para recibir este parámetro desde el servidor sería:
	const { id } = req.query;
  EN EL RUTEO solo va la ruta SIN VARIABLE:
	router.delete('/api/delete', controller.deletePokemon);

Es común utilizar el método HTTP DELETE.
El ID del registro que se desea borrar se suele enviar como un parámetro de ruta.


.
.
.
..



- Cargamos el PokeModel:
    const PokeModel = require('../models/pokemon.model');

- debajo del await connection() llamamos a la funcion para recuperar los datos
    como no usamos filtros recupera TODOS los datos y la guardamos en la constante allPokemons.

    const allPokemons = await PokeModel.find();

Ahora ya tenemos el array de la base de datos mongo caargada en allPokemons



