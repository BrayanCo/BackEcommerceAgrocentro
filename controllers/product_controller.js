const productModel = require("../models/products");

exports.create = async (req) => {
    const { nombre, descripcion, precio, imagen, cantidad } = req.body
    const product = await productModel.create({
        nombre, descripcion, precio, imagen, cantidad
    })
    if (!product) return { status: 400, data: { message: "Error al guardar el producto en la base de datos" } }
    return { status: 200, data: { message: "producto creado exitosamente", product } }
}

exports.get = async (req) => {
    const { id } = req.query
    const product = await productModel.findOne({
        _id: id
    })
    if (!product) return { status: 400, data: { message: "Error el producto no existe" } }
    return { status: 200, data: { message: "producto Encontrado Correctamente", product } }
}

exports.delete = async (req) => {
    const { id } = req.body
    const product = await productModel.findOneAndRemove({
        _id: id
    })
    if (!product) return { status: 400, data: { message: "El producto no puede ser borrado porque no existe" } }
    return { status: 200, data: { message: "producto eliminado exitosamente", product } }
}

exports.put = async (req) => {
    const { id, nombre, descripcion, precio, imagen, cantidad } = req.body
    const product = await productModel.findOne({
        _id: id
    })
    if (!product) return { status: 400, data: { message: "El producto no puede ser actualizado porque no existe" } }
    if (nombre) product.nombre = nombre
    if (descripcion) product.descripcion = descripcion
    if (precio) product.precio = precio
    if (imagen) product.imagen = imagen
    if (cantidad) product.cantidad = cantidad
    await product.save()
    return { status: 200, data: { message: "producto actualizado exitosamente", product } }
} 
