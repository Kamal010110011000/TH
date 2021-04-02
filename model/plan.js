var mongoose = require('mongoose');

const planSchema = mongoose.Schema(
	{
		name: { type: String },
		image: String,
		email: String,
		password: String,
		plan: String,
		dob: Date,
		mobile: String,
		stripe_id: String,
		card_brand: String,
		card_last_four: String,
		trial_ends_at: Date,
		is_admin: {type:Boolean, default: false},
		remember_token: String
	},
	{ timestamps: true }
);

module.exports = mongoose.model('plan', planSchema);
