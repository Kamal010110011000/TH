const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reminderMailsSchema = Schema({
    user_id: {type: Schema.Types.ObjectId, ref: 'User'},
    subscription_id: String,
    today: Number,
    before_7day: Number,
    after_7day: Number,
});

module.exports = mongoose.model("ReminderMail", reminderMailsSchema);