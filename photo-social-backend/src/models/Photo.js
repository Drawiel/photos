const mongoose = require("mongoose");
const PhotoSchema = new mongoose.Schema({
        userId: { type: String, required: true }, // Usuario propietario de la foto
        imageUrl: { type: String, required: true }, // URL de la imagen subida
        createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Photo", PhotoSchema);