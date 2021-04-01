const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const menuSection = Schema({
    menu_id: {
        type: Schema.Types.ObjectId,
        ref: 'Menu'
    },
    section_id: String,
    item_limit: Number,
    view: Number,
    order: Number,
});

module.exports = mongoose.model("MenuSection", menuSection);