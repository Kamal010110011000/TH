var mongoose = require('mongoose');

const Data = new mongoose.Schema({
	title: {
		type: String
	},
	data: {
		type: String
	},
	movie_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Movie'
	},
	tv_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'TV'
	},
	notifiable: {
		type: String
	},
	read_at: Date,
},{timestamps: true});

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
module.exports = mongoose.model('data', Data);
