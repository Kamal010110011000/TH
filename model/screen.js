var mongoose = require('mongoose');

const screenSchema = mongoose.Schema(
	{
		screen1: { type: String },
		screen2: { type: String },
		screen3: { type: String },
		screen4: { type: String },
		userId: { type: Number },
		screen1Used: { type: String },
		screen2Used: { type: String },
		screen3Used: { type: String },
		screen4Used: { type: String },
		deviceMac1: { type: String },
		deviceMac2: { type: String },
		deviceMac3: { type: String },
		deviceMac4: { type: String },
		download1: { type: Object },
		download2: { type: Object },
		download3: { type: Object },
		download4: { type: Object },
		pkgId: { type: Number }
	},
	{ timestamps: true }
);

module.exports = mongoose.model('screen', 'screenSchema');
