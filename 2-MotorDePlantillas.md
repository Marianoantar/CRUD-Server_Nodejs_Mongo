
-Instala pug en la linea de comandos
    > npm install pug

- Setea PUG como motor de plantillas
    app.set('view engine', 'pug'); 

- Crea la carpeta views dentro de src

- Tenemos que setear la carpeta para que node sepa donde ESTA
    app.set('view engine', 'pug'); //! Setea PUG como motor de plantillas
    app.set('views', path.join(__dirname, 'views')); // Indicamos donde esta la carpeta Views

