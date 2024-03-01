const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
    name:  String,
    Email: String,
    password: String
});

const User = mongoose.model("User", registrationSchema)

module.exports = User;