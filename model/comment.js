const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SubComment = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
    commentId: {type: Schema.Types.ObjectId, ref: 'Comment'},
    reply: {type: String, required: true},
},
{timestamps:true})

const commentSchema = Schema({
    name:{type:String},
    user_id:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    email: {type: String},
    movieId: {type: Schema.Types.ObjectId, ref:'Movie'},
    blogId: {type: Schema.Types.ObjectId, ref:'Blog'},
    comment: {type: String, required: true},
    subComment: [{type: SubComment}]
},
{
    timestamps: true,
});

module.exports = mongoose.model('Comment', commentSchema);