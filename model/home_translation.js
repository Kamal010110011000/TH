const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const homeTranslationSchema = Schema({
    key:String,
    value: String,
    status: String,
},{ timestamps: true});

module.exports = mongoose.model("HomeTranslation", homeTranslationSchema)