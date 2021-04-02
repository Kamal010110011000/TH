const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieComment = Schema({
    name: String,
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    email: String,
    movie_id: {
        type: Schema.Types.ObjectId,
        ref: 'Movie'
    },
    tv_series: {
        type: Schema.Types.ObjectId,
        ref: 'TVSeries'
    },
    comment: String,
}, {timestamps: true});

module.exports = mongoose.model("MovieComment", movieComment);