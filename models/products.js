const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { shopDB } = require("../connection");

const product = new Schema({
    nombre: {type: String},
    descripcion: {type: String},
    precio: {type: Number},
    imagen: {type: String},
    cantidad: {type: Number}
})

module.exports = shopDB.model("producto", product)