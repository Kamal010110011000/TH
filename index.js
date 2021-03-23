const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/config').get(process.env.NODE_ENV);


const app = express();
const port = process.env.PORT || 4000;


// database connection
mongoose.Promise = global.Promise;
mongoose.connect(db.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true }, function(err) {
	if (err) console.log(err);
	console.log('database is connected');
});



app.listen(port, () =>{
    console.log(`server is listening at port ${port}`);
})