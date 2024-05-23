# CONECTAR LA APP CON LA BASE DE DATOS MONGO A TARVES DE MONGOOSE
- Instalar Mongoose en linea de comandos
    > npm i Mongoose

- Crear carpeta src/conection

- crear archivo src/conection/conection.js

- Crear las variables para despues llenar el link de coneccion que sacamos de Mongoose
  con las 3 variables: USUARIO, CONTRASEÑA y NOMBRE DE BASE DE DATOS
    const user = 'marianoantar';
    const password = 'HGWqBgPQJFLMVu5d';
    const dbname = 'pokedex';
    const uri = `mongodb+srv://${user}:${password}@cluster0.rwlha0q.mongodb.net/${dbname}?retryWrites=true&w=majority&appName=Cluster0` ;

