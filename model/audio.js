const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const audioSchema = Schema({
    title: String,
    slug: {
        type: String,
    },
    keyword:String,
    description: String,
    thumbnail: String,
    poster: String,
    rating: Number,
    maturity_ration: String,
    upload_audio: String,
    type: String,
    genre_id: {
        type: Schema.Types.ObjectId,
        ref: 'Genre'
    },
    detail: String,
    is_protect: Boolean,
    password: String,
    audiourl: String,
    featured: Boolean,
    status: Boolean,
},{timestamps: true});

module.exports = mongoose.model("Audio", audioSchema)