const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adSchema = Schema({
    ad_type: String,
    ad_image: String,
    ad_video: String,
    ad_url: String,
    ad_location: String,
    ad_target: String,
    ad_hold: Number,
    time : String,
    endtime: String,
},{timestamps: true});

module.exports = mongoose.Model("Ad", adSchema);