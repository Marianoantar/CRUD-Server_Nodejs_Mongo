# PARA RENDERIZAR UN HTML
## sda
- Crear carpeta 'public' en la carpeta raiz

- colocar el HTML

- luego en app.js carga el modulo 'path' 

    const path = require('path')

- toma la ubicacion actual en dirname luego sube un nivel y se dirige a public
 Setea la carpeta public como carpeta de ARCHIVOS ESTATICOS mediante 
 un midleware express.static

    app.use(express.static(path.join(__dirname, '../public')));

-  Si no encontro la ruta dirige el flujo al index que muestra el error
        app.use((req, res) => {
            res.sendFile(path.join(__dirname, '../public/404.html'));
        })
