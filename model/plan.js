var mongoose = require('mongoose');

const planSchema = mongoose.Schema(
	{
		planId: { type: String },
		name: { type: String },
		currency: { type: String },
		currency: { typoe: String },
		currencySymbol: { type: String },
		amount: { type: Number },
		interval: { type: String },
		intervalCount: { type: Number },
		trailPeriodDays: { type: Object },
		status: { type: Number },
		screens: { tupe: Number },
		download: { type: Number },
		downloadLimit: { type: Number },
		downloadStatus: { type: Number },
		pricingTexts: { type: Object }
	},
	{ timestamps: true }
);

module.exports = mongoose.module('plan', planSchema);
