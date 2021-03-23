var mongoose = require('mongoose');

const taskInfoSchema = mongoose.Schema(
	{
		name: { type: String },
		ifLink: { type: String },
		hdLink: { type: String },
		link360: { type: String },
		link480: { type: String },
		link720: { type: String },
		link1080: { type: String },
		eIndex: { type: Number },
		taskId: { type: String },
		progress: { type: Number, default: 0 },
		status: { type: Boolean, default: false }
	},
	{ timestamps: true }
);

module.exports = mongoose.model('taskinfo', taskInfoSchema);
