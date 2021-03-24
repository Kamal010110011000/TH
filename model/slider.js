var mongoose = require('mongoose');

const sliderSchema = mongoose.Schema(
	{
		movieId: { type: Number },
		tvSeriesId: { type: Object },
		SlideImage: { type: String },
		active: { type: Number },
		position: { type: Number }
	},
	{ timestamps: true }
);

module.exports = mongoose.model('slider', sliderSchema);
