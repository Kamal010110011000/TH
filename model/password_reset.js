const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const passwordResetSchema = Schema({
    email: String,
    token: String,
},{timestamps: true});
module.exports = mongoose.model("PasswordReset", passwordResetSchema)