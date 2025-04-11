require("dotenv").config({ path: require("path").resolve(__dirname, "../.env") });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads")); // Servir imágenes estáticamente

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB conectado"))
    .catch((err) => console.error("Error de conexión:", err));

    // Importar rutas
const photoRoutes = require("./routes/photoRoutes");
app.use("/api/photos", photoRoutes);
module.exports = app; 

if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
}