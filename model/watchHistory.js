var mongoose = require('mongoose');

const watchHistoruSchema = mongoose.Schema(
	{
		movieId: { type: Number },
		tvId: { type: Number },
		userId: { type: Number },
		tvSeries: { type: TvSeries },
		movies: { type: Movies }
	},
	{ timestamps: true }
);

module.exports = mongoose.model('watchistory', watchHistoruSchema);
