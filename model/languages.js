const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const languageSchema = Schema({
    local: String,
    name: String,
    def: Boolean,
},{timestamps: true});

module.exports = mongoose.model("Language", languageSchema);