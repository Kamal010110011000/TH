const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sessionSchema = Schema({
    user_id: {type: Schema.Types.ObjectId, ref: 'User'},
    ip_address: String,
    user_agent: String,
    payload: String,
    last_activity: Number,
});

module.exports = mongoose.model("Session", sessionSchema);