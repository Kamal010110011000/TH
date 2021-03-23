const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movietvSchema = Schema({
    data:[{type:Schema.Types.ObjectId, ref:'Datum'}],
    topMoviesTv: [{type: Schema.Types.ObjectId, ref:'TopMoviesTv'}],
});

module.exports = mongoose.model('MovieTv', movietvSchema);