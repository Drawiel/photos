const express = require("express");
const app = express();

app.use(express.json());

app.use(express.static("public"));

if (require.main == module) {
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
}

//Paso 1. npm init -y en la raiz del proyecto
//Paso 2. npm install express
//Paso 3. Proyecto de HTML, CSS y Script, colocarlo en carpeta public
//Paso 4. Crear archivo app.js