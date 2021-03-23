const express = require('express');
const mongoose = require('mongoose');
const bodyparser=require('body-parser');
const db = require('./config/config').get(process.env.NODE_ENV);


const app = express();
const port = process.env.PORT || 4000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : false}));

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



// database connection
mongoose.Promise = global.Promise;
mongoose.connect(db.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true }, function(err) {
	if (err) console.log(err);
	console.log('database is connected');
});



app.listen(port, () =>{
    console.log(`server is listening at port ${port}`);
})