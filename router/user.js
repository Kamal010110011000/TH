const express = require('express');
const {User} = require('../model/user');
const router = express.Router();
const jwt = require('jsonwebtoken');

//create
router.post('/', (req, res) => {
	const user = new User(req.body);
	console.log(req.body);
	console.log(user);
	user.save()
		.then((data) => {
			const expire = Math.floor(Date.now() / 1000) + (60 * 60);
			var token = jwt.sign({exp: expire,data: {_id: data._id}}, 'secret');
			res.status(201).json({
				ststus: 201,
				token_type: "jsonwebtoken",
				expires_in: expire,
				access_token: token,
				refresh_token: "refreshtoken",
				data: data
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(400).json({
				status: 400,
				data: err
			});
		});
});

router.post('/login', (req, res)=>{
	
})

//retrieve
router.get('/', (req, res) => {
	User.find()
		.then((data) => {
			res.status(200).json({
				status: 200,
				data: data
			});
		})
		.catch((err) => {
			res.status(400).json({
				status: 400,
				data: err
			});
		});
});

//get by Id
//retrieve
router.get('/:id', (req, res) => {
	var id = req.params.id;
	User.findById(id)
		.then((data) => {
			res.status(200).json({
				status: 200,
				data: data
			});
		})
		.catch((err) => {
			res.status(404).json({
				status: 404,
				message: 'not found',
				data: err
			});
		});
});

//update
router.put('/:id', (req, res) => {
	var id = req.params.id;
	User.findById(id)
		.then((User) => {
			User.update(req.body)
				.then((data) => {
					res.status(201).json({
						status: 201,
						data: data,
						message: 'updated successfully'
					});
				})
				.catch((err) => {
					res.status(400).json({
						status: 400,
						message: 'bad request',
						data: err
					});
				});
		})
		.catch((err) => {
			res.status(404).json({
				status: 404,
				message: 'not found',
				data: err
			});
		});
});

//delete
router.delete('/:id', (req, res) => {
	var id = req.params.id;
	User.deleteOne({ id: id })
		.then((data) => {
			res.status(200).json({
				status: 200,
				message: 'deleted',
				data: data
			});
		})
		.catch((err) => {
			res.status(400).json({
				status: 400,
				message: 'not deleted'
			});
		});
});

module.exports = router;
