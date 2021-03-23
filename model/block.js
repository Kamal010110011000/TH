const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blockSchema = Schema({
    image:{type:String},
    heading: {type: String},
    detail: {type: String},
    button: {type: Number},
    buttonText: {type: String},
    buttonLink: {type: String},
    left: {type: Number},
    position: {type: Number},
},
{
    timestamps: true,
});

module.exports = mongoose.model('Block', blockSchema);