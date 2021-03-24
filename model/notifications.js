var mongoose = require('mongoose');

const Data = new mongoose.Schema({
	title: {
		type: String
	},
	data: {
		type: String
	},
	movieId: {
		type: String
	},
	tvId: {
		type: String
	},
	notifiableId: {
		type: String
	}
});

const notificationSchema = mongoose.Schema(
	{
		type: {
			type: String
		},
		notifiableId: {
			type: String
		},
		notifiableType: {
			type: String
		},
		title: {
			type: String
		},
		data: { type: Data },
		movieId: {
			type: Number
		},
		tvId: {
			type: Number
		},
		readAt: {
			type: Object
		}
	},
	{ timestamps: true }
);

module.exports = mongoose.model('notification', notificationSchema);
