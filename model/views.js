const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const viewSchema = Schema({
    viewable_type: String,
    viewable_id: String,
    visitor: String,
    collection: String
},{ timestamps: true});

module.exports = mongoose.model("View", viewSchema);