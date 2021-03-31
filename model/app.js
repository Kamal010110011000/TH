const mongoose = require('mongoose');

//Extra
const Schema = mongoose.Schema;


//auth_customize
const LoginImg = new Schema({
    id: Schema.Types.ObjectId,
    image: String,
    detail: String,
},{timestamps: true});

const appSchema = Schema({
    loginImg:{type:LoginImg},
    config: {type: Schema.Types.ObjectId, ref:'Config'},
    plans: [{type: Schema.Types.ObjectId, ref:'Plan'}],
    blocks: [{type: Schema.Types.ObjectId, ref:'Block'}],
    adsense: {type: Schema.Types.ObjectId, ref:'Adsense'},
    blogs: [{type: Schema.Types.ObjectId, ref:'Blog'}],
});

module.exports = mongoose.model('App', appSchema);