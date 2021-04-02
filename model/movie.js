const { boolean } = require('joi');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = Schema({
    tmbd_id: {
        type: Schema.Types.ObjectId,
        ref: 'TMDB'
    },
    title: {
        type: String,
    },
    slug: {
        type: String
    },
    keyword: String,
    description: String,
    duration: String,
    thumbnail: String,
    poster: String,
    tmdb: String,
    fetch_by: String,
    director_id:{
        type: Schema.Types.ObjectId,
        ref: 'Director'
    },
    actor_id: {
        type: Schema.Types.ObjectId,
        ref: 'Actor'
    },
    genre_id:{
        type: Schema.Types.ObjectId,
        ref: 'Genre'
    },
    trailer_url: String,
    detail: String,
    rating: Number,
    maturity_rating: String,
    subtitle: Boolean,
    publish_year:String,
    released: String,
    upload_video: String,
    featured: Boolean,
    series: Boolean,
    a_language: String,
    audio_file: String,
    type: String,
    live: Boolean,
    livetvicon: Boolean,
    status: Number,
    is_protect: Number,
    password: String,
    created_by:String
},{timesamps: true});

module.exports= mongoose.model("Movie", movieSchema)