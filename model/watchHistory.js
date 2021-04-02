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

const watchHistoruSchema = mongoose.Schema(
	{
		movieId: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
		tvSeries: { type: mongoose.Schema.Types.ObjectId, ref: 'TVSeries' },
		userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
		tvId: { type: String }
	},
	{ timestamps: true }
);

const watchHistoryModel = mongoose.model('watchistory', watchHistoruSchema);
const movieModel = mongoose.model('movie', Movie);
const seasondetailModel = mongoose.model('seasondetail', SeasonDetail);

module.exports = {watchHistory: watchHistoryModel, Movie: movieModel, SeasonDetail: seasondetailModel};


