const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//in use
const ActorSchema =new Schema({
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
const DirectorSchema = new Schema({
    name: String,
    image: String,
    biography: String,
    placeOfBirth: String,
    dob: Date,
},{timestamps: true});

const AuthSchema = new Schema({
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

const HomeTranslationSchema = new Schema({
    key: String,
    value: String,
    status: Number,
},{timestamps: true});

const GenreSchema = new Schema({
    name: String,
},{timestamps: true});

const AudioSchema = new Schema({
    language: String,
    name: String,
},{timestamps: true});

const Actor = mongoose.model("Actor", ActorSchema);

module.exports = {
    Actor:Actor,
    Director:DirectorSchema,
    Auth: AuthSchema, 
    Genre: GenreSchema,
    HomeTranslation: HomeTranslationSchema,
    Audio: AudioSchema}