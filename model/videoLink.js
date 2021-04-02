var mongoose = require('mongoose');

const videoLinkSchema = mongoose.Schema(
	{
		movieId: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
		episodeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Episode' },
		type: String,
		uploadVideo: { type: Object },
		iFrameUrl: { type: String },
		readyUrl: { type: String },
		url360: { type: String },
		url480: { type: String },
		url720: { type: String },
		url1080: { type: String }
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Videolink', videoLinkSchema);
