const { boolean } = require('joi');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const landingPageSchema = Schema({
    image: String,
    heading: String,
    detail: String,
    button: Boolean,
    button_text: String,
    button_link: String,
    left:{
        type: Boolean,
        default: true,
    },
    position: Number,
}, {timestamps: true});

module.exports = mongoose.model("LandingPage", landingPageSchema);