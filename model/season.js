var mongoose = require('mongoose');

const seasonSchema = mongoose.Schema(
	{
		tvSeriesId: { type: Number },
		tmdbId: { type: String },
		seasonNo: { type: Number },

		publishYear: { type: String },
		thumbnail: { type: String },
		poster: { type: Object },
		actorId: { type: String },
		aLanguage: { type: Object },
		subtitle: { type: Number },
		subtitleList: { type: Object },
		detail: { type: String },
		featured: { type: Number },
		//type: { type :},
		episodes: {},
		actorList: [ { type: Actor } ],
		directorList: [ { type: Director } ]
	},
	{ timestamps: true }
);

module.exports = mongoose.model('season', 'seasonSchema');