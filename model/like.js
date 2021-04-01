const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const likeSchema = Schema({
    user_id:{
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    blog_id: {
        type: Schema.Types.ObjectId,
        ref: 'Blog'
    }
},{timestamps: true});

module.exports = mongoose.model("Like", likeSchema);