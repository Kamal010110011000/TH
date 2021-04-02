var mongoose = require('mongoose');
var { Actor, Director } = require('./subdocuments');

const seasonSchema = mongoose.Schema(
	{
		tv_series_id: { type: mongoose.Schema.Types.ObjectId, ref: 'TVSeries' },
		tmdb_id: { type: String },
		season_no: { type: Number },
		season_slug: { type: String },
		tmbd:String,
		publich_year: String,
		thumbnail: { type: String },
		poster: { type: String },
		actor_id: { type: mongoose.Schema.Types.ObjectId, ref:'Actor' },
		aLanguage: { type: String },
		subtitle: { type: Number },
		subtitleList: { type: Object },
		detail: { type: String },
		featured: { type: Booelan },
		type: {type: String, default: 'S'},
		is_protect: { type: Number, default: 0},
		password: String,
		trailer_url: String,
		actorList: [ { type: mongoose.Schema.Types.ObjectId , ref: 'Actor'} ],
		directorList: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Director' } ]
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Season', seasonSchema);
