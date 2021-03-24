var mongoose = require('mongoose');

const Movie = new mongoose.Schema(
	{
		tmdbId: { type: Number },
		title: { type: String },
		keyword: { type: String },
		description: { type: String },
		thumbnail: { type: String },
		poster: { type: String },
		tmdb: { type: String },
		fetchBy: { type: String },
		directorId: { type: String },
		actorId: { type: String },
		genereId: { type: String },
		trailerUrl: { type: String },
		detail: { type: String },
		rating: { type: Object },
		maturityRating: { type: String },
		subtitle: { type: Object },
		subtitleList: { type: Object },
		subtitleFiles: { type: Object },
		publishYear: { type: Object },
		released: { type: Date },
		uploadVideo: { type: Object },
		featured: { type: Object },
		series: { type: Object },
		aLanguage: { type: String },
		audioFiles: { type: Object },
		type: { type: String },
		live: { type: Object },
		status: { type: Object },
		createdBy: { type: Object },
		userRating: { type: Object }
	},
	{
		timestamps: true
	}
);

const SeasonDetail = new mongoose.Schema(
	{
		tvSeriesId: { type: Number },
		tmdbId: { type: String },
		seasonNo: { type: Number },
		publishYear: { type: String },
		thumbnail: { type: String },
		poster: { type: String },
		actorId: { type: String },
		aLanguage: { type: Object },
		subtitle: { type: Number },
		subtitleList: { type: Object },
		detail: { type: String },
		featured: { type: Number },
		type: { type: String }
	},
	{ timestamps: true }
);

const TvSeries = new mongoose.Schema(
	{
		keyword: { type: String },
		tmdbId: { type: String },
		description: { type: String },
		title: { type: String },
		tmdb: { type: String },
		fetchBy: { type: String },
		thumbnail: { type: String },
		poster: { type: String },
		genereId: { type: String },
		detail: { type: String },
		rating: { type: Object },
		episodeRuntime: { type: Object },
		maturityRating: { type: String },
		directorId: { type: String },
		actorId: { type: String },
		featured: { type: Number },
		type: { type: String },
		status: { type: Number },
		createdBy: { type: Number },
		userRating: { type: Number },
		season: [ { type: SeasonDetail } ]
	},
	{ timestamps: true }
);

const watchHistoruSchema = mongoose.Schema(
	{
		movieId: { type: Number },
		tvId: { type: Number },
		userId: { type: Number },
		tvSeries: { type: TvSeries },
		movies: { type: Movie }
	},
	{ timestamps: true }
);

module.exports = mongoose.model('watchistory', watchHistoruSchema);
module.exports = mongoose.model('movie', Movie);
module.exports = mongoose.model('tvseries', TvSeries);
module.exports = mongoose.model('seasondetail', SeasonDetail);
