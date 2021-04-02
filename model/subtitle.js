const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const subtitleSchema = Schema({
    sub_lang: String,
    sub_t: String,
    m_t_id: String,
    ep_id: String,
},{timestamps: true});

module.exports = mongoose.model("Subtitle", subtitleSchema);