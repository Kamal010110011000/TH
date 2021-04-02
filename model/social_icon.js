const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const socialIconSchema = Schema({
    url1: String,
    url2: String,
    url3: String,
},{timestamps: true});

module.exports = mongoose.model("SocialIcon", socialIconSchema);