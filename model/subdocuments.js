const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//in use
const Actor =new Schema({
    name:{type:String},
    image: {type: String},
    biography: {type: String},
    placeOfBirth: {type: String},
    dob: {type: Date},
},
{
    timestamps: true,
});

//in use
const Director = new Schema({
    name: String,
    image: String,
    biography: String,
    placeOfBirth: String,
    dob: Date,
},{timestamps: true});

const Auth = new Schema({
    name:String,
    image:Object,
    email:String,
    verifyToken: Object,
    status: Number,
    googleId: Object,
    facebookId: Object,
    gitlabId: Object,
    dob: Date,
    age: Number,
    mobile: Object,
    braintreeId: Object,
    code: Object,
    stripeId: Object,
    cardBrand: Object,
    cardLastFour: Object,
    trialEndsAt: Object,
    isAdmin: Number,
    isAssistant: Number,
    isBlocked: Number,
}, {timestamps: true});

const HomeTranslation = new Schema({
    key: String,
    value: String,
    status: Number,
},{timestamps: true});

const Genre = new Schema({
    name: String,
},{timestamps: true});

const Audio = new Schema({
    language: String,
    name: String,
},{timestamps: true});



module.exports = {Actor,Director,Auth, Genre,HomeTranslation, Audio}