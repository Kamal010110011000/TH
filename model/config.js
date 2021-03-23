const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const configSchema = Schema({
    logo:{type:String},
    favicon: {type: String},
    title: {type: String},
    wEmail: {type: String},
    stripePubKey: {type: String},
    stripeSecretKey: {type: String},
    paypalMarEmail: {type: String},
    currencyCode: {type: String},
    currencySymbol: {type: String},
    invoiceAdd: {type: String},
    termCondition: {type: String},
    privacyPol: {type: String},
    refundPol: {type: String},
    copyright: {type: String},
    accountNo: {type: String},
    ifscCode: {type: String},
    bankName: {type: String},
    playstore: {type: String},
    appstore: {type: String},
    color: {type: String},
    aws: {type: Number},
    coinpay: {type: Number},
    removeLandingPage: {type: Number},
    paystack: {type: Number},
    braintree: {type: Number},
    comments: Number,
    userRating: Number,
    colorDark: Number,
    isAppstore: Boolean,
    isPlayStore: Boolean,
    blog: Number,
    welEml: Number,
    googleLogin: Number,
    gitlabLogin: Number,
    fbLogin: Number,
    preloder: Number,
    paytmTest: Number,
    paytmPaument: Number,
    bankdetails: Number,
    payuPayment: Number,
    ageRestriction: Number,
    razorpayPayment: Number,
    paypalPayment: Number,
    stripePayment: Number,
    primeMovieSingle: Number,
    primeFooter: Number,
    donation: Number,
    primeGenreSlider: Number,
    withlogin: Number,
    catlog: Number,
    primeMainSlider: Number,
    freeDays: Number,
    freeSub: Number,
    download: Number,
    verifyEmail: Number,
},
{
    timestamps: true,
});

module.exports = mongoose.model("Config", configSchema)