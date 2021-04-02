const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const playerSettingSchema = Schema({
    logo: String,
    logo_enable: Boolean,
    cpy_text: String,
    share_opt: Boolean,
    auto_play: Boolean,
    speed: Boolean,
    thumbnail: Boolean,
    info_window: Boolean,
    skin: String,
    loop_video: Boolean,
    is_resume: Boolean,
    player_google_analytics_id: String,
    subtitle_font_size: Number,
    subtitle_color: String
},{timestamps: true});

module.exports = mongoose.model("PlayerSetting",playerSettingSchema);