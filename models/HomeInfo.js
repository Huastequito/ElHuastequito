const mongoose = require('mongoose');

const homeInfoSchema = new mongoose.Schema({
  nombreLocal: { type: String, required: true },
  slogan: { type: String, required: true },
  descripcion: { type: String },
  telefono: { type: String },
  direccion: { type: String },
  email: { type: String },
  // Puedes agregar más campos según lo que quieras mostrar en la página de inicio
}, { timestamps: true });

module.exports = mongoose.model('HomeInfo', homeInfoSchema);
