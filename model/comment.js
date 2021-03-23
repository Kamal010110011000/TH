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
    email: {type: String},
    movieId: {type: Schema.Types.ObjectId, ref:'Movie'},
    tvSeriesId: {type: Schema.Types.ObjectId, ref:''},
    comment: {type: String, required: true},
    subComment: [{type: SubComment}]
},
{
    timestamps: true,
});

module.exports = mongoose.model('Comment', commentSchema);