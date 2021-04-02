const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const appConfigSchema = Schema({
    logo: String,
    title: String,
    stripe_payment: {type:Boolean, default: false},
    paypal_payment: {type:Boolean, default: false},
    razorpay_payment: {type:Boolean, default: false},
    brainetree_payment: {type:Boolean, default: false},
    bankdetails: {type:Boolean, default: false},
    fb_check: {type:Boolean, default: false},
    google_login: {type:Boolean, default: false},
    amazon_lab_check: {type:Boolean, default: false},
    git_lab_check: {type:Boolean, default: false},
    ADMOB_APP_KEY: String,
    banner_abomb: {type:Boolean, default: false},
    banner_id: String,
    interstitial_abomb: {type:Boolean, default: false},
    interstitial_id: String,
    rewarded_admob: {type:Boolean, default: false},
    rewarded_id: String,
    native_abomb: {type:Boolean, default: false},
    native_id: String,
},{ timestamps: true});

module.exports = mongoose.model("AppConfigs", appConfigSchema)