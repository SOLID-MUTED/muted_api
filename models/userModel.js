const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    is_sub: Number,
}, { versionKey: false });

module.exports = mongoose.model("User", schema);
