const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//in use
const directorSchema = new Schema({
    name: String,
    image: String,
    biography: String,
    placeOfBirth: String,
    dob: Date,
},{timestamps: true});

module.exports = mongoose.model('Director', directorSchema);