const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const homeSliderSchema = Schema({
    movie_id: {
        type: Schema.Types.ObjectId,
        ref: 'Movie'
    },
    tv_series_id: {
        type: Schema.Types.ObjectId,
        ref: 'TvSeries',
    },
    slide_image: String,
    active: Boolean,
    position: Number,
},{timestamps: true});

module.exports = mongoose.model("HomeSlider", homeSliderSchema);