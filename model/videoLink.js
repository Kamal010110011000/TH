var mongoose = require('mongoose');

const videoLinkSchema = mongoose.Schema(
	{
		movieId: { type: Number },
		episodeId: { type: Number },
		uploadVideo: { type: Object },
		iFrameUrl: { type: String },
		readyUrl: { type: String },
		url360: { type: Object },
		url480: { type: Object },
		url720: { type: Object },
		url1080: { type: Object }
	},
	{ timestamps: true }
);

module.exports = mongoose.model('videolink', videoLinkSchema);
