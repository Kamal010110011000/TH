const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const permissionSchema = Scheam({
    name: String,
    guard_name: String
},{timestamps: true});

module.exports = mongoose.model("Permission", permissionSchema);