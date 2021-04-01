var mongoose = require('mongoose');

const sliderSchema = mongoose.Schema(
	{
		movieId: { type: String },
		tvSeriesId: { type: String },
		SlideImage: { type: String },
		active: { type: Number },
		position: { type: Number }
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Slider', sliderSchema);
