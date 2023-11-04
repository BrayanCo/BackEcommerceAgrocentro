const userModel = require("../models/user");
const jwt = require("jsonwebtoken");
const config = require("../config/config.json")

exports.login = async (req) => {
    const { userName, password } = req.body
    const user = await userModel.findOne({
        userName, password
    })
    if (!user) return { status: 400, data: { message: "Usuario y/o contraseña incorrecta" } }
    const token = jwt.sign({user}, config.secret, { expiresIn: "1h" })
    return { status: 200, data: { message: "se ha logueado exitosamente", token } }
}

exports.logup = async (req) => {
    const { userName, password, role } = req.body
    const user = await userModel.create({
        userName, password, role
    })
    if (!user) return { status: 400, data: { message: "Usuario no registrado, Intente de nuevo mas tarde" } }
    return { status: 200, data: { message: "Usuario Registrado Exitosamente", user } }
}
