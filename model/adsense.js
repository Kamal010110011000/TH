const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adsenseSchema = Schema({
    code:{type:String},
    status: {type: Number},
    ishome: {type: Number},
    isviewall: {type: Number},
    issearch: {type: Number},
    iswishlist: {type: Number},
},
{
    timestamps: true,
});

module.exports = mongoose.model('Adsense', adsenseSchema);