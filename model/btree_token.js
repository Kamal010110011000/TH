const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//not Used
const bTreeTokenSchema = Schema({
    client:{type:String},
});

module.exports = mongoose.model('BTree', bTreeTokenSchema);