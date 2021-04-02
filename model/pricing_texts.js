const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pricingTextSchema = Schema({
    package_id:{
        type: Schema.Types.ObjectId,
        ref: 'Package'
    },
    title1: String,
    title2: String,
    title3: String,
    title4: String,
    title5: String,
    title6: String,
},{timestamps: true});

module.exports = mongoose.model("PricingText", pricingTextSchema);