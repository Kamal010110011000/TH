const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const packageSchema = Schema({
    plan_id: {
        type: Schema.Types.ObjectId,
        ref: "Plan"
    },
    name: String,
    currency: String,
    currency_symbol: String,
    amount: Number,
    interval: String,
    interval_count: Number,
    trial_period_days: String,
    status: Boolean,
    screens: {type:Number, default: 1},
    download: {type:Boolean, default: false},
    downloadlimit: Number,
    delete_status: {type:Number, default: 1}
}, {timestamps: true});

module.exports = mongoose.model("Package", packageSchema);