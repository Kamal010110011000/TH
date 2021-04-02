const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const splashScreen = Schema({
    image: String,
    logo_enable: {type: Boolean, default: true},
    logo: String
},{ timestamps: true});

module.exports = mongoose.model("SplashScreen", splashScreen);