const express = require('express');
const api = express.Router();
const user_controller = require("../controllers/user_controller")

api.post("/login", async (req, res) =>{
    let response = await user_controller.login(req);
    if(response.status != 200) console.error(response)
    return res.status(response.status).send(response.data);
})
api.post("/logup", async (req, res) =>{
    let response = await user_controller.logup(req);
    if(response.status != 200) console.error(response)
    return res.status(response.status).send(response.data);
})

module.exports = api;