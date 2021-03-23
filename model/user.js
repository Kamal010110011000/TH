var mongoose = require('mongoose');

const Subscription = new Schema(
	{
		userId: { type: Number },
		name: { type: String },
		stripeId: { type: String },
		stripePlan: { type: StripePlan },
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

const Item = new Schema(
	{
		subscriptionId: { type: Number },
		stripeId: { type: String },
		stripePlan: { type: String, enum: [] },
		quantity: { type: Number }
	},
	{ timestamps: true }
);

const userProfile = new Schema({
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

const Paypal = new Schema(
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

const userSchema = mongoose.Schema({
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

module.exports = mongoose.model('user', userSchema);
module.exports = mongoose.model('userProfile', userProfile);
module.exports = mongoose.model('paypal', Paypal);
module.exports = mongoose.model('subscription', Subscription);
module.exports = mongoose.model('item', Item);
