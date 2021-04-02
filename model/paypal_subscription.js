const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const paypalSubscriptionSchema = Schema({
    user_id:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    payment_id:{
        type:Schema.Types.ObjectId,
        ref: "Payment"
    },
    user_name: String,
    package_id: {
        type: Schema.Types.ObjectId,
        ref: "Package"
    },
    price: Number,
    status: Boolean,
    method: String,
    subscription_from: Date,
    subscription_to: Date,
}, {timestamps: true})

module.exports = mongoose.model("PayaplSubscription", paypalSubscriptionSchema);