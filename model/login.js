const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const loginSchema = Schema({
    tokenType:{type:String},
    expiresIn: {type: Number},
    accessToken: {type: String},
    rereshToken: {type: String},
},
{
    timestamps: true,
});

module.exports = mongoose.model('Login', loginSchema);