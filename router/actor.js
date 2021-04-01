const express = require('express');
const router = express.Router();

const {Actor} = require('../model/subdocuments');

router.post("/", async (req, res)=> {
    const actor = new Actor(req.body);
    actor.save().then(data=> {
        res.status(201).json({
            status: 201,
            data: data
        });
    }).catch(err => {
        res.status(400).json({
            status: 400,
            data: err,
            message: "bad request"
        })
    })
});

router.get("/", async (req, res)=> {
    Actor.find().then(data=> {
        res.status(200).json({
            status: 200,
            data: data
        });
    }).catch(err => {
        res.status(400).json({
            status: 400,
            data: err
        });
    });
});

router.get("/:id", (req, res)=> {
    Actor.findById(req.params.id).then(data=> {
        res.status(200).json({
            status: 200,
            data: data
        });
    }).catch(err => {
        res.status(400).json({
            status: 400,
            data: err
        });
    });
})

router.put("/:id",async (req, res)=> {
    const actor = await Actor.findById(req.params.id);
    actor.updateOne(req.body).then(data=>{
        res.status(200).json({
            status: 200,
            message: "updated successfully"
        })
    }).catch(err => {
        res.status(400).json({
            status: 400,
            message: "bad request"
        });
    })
});

router.delete("/:id", async (req, res)=> {
    Actor.findByIdAndDelete(req.params.id).then(data=> {
        res.status(200).json({
            status: 200,
            data: data,
            message: "deleted"
        });
    }).catch(err => {
        res.status(400).json({
            status: 400,
            data: err,
            message: "bad request"
        })
    })
})