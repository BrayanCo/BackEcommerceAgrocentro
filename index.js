const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const bodyParse = require('body-parser');

app.set("port", 3000)
app.use(cors ({origin: "*"}))

app.use(bodyParse.json({limit:"1000mb"}))
app.use(bodyParse.urlencoded({limit:"1000mb" , extended: true}))
app.use("/shop/product", require("./routes/products_routes"))
app.use("/shop/user", require("./routes/users_routes"))


module.exports = app;