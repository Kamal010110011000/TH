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
	password: {type: String},
	verifyToken: { type: Object },
	status: { type: Number },
	googleId: { type: String, default: null,unique: false },
	facebookId: { type: String, default: null ,unique: false},
	gitlabId: { type: String, default: null ,unique: false},
	dob: { type: Date },
	age: { type: Number, default: 0 },
	mobile: { type: Object },
	braintreeId: { type: String , default: null,unique: false},
	code: { type: String },
	stripeId: { type: String , default: null,unique: false},
	cardBrand: { type: String },
	cardLastFour: { type: String },
	trailEndsAt: { type: String },
	isAdmin: { type: Boolean },
	isAssistant: { type: Boolean, default: false },
	isBlocked: { type: Boolean, default: false },
	remember_token: String,
	amazon_id: String,
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

const userModel = mongoose.model('User', User);
const userProfileModel = mongoose.model('userProfile', userProfile);
const paypalModel = mongoose.model('paypal', Paypal);
const subscriptionModel = mongoose.model('subscription', Subscription);
const itemModel= mongoose.model('item', Item);

module.exports = {
	User: userModel,
	UserProfile: userProfileModel,
	PayPal: paypalModel,
	Subscription: subscriptionModel,
	Item: itemModel,
}
