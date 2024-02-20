const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// create job Schema
const jobSchema = new Schema({
    position: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: false
    }
}, { timestamps: true });

// create and export a model of a job schema
module.exports = mongoose.model('Job', jobSchema);

