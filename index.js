const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const db = require('./config/config').get(process.env.NODE_ENV);

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

//router import
const actorMovieRouter = require('./router/actor_movie_detail');
const blogRouter = require('./router/blog');
const blockRouter = require('./router/block');
const appRouter = require('./router/app');
const adsenseRouter = require('./router/adsense');
const bTreeRouter = require('./router/btree_token');
const commentRouter = require('./router/comment');
const configRouter = require('./router/config');
const datumRouter = require('./router/datum');
const directorRouter = require('./router/director');
const episodeRouter = require('./router/episode');
const faqRouter = require('./router/faq');
const genreRouter = require('./router/genre');
const loginRouter = require('./router/login');
const menuRouter = require('./router/menu');
const movietvRouter = require('./router/movietv');
const notificationRouter = require('./router/notification');
const paymentDetailRouter = require('./router/paymentDetail');
const paypalRouter = require('./router/paypal');
const planRouter = require('./router/plan');
const progressDataRouter = require('./router/progressData');
const screenRouter = require('./router/screen');
const seasonRouter = require('./router/season');
const sliderRouter = require('./router/slider');
const subscriptionRouter = require('./router/subscription');
const taskInfoRouter = require('./router/taskInfo');
const todoRouter = require('./router/todo');
const topMovieTvRouter = require('./router/topMovieTv');
const userRouter = require('./router/user');
const userProfileRouter = require('./router/userProfile');
const videoLinkRouter = require('./router/videoLink');
const watchHistoryRouter = require('./router/watchHistory');
const wishListRouter = require('./router/wishList');

//routers
app.use('/api/actormovie/', actorMovieRouter);
app.use('/api/blog/', blogRouter);
app.use('/api/block/', blockRouter);
app.use('/api/app/', appRouter);
app.use('/api/adsense/', adsenseRouter);
app.use('/api/btree/', bTreeRouter);
app.use('/api/comment/', commentRouter);
app.use('/api/config/', configRouter);
app.use('/api/datum/', datumRouter);
app.use('/api/director/', directorRouter);
app.use('/api/episode/', episodeRouter);
app.use('/api/faq/', faqRouter);
app.use('/api/genre/', genreRouter);
app.use('/api/login/', loginRouter);
app.use('/api/menu/', menuRouter);
app.use('/api/movietv/', movietvRouter);
app.use('/api/notification/', notificationRouter);
app.use('/api/payment/', paymentDetailRouter);
app.use('/api/paypal/', paypalRouter);
app.use('/api/progress/', progressDataRouter);
app.use('/api/screen/', screenRouter);
app.use('/api/season/', seasonRouter);
app.use('/api/slider/', sliderRouter);
app.use('/api/subscription/', subscriptionRouter);
app.use('/api/task/', taskInfoRouter);
app.use('/api/topmovietv/', topMovieTvRouter);
app.use('/api/user/', userRouter);
app.use('/api/profile/', userProfileRouter);
app.use('/api/link/', videoLinkRouter);
app.use('/api/watchhistory/', watchHistoryRouter);
app.use('/api/wishlist/', wishListRouter);

// database connection
mongoose.Promise = global.Promise;
mongoose.connect(db.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true }, function(err) {
	if (err) console.log(err);
	console.log('database is connected');
});

app.listen(port, () => {
	console.log(`server is listening at port ${port}`);
});
