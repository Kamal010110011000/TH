const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const multipleLinksSchema = Schema({
    movie_id: {
        type: Schema.Types.ObjectId,
        ref: 'Movie',
    },
    episode_id: {
        type: Schema.Types.ObjectId,
        ref: 'Episode'
    },
    download: Boolean,
    quality: String,
    size: String,
    language: String,
    url: String,
    clicks: Number,
},{
    timestamps: true
});

module.exports = mongoose.model("MultipleLink", multipleLinksSchema);