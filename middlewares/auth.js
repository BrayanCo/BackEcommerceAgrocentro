const jwt = require("jsonwebtoken")
const config = require("../config/config.json")

exports.auth = async (req, res, next) => {

    const token = (req.headers.authorization ?? " ").split(" ")[1]
    if (!token) return res.status(401).send("Token no existe")
    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) return res.status(401).send("Acceso no autorizado") 
        req.payload = decoded
        next()
    })

}