const config = {
	production: {
		DATABASE: process.env.MONGODB_URI
	},
	default: {
		DATABASE: 'mongodb+srv://talent:kamal1234@cluster0.walu6.mongodb.net/thdb?retryWrites=true&w=majority'
	}
};

exports.get = function get(env) {
	return config[env] || config.default;
};
