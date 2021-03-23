const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const episodeSchema = Schema({
    seasonId:{type:Number},
    tmdbId: {type: String},
    thumbnail: {type: String},
    episodeNo: {type: Number},
    tmdb: {type: Schema.Types.ObjectId, ref:'Tmdb'},
    duration: Object,
    detail: String,
    aLanguage: Object,
    subtitle: Number,
    subtitleList: Object,
    subtitleFiles: Object,
    released: Date,
    type: {type: String,enum:['A', 'B']},
    videoLink: {type: Schema.Types.ObjectId, ref:'VideoLink'},
},
{
    timestamps: true,
});

module.exports = mongoose.model('Episode', episodeSchema);