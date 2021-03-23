var mongoose = require('mongoose');

const progressSchema = mongoose.Schema({
	dTasakId: { type: String },
	progress: { type: Number }
});

module.exports = mongoose.model('progressData', progressSchema);
