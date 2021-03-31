const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customPagesSchema = Schema({
    title: String,
    slug: String,
    in_show_menu: Boolean,
    details: String, 
    is_active: Boolean,
},{timestamps: true});

module.exports = mongoose.model("CustomPage", customPagesSchema);