const mongoose = require('mongoose');
const {Actor,Auth,Audio,Director,Genre} = require('./subdocuments');

const Schema = mongoose.Schema;

const genreSchema = Schema({
    auth:{type:Auth},
    actor: [{type: Actor}],
    director: [{type: Director}],
    audio: [{type: Audio}],
    genre: {type: Genre},
    subtitles: [{type: Object}],
},
{
    timestamps: true,
});

module.exports = mongoose.model('Genre', genreSchema);