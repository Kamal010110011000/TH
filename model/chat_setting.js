const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const chatSettingSchema = Schema({
    key: String,
    enable_messanger: {type: Boolean, default: false},
    script: String,
    mobile: String,
    text: String,
    header: String,
    color: String,
    size: Number,
    enable_whatsapp: {type: Boolean, default: false},
    position: { type: Boolean, default: false},
}, {timestamps: true});

module.exports = mongoose.model("ChatSetting", chatSettingSchema);