const Job = require('../models/JobModel');
const mongoose = require('mongoose');

// get all job
const getJobs = async (req, res) => {
    const jobs = await Job.find({}).sort({createdAt: -1});
    res.status(200).json(jobs);
}

// get a single job
const getJob = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'ID not valid'});
    }
    const job = await Job.findById(id);
    if (!job) {
        res.status(400).json({error: "no such job"});
    }
    res.status(200).json(job);
}


// create new job
const createJob = async (req, res) => {
    const {position, company, status, link} = req.body;

    // add document to db
    try {
        const job = await Job.create({position, company, status, link});
        res.status(200).json(job);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

// delete a job
const deleteJob = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'ID not valid'});
    }

    const job = await Job.findOneAndDelete({_id: id});

    if (!job) {
        res.status(400).json({error: "no such job"});
    }
    res.status(200).json(job);
}

// update a job
const updateJob = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'ID not valid'});
    }

    // spread the body to the fields
    const job = await Job.findOneAndUpdate({_id: id}, {
        ...req.body
    });

    if (!job) {
        res.status(400).json({error: "no such job"});
    }
    res.status(200).json(job);

}

module.exports = {
    getJob,
    getJobs,
    createJob,
    deleteJob,
    updateJob
}
