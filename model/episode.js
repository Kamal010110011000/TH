const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const episodeSchema = Schema({
    seasonId:{type:Schema.Types.ObjectId, ref:'Season'},
    tmdbId: {type: String},
    thumbnail: {type: String},
    episodeNo: {type: Number},
    title: String,
    tmdb: String,
    duration: String,
    detail: String,
    aLanguage: Object,
    subtitle: Boolean,
    released: Date,
    type: {type: String, default: 'E'}
},
{
    timestamps: true,
});

module.exports = mongoose.model('Episode', episodeSchema);