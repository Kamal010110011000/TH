const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const actorMovieSchema = Schema({
    tmdbId:{type:Number},
    title: {type: String},
    keyword: {type: String},
    description: {type: String},
    duration: {type: String},
    thumbnail: {type: String},
    poster: {type: String},
    tmbd: {type: String},
    fetchBy: {type: String},
    directorId: {type: String},
    actorId: {type: String},
    genreId: {type: String},
    trailerUrl: {type: String},
    detail: {type: String},
    maturityRating: {type: String},
    type: {type: String},
    slug: {type: String},
    rating: {type: Number},
    subtitle: {type: Number},
    publishYear: {type: Number},
    released: {type: Date},
    uploadVideo: {type: Object},
    featured: Number,
    series: Number,
    aLanguage: Object,
    audioFiles: Object,
    live: Number,
    livetvicon: Object,
    status: Object,
    isProtect: Boolean,
    password: Object,
    createdBy: {type: Schema.Types.ObjectId, ref: "User"}
},
{
    timestamps: true,
});

module.exports = mongoose.model("ActorMovie", actorMovieSchema)