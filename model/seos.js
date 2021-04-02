const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const seosSchema = Schema({
    author: String,
    fb: String,
    google: String,
    metadata: String,
    description: String,
    keyword: String
},{timestamps: true})

module.exports = mongoose.model("Seos", seosSchema);