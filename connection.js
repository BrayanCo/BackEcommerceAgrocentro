const mongoose = require("mongoose");
const config = require("./config/config.json")

const shopDB = mongoose.createConnection(config.dataBase.connection, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = {shopDB};