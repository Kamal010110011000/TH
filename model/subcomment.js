const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const subCommentSchema = Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    blog_id: {
        type: Schema.Types.ObjectId,
        ref: 'Blog'
    },
    comment_id:{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    },
    reply: String,
},{timestamps: true});

module.exports = mongoose.model("SubComment", subCommentSchema);