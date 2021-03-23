const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var MovieSery = new Schema({
    movieId: Number,
    seriesMovieId: String,
}, {timestamps: true})

const datumSchema = Schema({
    tmdbId:{type:Number},
    title: {type: String},
    keyword: {type: String},
    description: {type: String},
    duration: {type: String},
    thumbnail: {type: String},
    poster: {type: String},
    tmbd: {type: Object},
    fetchBy: {type: Object},
    directorId: {type: String},
    actorId: {type: String},
    genreId: {type: String},
    trailerUrl: {type: String},
    detail: {type: String},
    maturityRating: {type: String},
    subtitleList: {type: Object},
    subtitleFile: {type: Object},
    rating: {type: Number},
    subtitle: {type: Number},
    publishYear: {type: Number},
    released: {type: Date},
    uploadVideo: {type: Object},
    featured: Number,
    series: Number,
    aLanguage: String,
    audioFiles: Object,
    live: Number,
    status: Object,
    userRating: Object,
    episodeRuntime: Object,
    videoLink: {type: Schema.Types.ObjectId, ref: "VideoLink"},
    createdBy: {type: Schema.Types.ObjectId, ref: "User"},
    movieSeries: [{type:MovieSery}],
    comments: [{type: Schema.Types.ObjectId, ref: "Comment"}],
    seasons: [{type: Schema.Types.ObjectId, ref: "Season"}],
    genre: [{type: String}],
    genres: [{type: String}],
    directors: [{type: Schema.Types.ObjectId, ref: "Director"}],
    actors: [{type: Schema.Types.ObjectId, ref: "Actor"}],
    audios : [{type: String}],
    actor: [{type: String}],
},
{
    timestamps: true,
});

module.exports = mongoose.model("Datum", datumSchema)