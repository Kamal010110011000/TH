const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userRatingSchema = Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    tv_id:{
        type: Schema.Types.ObjectId,
        ref: 'TVSeries'
    },
    movie_id:{
        type: Schema.Types.ObjectId,
        ref: 'Movie'
    },
    rating: Number,
},{timestamps: true});

module.exports = mongoose.model("UserRating", userRatingSchema);