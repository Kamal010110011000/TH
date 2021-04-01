const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const menuVideos = Schema({
    menu_id:{
        type: Schema.Types.ObjectId,
        ref: 'Menu'
    },
    movie_id:{
        type: Schema.Types.ObjectId,
        ref: 'Movie'
    },
    tv_series_id: {
        type: Schema.Types.ObjectId,
        ref: 'TVSeries'
    },
    live_event_id:{
        type: Schema.Types.ObjectId,
        ref: 'LiveEvent'
    },
    audio_id:{
        type: Schema.Types.ObjectId,
        ref: 'Audio'
    }
},{timestamps: true});

module.exports = mongoose.model("MenuVideos", menuVideos);