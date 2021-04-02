const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSeries = Schema({
    movie_id: {
        type: Schema.Types.ObjectId,
        ref: 'Movie'
    },
    series_movie_id: String
},{
    timestamps: true
});

module.exports = mongoose.model("MovieSeries", movieSeries);