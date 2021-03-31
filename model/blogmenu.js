const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogMenuSchema = Schema({
    menu_id: {
        type: Schema.Types.ObjectId,
        ref: 'Menu'
    },
    blog_id:{
        type: Schema.Types.ObjectId,
        ref: 'Blog'
    }
}, { timestamps: true});