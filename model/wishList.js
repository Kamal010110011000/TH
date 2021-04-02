var mongoose = require('mongoose');

const wishSchema = mongoose.Schema(
	{
		userid: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
		movieId: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
		seasonId: { type: mongoose.Schema.Types.ObjectId, ref: 'Season' },
		added: { type: Booelan, default: false }
	},
	{ timestamps: true }
);

module.exports = mongoose.model('wishlist', wishSchema);
