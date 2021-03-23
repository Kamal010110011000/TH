var mongoose = require('mongoose');

const topMoviesTvSchema = mongoose.Schema(
	{
		movieId: { type: Number },
		tvSeriesId: { type: Number },
		isActive: { type: Number }
	},
	{ timestamps: true }
);

module.exports = mongoose.model('topMoviesTv', topMoviesTvSchema);
