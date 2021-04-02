const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const packageMenuSchema = Schema({
    menu_id: {
        type: Schema.Types.ObjectId,
        ref: 'Menu'
    },
    package_id: {
        type: Schema.Types.ObjectId,
        ref: 'Package'
    },
    pkg_id: String

},{timestamps: true});

module.exports = mongoose.model("PackageMenu", packageMenuSchema);