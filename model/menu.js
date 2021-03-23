const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const menuSchema = Schema({
    name:{type:String},
    slug: {type:String},
    position: {type: String},
},{timestamps: true});

module.exports = mongoose.model('Menu', menuSchema);