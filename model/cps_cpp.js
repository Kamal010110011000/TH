const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cpsCppSchema = Scheam({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    expire: {
        type: Number,
    },
    info: String,
    plan: String,
},{ _id: false});

module.exports = mongoose.Model("CpsCpp", cpsCppSchema);