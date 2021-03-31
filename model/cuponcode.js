const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cuponCodeSchema = Schema({
    cupon_code: String,
    percent_off: Number,
    currency: String,
    amount_off: Number,
    duration: String,
    max_redemptions: String,
    redem_by: Date,
}, { timestamps: true});

module.exports = mongoose.model("CuponCode", cuponCodeSchema);