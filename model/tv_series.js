const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tvSeriesSchema = Schema({
    keyword: String,
    description: String,
    title: String,
    tmbd_id: String,
    tmdb: String,
    fetch_by:String,
    thumbnail: String,
    poster: String,
    genre_id: {
        type: Schema.Types.ObjectId,
        ref: "Genre"
    },
    detail: String,
    reating: Number,
    episode_runtime: Number,
    maturity_rating: Number,
    featured: {type:Boolean, default: false},
    type: {type:String, default: 'T'},
    status: {type:Number, default: 1},
    created_by: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
},{ timestamps: true});

module.exports = mongoose.model("TVSeries", tvSeriesSchema);