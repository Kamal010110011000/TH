const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSubcomments = Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    comment_id: {
        type: Schema.Types.ObjectId,
        ref: 'MovieComment'
    },
    reply: {
        type: String
    }
},{timestamps: true});

module.exports = mongoose.model("MovieSubcomments", movieSubcomments);