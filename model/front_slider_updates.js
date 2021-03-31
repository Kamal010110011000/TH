const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const frontSliderSchema = Schema({
    item_show: Number,
    orderby: Number,
    sliderview: Boolean,
});

module.exports = mongoose.model("FrontSliderUpdates", frontSliderSchema);