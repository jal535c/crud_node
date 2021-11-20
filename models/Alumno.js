const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const alumnoSchema = new Schema ({
  nombre: String,
  edad: Number
}, {versionKey: false});


//lo normal es pasar nombre de este modulo, en mayuscula y singular 
//crearia la coleccion minuscula y plurar
module.exports = mongoose.model('alumnos', alumnoSchema);