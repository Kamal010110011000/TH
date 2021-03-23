const express = require('express');
const ActorMovies = require('../model/actor_movie_detail');
const router = express.Router();

//create
router.post("/", (req, res)=> {
    const actorMovie = new ActorMovies(req.body);
    actorMovie.save()
})


module.exports = router;