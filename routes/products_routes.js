const express = require('express');
const api = express.Router();
const product_controller = require("../controllers/product_controller");
const { auth } = require('../middlewares/auth');

api.post("/", [auth], async (req, res) =>{
    let response = await product_controller.create(req);
    if(response.status != 200) console.error(response)
    return res.status(response.status).send(response.data);
})
api.get("/", [auth], async (req, res) =>{
    let response = await product_controller.get(req);
    if(response.status != 200) console.error(response)
    return res.status(response.status).send(response.data);
})
api.put("/", [auth], async (req, res) =>{
    let response = await product_controller.put(req);
    if(response.status != 200) console.error(response)
    return res.status(response.status).send(response.data);
})
api.delete("/", [auth], async (req, res) =>{
    let response = await product_controller.delete(req);
    if(response.status != 200) console.error(response)
    return res.status(response.status).send(response.data);
})

module.exports = api;