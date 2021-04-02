const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const appSliderSchema = Schema({
    movie_id: { type: Schema.Types.ObjectId, ref: 'Movie'},
    tv_series_id: { type: Schema.Types.ObjectId, ref: 'TVSeries'},
    slide_image: String,
    active: Boolean,
    position: Number
}, {timestamps: true});

module.exports = mongoose.model("AppSlider", appSliderSchema);