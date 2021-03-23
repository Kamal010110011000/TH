const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = Schema({
    userId:{type: Schema.Types.ObjectId},
    title: {type: String},
    image: {type: String},
    slug: {type: String},
    detail: {type: String},
    isActive: {type: Boolean},
    comments: [{type:Schema.Types.ObjectId, ref:'Comment'}]
},
{
    timestamps: true,
});

module.exports = mongoose.model('Blog', blogSchema);