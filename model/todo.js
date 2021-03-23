var mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
	name: { type: String },
	path: { type: String },
	type: { type: String },
	movieId: { type: String },
	tvSeriesId: { type: String },
	seasonId: { type: String },
	episodeId: { type: String },
	dTaskId: { type: String },
	dUserId: { type: String },
	progress: { type: Number }
});

module.exports = mongoose.model('todo', 'todoSchema');
