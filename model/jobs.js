const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jobSchema = Schema({
    id: Number,
    queue: String,
    payload: String,
    attempts: Boolean,
    reserved_at: Number,
    available_at: Number,
},{timestamps: true});

module.exports = mongoose.model("Job", jobSchema);