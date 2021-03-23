const express = require('express');
const Paypal = require('../model/user');
const router = express.Router();

//create
router.post('/', (req, res) => {
	const Paypal = new Paypal(req.body);
	Paypal.save()
		.then((data) => {
			res.status(201).json({
				ststus: 201,
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

//retrieve
router.get('/', (req, res) => {
	Paypal.find()
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
	Paypal.findById(id)
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
	Paypal.findById(id)
		.then((Paypal) => {
			Paypal.update(req.body)
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
	Paypal.deleteOne({ id: id })
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
