const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const genreSchema = Schema({
    name: String,
    position: String,
},
{
    timestamps: true,
});

module.exports = mongoose.model('Genre', genreSchema);