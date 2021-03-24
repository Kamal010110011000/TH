var mongoose = require('mongoose');

const Item = new mongoose.Schema(
	{
		subscriptionId: { type: Number },
		stripeId: { type: String },
		stripePlan: { type: String, enum: [] },
		quantity: { type: Number }
	},
	{ timestamps: true }
);

const Subscription = new mongoose.Schema(
	{
		userId: { type: Number },
		name: { type: String },
		stripeId: { type: String },
		stripePlan: { type: String },
		quantity: { type: Number },
		trailEndsAt: { type: Object },
		endsAt: { type: Object },
		subscriptionFrom: { type: Object },
		subscriptionTo: { type: Object },
		amount: { type: Object },
		stripeStatus: { type: Object },
		items: { type: Item }
	},
	{ timestamps: true }
);

const Paypal = new mongoose.Schema(
	{
		userId: { type: Number },
		paymentId: { type: String },
		userName: { type: String },
		packageId: { type: Number },
		price: { type: Number },
		status: { type: Number },
		subscriptionFrom: { type: Date },
		subscriptionTo: { type: Date },
		plan: { type: String, enum: [] }
	},
	{ timestamps: true }
);

const User = new mongoose.Schema({
	name: { type: String },
	image: { type: Object },
	email: { type: String },
	verifyToken: { type: Object },
	status: { type: Number },
	googleId: { type: Object },
	facebookId: { type: Object },
	gitlabId: { type: Object },
	dob: { type: Object },
	age: { type: Number },
	mobile: { type: Object },
	braintreeId: { type: Object },
	code: { type: Object },
	stripeId: { type: Object },
	cardBrand: { type: String },
	cardLastFour: { type: String },
	trailEndsAt: { type: String },
	isAdmin: { type: Number },
	isAssistant: { type: Number },
	isBlocked: { type: Number },
	subscription: [ { type: Subscription } ]
});

const userProfile = new mongoose.Schema({
	code: { type: String },
	user: { type: User },
	paypal: [ { type: Paypal } ],
	currentDate: { type: Date },
	payment: { type: String },
	id: { type: Number },
	currentSubscription: { type: String },
	payid: { type: String },
	start: { type: Date },
	end: { type: Date },
	active: { type: Object },
	screen: { type: Object },
	limit: { type: Object }
});

module.exports = mongoose.model('user', User);
module.exports = mongoose.model('userProfile', userProfile);
module.exports = mongoose.model('paypal', Paypal);
module.exports = mongoose.model('subscription', Subscription);
module.exports = mongoose.model('item', Item);
