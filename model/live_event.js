const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const liveEventSchema = Schema({
    title: String,
    slug: String,
    description: String,
    type: String,
    iframeurl: String,
    ready_url: String,
    startTime: Date,
    endTime: Date,
    status: Boolean,
    thumbnail: String,
    poster: String,
    organized_by: String
},{timestamps: true});

module.exports = mongoose.model("LiveEvent", liveEventSchema);
