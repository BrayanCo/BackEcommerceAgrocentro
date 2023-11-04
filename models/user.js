const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { shopDB } = require("../connection");

const userTypes = ["admin", "user"]

const user = new Schema({
    userName: {
        type: String,
        maxlength: 100,
        unique: true,
    },
    password: {
        type: String,
        maxlength: 100,
    },
    role: {
        type: String,
        enum: userTypes,
        default: "user",
    }
})

module.exports = shopDB.model("user", user)