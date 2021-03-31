const { boolean } = require('joi');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const homeBlockSchema = Schema({
    movie_id: {
        type: Schema.Types.ObjectId,
        ref: 'Movie',
    },
    tv_series_id: {
        type: Schema.Types.ObjectId,
        ref: 'TvSeries',
    },
    is_active: {
        type: Boolean,
    }
},{timestamps: true});

module.exports = mongoose.model("HomeBlock", homeBlockSchema);