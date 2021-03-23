var mongoose = require('mongoose');

const paymentDetailsSchema = mongoose.Schema({
	key: { type: String },
	pass: { type: String },
	paystack: { type: String },
	razorkey: { type: String },
	paytmkey: { type: String },
	paytmpass: { type: String }
});

module.exports = mongoose.model('paymentdetail', 'paymentDetailsSchema');
