var mongoose = require('mongoose');

const wishSchema = mongoose.Schema(
	{
		userid: { type: Number },
		movieId: { type: Number },
		seasonId: { type: Object },
		added: { type: Number }
	},
	{ timestamps: true }
);

module.exports = mongoose.model('wishlist', wishSchema);
